import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { Meta, ArticleList, Pagination, CategoryMappedTwemoji, SideBarLayout } from '@/components';
import { Article, Category } from '@/types';
import { PageBase, ContentSection, SectionTitle, SectionTitleText } from '@/styles';
import { getArticles, getCategories, getCategory, getpopularArticles } from "@/lib"
import { ARTICLES_PER_PAGE, range } from '@/utils';

type Props = {
  category: Category
  articles: Article[]
  totalCount: number
  currentPage: number,
  categories: Category[],
  popularArticles: any[]
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
            <SectionTitleText>{category.name}カテゴリの記事一覧</SectionTitleText>
          </SectionTitle>
          <ArticleList articles={articles} />
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
  const data = await getCategories()
  const categories = data.contents;
  const paths: (string | {
    params: Params,
    locale?: string
  })[] = [];
  await Promise.all(categories.map(async (category) => {
    const data = await getArticles({ offset: 0, limit: ARTICLES_PER_PAGE, category })
    range(1, Math.ceil(data.totalCount / ARTICLES_PER_PAGE)).forEach(repo =>
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
  const data = await getArticles({ offset, limit: ARTICLES_PER_PAGE, category })
  const categoryData = await getCategories()
  const popularArticleData = await getpopularArticles()
  return {
    props: {
      category,
      articles: data.contents,
      totalCount: data.totalCount,
      currentPage: Number(pageId),
      categories: categoryData.contents,
      popularArticles: popularArticleData.articles
    },
  }
}

export default CategoryPageId