import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { Meta, ArticleList, Pagination, CategoryMappedTwemoji } from '@/components';
import { Article, Category } from '@/types';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle } from '@/styles';
import { getArticles, getCategories, getCategory } from '@/lib';
import { ARTICLES_PER_PAGE } from '@/utils';

type Props = {
  category: Category,
  articles: Article[],
  totalCount: number
}

type Params = {
  categoryId: string
}

const CategoryId: NextPage<Props> = (props: Props) => {
  const { category, articles, totalCount } = props
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

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const categories = await getCategories();
  const paths = categories.contents.map(category => {
    return {params: {categoryId: category.id }}
  })
  return {
    paths,
    fallback: false
  }
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context: GetStaticPropsContext<Params>) => {
  const { categoryId } = context.params
  const category: Category = await getCategory(categoryId);
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