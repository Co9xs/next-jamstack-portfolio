import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import Twemoji from 'react-twemoji';
import { Meta, ArticleList, Pagination, SideBarLayout } from '@/components';
import { Article, Category } from '@/types';
import { PageBase, ContentSection, SectionTitle, SectionTitleText } from '@/styles';
import { getArticles, getCategories, getPopularArticles } from "@/lib"
import { ARTICLES_PER_PAGE, range } from '@/utils';
import React from 'react';
import { ArticleItem } from '@/apis/blog';
import { CategoryItem } from '@/apis/categories';

type Props = {
  articles: ArticleItem[]
  totalCount: number
  currentPage: number,
  layout: 'SideBar',
  categories: CategoryItem[], 
  popularArticles: ArticleItem[]
}

type Params = {
  id: string
}

const BlogPageId: NextPage<Props> = (props: Props) => {
  const { articles, totalCount, currentPage, categories, popularArticles } = props;
  const image = "https://og-image-co9xs.vercel.app/Ryo Fujishima - Web Dev.png"
  return (
    <SideBarLayout categories={categories} popularArticles={popularArticles}>
      <PageBase>
        <Meta
          title={'Blog'}
          description={'Ryo Fujishima - Web Dev'}
          image={encodeURI(image)}
        />
        <ContentSection>
          <SectionTitle>
            <Twemoji tag="div">📝</Twemoji>
            <SectionTitleText>Articles</SectionTitleText>
          </SectionTitle>
          <ArticleList articles={articles} />
          <Pagination pageHref={'/blog/page/'} totalCount={totalCount} perPage={ARTICLES_PER_PAGE} currentPage={currentPage}/>
        </ContentSection>
      </PageBase>
    </SideBarLayout>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await getArticles()
  const paths = range(1, Math.ceil(data.totalCount / ARTICLES_PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  )
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context: GetStaticPropsContext<Params>) => {
  const { id } = context.params;
  const offset = (Number(id) - 1) * ARTICLES_PER_PAGE;
  const articleList = await getArticles({ offset, limit: ARTICLES_PER_PAGE })
  const categoryList = await getCategories()
  const popularArticleObject = await getPopularArticles()
  return {
    props: {
      articles: articleList.contents,
      totalCount: articleList.totalCount,
      currentPage: Number(id),
      layout: 'SideBar',
      categories: categoryList.contents,
      popularArticles: popularArticleObject.contents
    },
  }
}

export default BlogPageId