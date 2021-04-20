import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Meta } from '@/components/common/Meta';
import { ArticleList } from '@/components/ArticleList';
import { Pagination } from '@/components/Pagination';
import { CategoryMappedTwemoji } from '@/components/CategoryMappedTwemoji';
import { Article, Category } from '@/types';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle } from '@/styles/utils/common';
import { getArticles, getCategories, getCategory } from '@/lib';
import { ARTICLES_PER_PAGE } from '@/utils';

type Props = {
  category: Category,
  articles: Article[],
  totalCount: number
}

const CategoryId: NextPage<Props> = ({ category, articles, totalCount }) => {
  const image = `https://og-image-co9xs.vercel.app/${category.name}カテゴリの記事一覧.png`
  return (
    <PageBase>
      <Meta
        title={`${category.name}カテゴリの記事一覧`}
        description={`${category.name}カテゴリの記事一覧`}
        image={encodeURI(image)}
      />
      <ContentSection background={'#F1F5F9'} style={{flexGrow: '1'}}>
        <ContentSectionInner>
          <SectionTitle>
            <CategoryMappedTwemoji category={category} />
            {category.name}カテゴリの記事一覧
          </SectionTitle>
          <ArticleList articles={articles} />
          <Pagination pageHref={`/blog/categories/${category.id}/page/`} totalCount={totalCount} perPage={ARTICLES_PER_PAGE} currentPage={1} />
        </ContentSectionInner>
      </ContentSection>
    </PageBase>
  )
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const categories = await getCategories();
  const paths = categories.contents.map(content => {
    return {params: {categoryId: content.id }}
  })
  return {
    paths,
    fallback: false
  }
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params?.categoryId as string
  const category: Category = await getCategory(id);
  const data: {
    contents: Article[],
    totalCount: number
  } = await getArticles({ offset: 0, limit: ARTICLES_PER_PAGE, category });
  return {
    props: {
      category,
      articles: data.contents,
      totalCount: data.totalCount,
    },
  };
};

export default CategoryId