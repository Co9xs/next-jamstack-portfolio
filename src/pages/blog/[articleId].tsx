import Link from 'next/link';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import Prism from 'prismjs'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { Alert } from '@/components/Alert';
import { ClockIcon } from '@/components/icons/ClockIcon';
import { Meta } from '@/components/Meta';
import { SideBarLayout } from '@/components/layouts/SideBarLayout';
import { BrowserWindow } from '@/components/BrowserWindow';
import { SideBar } from '@/components/SideBar';
import { ContentSection } from '@/styles/utils/common';
import { media } from '@/styles/utils/helper';
import { getArticle, getArticles, getDraft } from '@/lib/api/index';
import { ArticleItem, DraftItem } from '@/apis/blog';
import { calcReadingTime, convertDateToString, createOgpUrl, markdownToHtml } from '@/utils/commonFunctions';

type Props = {
  article: ArticleItem | DraftItem,
  articleBodyHtml: string
}

type Params = {
  articleId: string
}

const isPublished = (article: ArticleItem | DraftItem): article is ArticleItem => {
  return ('publishedAt' in article) ? true : false
}

const articleId: NextPage<Props> = (props: Props) => {
  const { article, articleBodyHtml } = props;

  useEffect(() => {
    Prism.highlightAll()
  },[])

  const dateString = isPublished(article) ? 
    convertDateToString(new Date(article.publishedAt)) :
    convertDateToString(new Date(article.updatedAt))
  const readingTime = calcReadingTime(article.body.length)
  const defaultOgpUrl  = createOgpUrl(article.title)
  const ogpUrl = article.ogimage ? article.ogimage.url : defaultOgpUrl

  return (
    <SideBarLayout>
      <SideBar articleBody={articleBodyHtml}/>
      <Meta
        title={article.title}
        image={ogpUrl}
        favicon={article.emoji}
      />
      <BrowserWindow>
        <ContentSection>
          { !isPublished(article) &&
            <DetailPageAlert>
              <Alert text="下書きを閲覧中です"/>
            </DetailPageAlert>
          }
          <DetailPageArticle>
            <DetailPageHeader>
              <DetailPageTitle>{article.title}</DetailPageTitle>
              <DetailPageMetaData>
              <Link href={`/blog/categories/${article.category?.id}/page/1`}>
                <DetailPageCategory>{article.category?.name}</DetailPageCategory>
              </Link>
              <DetailPageTags>
                {article.tags.map(tag => (
                  <DetailPageTag key={tag?.id}>#{tag?.name}</DetailPageTag>
                ))}
              </DetailPageTags>
                <DetailPageDate>
                  <ClockIcon fill="var(--colors-gray)"/>
                  <DetailPageDateText>
                    {dateString}
                  </DetailPageDateText>
                </DetailPageDate>
                <DetailPageReadingTime>{readingTime} min read</DetailPageReadingTime>
              </DetailPageMetaData>
            </DetailPageHeader>
            <DetailPageBody
              dangerouslySetInnerHTML={{
                __html: articleBodyHtml,
              }}
            />
          </DetailPageArticle>
        </ContentSection>
      </BrowserWindow>
    </SideBarLayout>
  );
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const articleList = await getArticles();
  const paths = articleList.contents.map(article => `/blog/${article.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context: GetStaticPropsContext<Params>) => {
  const { articleId } = context.params
  const content: DraftItem | ArticleItem = context.preview 
    ? await getDraft(articleId, (context.previewData as {id:string, draftKey: string}).draftKey)
    : await getArticle(articleId)
  const articleBodyHtml = markdownToHtml(content.body)

  return {
    props: {
      article: content,
      articleBodyHtml,
    },
  };
};

export default articleId

const DetailPageArticle = styled.div`
`

const DetailPageAlert = styled.div`
  margin: var(--spacing-3) 0 0 0;
  ${media.phone`
    margin: var(--spacing-2) 0 0 0;
  `}
`

const DetailPageHeader = styled.div`
  border-bottom: var(--border-size-1) solid var(--colors-dark-gray);
`

const DetailPageTitle = styled.h1`
  font-size: var(--font-size-10);
  font-weight: var(--font-weight-bold);
  margin: var(--spacing-3) 0;
  color: var(--colors-green);
  ${media.tablet`
    font-size: var(--font-size-9);
    margin: var(--spacing-3) 0;
  `}
  ${media.phone`
    font-size: var(--font-size-7);
  `}
`

const DetailPageMetaData = styled.div`
  color: var(--colors-gray);
  margin-bottom: var(--spacing-3);
  font-size: var(--font-size-1);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const DetailPageCategory = styled.span`
  color: var(--colors-blue-green);
  padding: var(--spacing-1) var(--spacing-2);
  border: var(--border-size-2) solid var(--colors-blue-green);
  border-radius: var(--border-size-3);
  margin-right: var(--spacing-3);
  cursor: pointer;
`

const DetailPageTags = styled.span`
  padding: var(--spacing-2) 0;
  display: block;
  margin-right: var(--spacing-3);
`

const DetailPageTag = styled.span`
  & + span {
    margin-left: var(--spacing-1);
  }
`

const DetailPageDate = styled.span`
  padding: var(--spacing-2) 0;
  margin-right: var(--spacing-3);
  display: flex;
  align-items: center;
`

const DetailPageDateText = styled.span`
  margin-left: var(--spacing-1);
`

const DetailPageReadingTime = styled.div`
  margin-right: var(--spacing-2);
  padding: var(--spacing-2) 0;
  display: block;
`

const DetailPageBody= styled.div`
  h2 {
    margin: var(--spacing-4) 0 0 0;
    border-left: var(--border-size-3) solid var(--colors-green);
    font-weight: var(--font-weight-bold);
    padding: var(--spacing-1) var(--spacing-3);
    ${media.desktop`
      font-size: var(--font-size-7);
    `}
    ${media.tablet`
      font-size: var(--font-size-6);
    `}
    ${media.phone`
      font-size: var(--font-size-5);
    `}
  }

  h3 {
    margin: var(--spacing-4) 0 0 0;
    font-weight: var(--font-weight-bold);
    padding: var(--spacing-1) 0;
    ${media.desktop`
      font-size: var(--font-size-5);
    `}
    ${media.tablet`
      font-size: var(--font-size-4);
    `}
    ${media.phone`
      font-size: var(--font-size-3);
    `}
  }

  h4 {
    margin: var(--spacing-4) 0 0 0;
    font-weight: var(--font-weight-heading);
    padding: var(--spacing-1) 0;
    ${media.desktop`
      font-size: var(--font-size-4);
    `}
    ${media.tablet`
      font-size: var(--font-size-3);
    `}
    ${media.phone`
      font-size: var(--font-size-2);
    `}
  }

  img {
    width: 100%;
    height: auto;
  }

  p {
    line-height: 1.8;
    margin: var(--spacing-3) 0;
  }

  ol {
    list-style-type: decimal;
    list-style-position: inside;
    padding: 0 0 0 8px;
  }

  a {
    word-wrap:break-word;
  }

  ul {
    list-style-position: inside;
    padding: 0 0 0 var(--spacing-2);
  }

  blockquote {
    position: relative;
    padding: 30px 15px 8px 15px;
    box-sizing: border-box;
    font-style: italic;
    background: var(--colors-dark-gray);
    color: var(--colors-white);
    margin: 0;
  }

  blockquote:before{
    position: absolute;
    top: var(--spacing-3);
    left: var(--spacing-2);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-7);
    color: var(--colors-white);
    content:'”';
    line-height: 1;
    display: inline-block;
  }

  pre {
    width: 100%;
    overflow-x: scroll;
  }
`