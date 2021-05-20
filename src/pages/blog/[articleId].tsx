import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { Alert } from '@/components/Alert';
import { ArticleAuthor } from '@/components/ArticleAuthor';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ClockIcon } from '@/components/icons/ClockIcon';
import { PersonIcon } from '@/components/icons/PersonIcon';
import { Meta } from '@/components/Meta';
import { SideBarLayout } from '@/components/layouts/SideBarLayout';
import { SnsShareButtonList } from '@/components/SnsShareButtonList';
import { PageBase, ContentSection } from '@/styles/utils/common';
import { media } from '@/styles/utils/helper';
import { getArticle, getArticles, getCategories, getDraft, getPopularArticles } from '@/lib/api/index';
import { ArticleItem } from '@/apis/blog';
import { CategoryItem } from '@/apis/categories';
import { calcReadingTime, convertDateToString } from '@/utils/commonFunctions';
import { DraftItem } from '@/apis/blog/_contentId@string';
import Page404 from '../404';
import highlight from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import css from 'highlight.js/lib/languages/css';
import go from 'highlight.js/lib/languages/go';
import python from 'highlight.js/lib/languages/python';
import scss from 'highlight.js/lib/languages/scss';
import 'highlight.js/styles/night-owl.css';

type Props = {
  article: ArticleItem | DraftItem,
  categories: CategoryItem[],
  popularArticles: ArticleItem[]
}

type Params = {
  articleId: string
}

const isPublished = (article: ArticleItem | DraftItem): article is ArticleItem => {
  return ('publishedAt' in article) ? true : false
}

const articleId: NextPage<Props> = (props: Props) => {
  const { article, categories, popularArticles } = props;
  const [articleBody, setArticleBody] = useState<string | null>(null)

  // Handle DOM parsing in client side to apply syntax highlight using DOMParser API
  useEffect(() => {
    highlight.registerLanguage('javascript', javascript);
    highlight.registerLanguage('json', json);
    highlight.registerLanguage('css', css);
    highlight.registerLanguage('scss', scss);
    highlight.registerLanguage('go', go);
    highlight.registerLanguage('python', python);
    
    const parse = (string: string): Document => {
      const parser = new DOMParser()
      const dom = parser.parseFromString(string, 'text/html')
      return dom
    }
    const applyHighlight = (dom: Document): Document => {
      // handle code blocks
      dom.querySelectorAll('pre').forEach((pre) => {
        const code = pre.querySelector('code')
        code.classList.add('hljs')
        const text = code.textContent
        code.innerHTML = highlight.highlightAuto(text).value
      })
      return dom
    }
    const dom = parse(article.body)
    const highlightedDom = applyHighlight(dom)
    const body = highlightedDom.querySelector('body').innerHTML
    setArticleBody(body)
  }, [])

  // Handling 404 here, because set fallback option "true" in this page for preview mode
  if (!article) {
    return (
      <SideBarLayout categories={categories} popularArticles={popularArticles}>
        <Page404 layout={'Basic'}/>
      </SideBarLayout>
    )
  }

  const dateString = isPublished(article) ? 
    convertDateToString(new Date(article.publishedAt)) :
    convertDateToString(new Date(article.updatedAt))
  const readingTime = calcReadingTime(article.body.length)
  const defaultOgp = `https://res.cloudinary.com/fujishima/image/upload/l_text:Sawarabi%20Gothic_45_bold:${encodeURI(article.title)},co_rgb:333,w_800,c_fit/v1620608065/ogp/OgpImage_a2vlnk.png`
  const ogImage = article.ogimage ? article.ogimage.url : defaultOgp


  return (
    <SideBarLayout categories={categories} popularArticles={popularArticles}>
      <PageBase>
        <Meta
          title={article.title}
          image={ogImage}
        />
        <ContentSection>
          <Image src={ogImage} width={820} height={450} layout={"responsive"} priority={true}/>
          <DetailPageBreadcrumb>
            <Breadcrumb category={article.category}/>
          </DetailPageBreadcrumb>
          { !isPublished(article) &&
            <DetailPageAlert>
              <Alert text="下書きを閲覧中です"/>
            </DetailPageAlert>
          }
          <DetailPageArticle>
            <DetailPageSnsShare>
              <SnsShareButtonList articleId={article.id}/>
            </DetailPageSnsShare>
            <DetailPageContent>
              <DetailPageHeader>
                <DetailPageHeading>{article.title}</DetailPageHeading>
                <Link href={`/blog/categories/${article.category.id}/page/1`}>
                  <DetailPageCategory>{article.category.name}</DetailPageCategory>
                </Link>
                <DetailPageTags>
                  {article.tags.map(tag => (
                    <DetailPageTag key={tag.id}>#{tag.name}</DetailPageTag>
                  ))}
                </DetailPageTags>
                <DetailPageMetaData>
                  <DetailPageDate>
                    <ClockIcon />
                    <DetailPageDateText>
                      {dateString}
                    </DetailPageDateText>
                  </DetailPageDate>
                  <DetailPageReadingTime>{readingTime} min read</DetailPageReadingTime>
                  <DetailPageAuthor>
                    <PersonIcon/>
                    <DetailPageAuthorText>{ article.author?.displayName}</DetailPageAuthorText>
                  </DetailPageAuthor>
                </DetailPageMetaData>
              </DetailPageHeader>
              <DetailPageBody
                dangerouslySetInnerHTML={{
                  __html: articleBody,
                }}
              />
              <DetailArticleAuthor>
                <ArticleAuthor author={article.author}/>
              </DetailArticleAuthor>
            </DetailPageContent>
          </DetailPageArticle>
        </ContentSection>
      </PageBase>
    </SideBarLayout>
  );
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const articleList = await getArticles();
  const paths = articleList.contents.map(article => `/blog/${article.id}`);
  return {paths, fallback: true};
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context: GetStaticPropsContext<Params>) => {
  const { articleId } = context.params
  const content: DraftItem | ArticleItem = context.preview ? 
    await getDraft(articleId, (context.previewData as {id:string, draftKey: string}).draftKey) : 
    await getArticle(articleId)
  const [categoryList, popularArticleObject] = await Promise.all([
    getCategories(),
    getPopularArticles()
  ])
  return {
    props: {
      article: content,
      categories: categoryList.contents,
      popularArticles: popularArticleObject.contents
    },
  };
};

