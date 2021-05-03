import styled from 'styled-components'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { Meta, ArticleList, Pagination, CategoryMappedTwemoji, SideBarLayout, Breadcrumb } from '@/components';
import { PageBase, ContentSection, SectionTitle, SectionTitleText } from '@/styles';
import { getArticles, getCategories, getCategory, getPopularArticles } from "@/lib"
import { ARTICLES_PER_PAGE, range } from '@/utils';
import { ArticleItem } from '@/apis/blog';
import { CategoryItem } from '@/apis/categories';
import { CommonList } from '@/apis/common';

type Props = {
  category: CategoryItem,
  articles: ArticleItem[],
  totalCount: number,
  currentPage: number,
  categories: CategoryItem[],
  popularArticles: ArticleItem[]
}

type Params = {
  categoryId: string
  pageId: string
}

const CategoryPageId: NextPage<Props> = (props: Props) => {
  const { category, articles, totalCount, currentPage, categories, popularArticles } = props
  const image = `https://og-image-co9xs.vercel.app/${category.name}カテゴリの記事一覧.png`
  return (
    <SideBarLayout categories={categories} popularArticles={popularArticles}>
      <PageBase>
        <Meta
          title={`${category.name}カテゴリの記事一覧`}
          description={`${category.name}カテゴリの記事一覧`}
          image={encodeURI(image)}
        />
        <ContentSection>
          <SectionTitle>
            <CategoryMappedTwemoji category={category} />
            <SectionTitleText>Articles in the {category.name} category</SectionTitleText>
          </SectionTitle>
          <CategoryPageBreadcrumb>
            <Breadcrumb category={category}/>
          </CategoryPageBreadcrumb>
          <ArticleList articles={articles}/>
          <Pagination
            pageHref={`/blog/categories/${category.id}/page/`}
            totalCount={totalCount}
            perPage={ARTICLES_PER_PAGE}
            currentPage={currentPage}
          />
        </ContentSection>
      </PageBase>
    </SideBarLayout>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const categoryList = await getCategories()
  const paths: (string | {
    params: Params,
    locale?: string
  })[] = [];
  await Promise.all(categoryList.contents.map(async (category) => {
    const articleList = await getArticles({ offset: 0, limit: ARTICLES_PER_PAGE, category })
    range(1, Math.ceil(articleList.totalCount / ARTICLES_PER_PAGE)).forEach(repo =>
      paths.push({
        params: {
          categoryId: category.id,
          pageId: repo.toString()
        }
      })
    )
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context: GetStaticPropsContext<Params>) => {
  const { categoryId, pageId }= context.params
  const category = await getCategory(categoryId)
  const offset = (Number(pageId) - 1) * ARTICLES_PER_PAGE;
  const articleList: CommonList<ArticleItem> = await getArticles({ offset, limit: ARTICLES_PER_PAGE, category })
  const categoryList = await getCategories()
  const popularArticleObject = await getPopularArticles()
  return {
    props: {
      category,
      articles: articleList.contents,
      totalCount: articleList.totalCount,
      currentPage: Number(pageId),
      categories: categoryList.contents,
      popularArticles: popularArticleObject.contents
    },
  }
}

const CategoryPageBreadcrumb = styled.div`
  margin: 16px 0 0 0;
`

export default CategoryPageId