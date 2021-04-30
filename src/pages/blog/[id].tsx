import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import cheerio from 'cheerio';
import hljs from 'highlight.js'
import { ClockIcon, Meta, PersonIcon, SideBarLayout, SnsShareButtonList } from '@/components';
import { Article, Category } from '@/types';
import { PageBase, ContentSection, media } from '@/styles';
import { getArticle, getArticles, getCategories, getPoplarArticles } from '@/lib';
import { convertDateToString } from '@/utils';
import 'highlight.js/styles/night-owl.css';
import React from 'react';

type Props = {
  blog: Article,
  highlightedBody: string,
  categories: Category[],
  popularArticles: Article[]
}

type Params = {
  id: string
}

const BlogId: NextPage<Props> = (props: Props) => {
  const { blog, highlightedBody, categories, popularArticles } = props;
  const publishedAt = convertDateToString(new Date(blog.publishedAt));
  const image = `https://og-image-co9xs.vercel.app/${blog.title}.png`
  return (
    <SideBarLayout categories={categories} poplarArticles={popularArticles}>
      <PageBase>
        <Meta
          title={blog.title}
          image={encodeURI(image)}
        />
        <ContentSection>
          <DetailPageImage></DetailPageImage>
          <DetailPageArticle>
          <DetailPageSnsShare>
            <SnsShareButtonList articleId={blog.id}/>
          </DetailPageSnsShare>
          <DetailPageContent>
          <DetailPageHeader>
            <DetailPageHeading>{blog.title}</DetailPageHeading>
            <Link href={`/blog/categories/${blog.category.id}/page/1`}>
              <DetailPageCategory>{blog.category.name}</DetailPageCategory>
            </Link>
            <DetailPageTags>
              {blog.tags.map(tag => (
                <DetailPageTag key={tag.id}>#{tag.name}</DetailPageTag>
              ))}
            </DetailPageTags>
            <DetailPageMetaData>
              <DetailPageDate>
                <ClockIcon />
                <DetailPageDateText>
                  {publishedAt}
                </DetailPageDateText>
              </DetailPageDate>
              <DetailPageReadingTime>15 min read</DetailPageReadingTime>
              <DetailPageAuthor>
                <PersonIcon/>
                <DetailPageAuthorText>{ blog.author?.displayName}</DetailPageAuthorText>
              </DetailPageAuthor>
            </DetailPageMetaData>
          </DetailPageHeader>
          <DetailPageBody
            dangerouslySetInnerHTML={{
              __html: `${highlightedBody}`,
            }}
              />
          </DetailPageContent>
          </DetailPageArticle>
        </ContentSection>
      </PageBase>
    </SideBarLayout>
  );
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await getArticles();
  const paths = data.contents.map(content => `/blog/${content.id}`);
  return {paths, fallback: false};
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context: GetStaticPropsContext<Params>) => {
  const { id } = context.params
  const data = await getArticle(id);

  // cheerioとhighlight.jsで事前にハイライトを適用
  const $ = cheerio.load(data.body);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })

  const categoryData = await getCategories()
  const poplarArticleData = await getPoplarArticles()
  return {
    props: {
      blog: data,
      highlightedBody: $.html(),
      categories: categoryData.contents,
      popularArticles: poplarArticleData.articles
    },
  };
};

export default BlogId

const DetailPageImage = styled.div`
  width: 100%;
  height: 410px;
  background-color: #EEE;
`

const DetailPageArticle = styled.div`
  display: flex;
  justify-content: space-between;
`

const DetailPageSnsShare = styled.div`
  margin: 32px;
  & > ul {
    position: sticky;
    top: 120px;
  }
`

const DetailPageContent = styled.div`
  margin-left: auto;
`

const DetailPageHeader = styled.div`
  border-bottom: solid 1px #E4EDF4;
`

const DetailPageHeading = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin: 32px 0 16px;
`
const DetailPageCategory = styled.span`
  color: #60A5FA;
  padding: 4px 8px;
  border: 2px solid #60A5FA;
  border-radius: 3px;
  display: inline-block;
  font-size: 14px;
  margin-right: 16px;
  margin-bottom: 8px;
  cursor: pointer;
`

const DetailPageTags = styled.span`
  color: #616269;
  margin-bottom: 10px;
`

const DetailPageTag = styled.span`
  margin-right: 8px;
`

const DetailPageMetaData = styled.div`
  color: #616269;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

const DetailPageDate = styled.span`
  margin-right: 16px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.smoke};
`

const DetailPageDateText = styled.span`
  margin-left: 8px;
`

const DetailPageReadingTime = styled.div`
  margin-right: 16px;
`

const DetailPageAuthor = styled.div`
  display: flex;
  align-items: center;
`

const DetailPageAuthorText = styled.span`
  margin-left: 8px;
`

const DetailPageBody= styled.div`
  h2 {
    font-weight: bold;
    margin: 40px 0 20px;
    background-color: #eee;
    border-left: 3px solid #333;
    ${media.desktop`
      padding: 10px 20px;
      font-size: 30px;
    `}
    ${media.tablet`
      padding: 10px 20px;
      font-size: 30px;
    `}
    ${media.phone`
      padding: 8px 16px;
      font-size: 28px;
    `}

    //DarkMode
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.black};
    border-color: ${({ theme }) => theme.smoke};
  }

  h3 {
    font-weight: bold;
    margin: 40px 0 20px;
    border-left: 3px solid #333;
    ${media.desktop`
      padding: 10px 20px;
      font-size: 26px;
    `}
    ${media.tablet`
      padding: 10px 20px;
      font-size: 24px;
    `}
    ${media.phone`
      padding: 8px 16px;
      font-size: 22px;
    `}
  }

  h4 {
    margin: 40px 0 20px;
    border-bottom: 3px solid #E5E4E6;
    ${media.desktop`
      padding: 10px 20px;
      font-size: 24px;
    `}
    ${media.tablet`
      padding: 10px 20px;
      font-size: 22px;
    `}
    ${media.phone`
      padding: 8px 16px;
      font-size: 20px;
    `}
  }

  img {
    width: 100%;
    height: auto;
  }

  p {
    line-height: 1.8;
    letter-spacing: 0.2px;
  }

  ol {
    list-style-type: decimal;
    list-style-position: inside;
  }

  a {
    word-wrap:break-word;
  }

  ul {
    list-style-position: inside;
  }
`