export default articleId

const DetailPageArticle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 32px;
  ${media.tablet`
    display: block;
  `}
`

const DetailPageBreadcrumb = styled.div`
  margin: 16px 0 0 0;
  ${media.phone`
    margin: 8px 0 0 0;
  `}
`

const DetailPageAlert = styled.div`
  margin: 16px 0 0 0;
  ${media.phone`
    margin: 8px 0 0 0;
  `}
`

const DetailPageSnsShare = styled.div`
  margin: 32px;
  & > ul {
    position: sticky;
    top: 152px;
  }
  ${media.tablet`
    display: none;
  `}
`

const DetailPageContent = styled.div`
  margin-left: auto;
`

const DetailPageHeader = styled.div`
  border-bottom: solid 1px #E4EDF4;
`

const DetailPageHeading = styled.h1`
  font-size: 34px;
  font-weight: bold;
  margin: 32px 0 16px;
  ${media.tablet`
    font-size: 32px;
    margin-top: 16px;
  `}
  ${media.phone`
    font-size: 28px;
  `}
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
      padding: 8px 24px;
      font-size: 30px;
    `}
    ${media.tablet`
      padding: 10px 20px;
      font-size: 28px;
    `}
    ${media.phone`
      padding: 8px 16px;
      font-size: 26px;
    `}
  }

  h3 {
    font-weight: bold;
    margin: 40px 0 20px;
    border-left: 3px solid #333;
    ${media.desktop`
      padding: 4px 16px;
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
    padding: 0 0 0 8px;
  }

  a {
    word-wrap:break-word;
  }

  ul {
    list-style-position: inside;
    padding: 0 0 0 8px;
  }

  blockquote {
    position: relative;
    padding: 30px 15px 8px 15px;
    box-sizing: border-box;
    font-style: italic;
    background: #efefef;
    color: #555;
    margin: 0;
  }

  blockquote:before{
    display: inline-block;
    position: absolute;
    top: 13px;
    left: 15px;
    content:'”';
    color: #cfcfcf;
    font-size: 28px;
    line-height: 1;
    font-weight: 900;
  }
`

const DetailArticleAuthor = styled.div`
  margin-top: 32px;
`