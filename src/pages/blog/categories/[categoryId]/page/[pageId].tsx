import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { Meta } from '@/components/Meta';
import { ArticleList } from '@/components/ArticleList';
import { Pagination } from '@/components/Pagination';
import { SideBarLayout } from '@/components/layouts/SideBarLayout';
import { ContentSection, SectionTitle, PageTitle } from '@/styles/utils/common';
import { getArticles, getCategories, getCategory, getPopularArticles } from "@/lib/api/index"
import { ARTICLES_PER_PAGE } from '@/utils/constants';
import { range } from '@/utils/commonFunctions';
import { ArticleItem } from '@/apis/blog';
import { CategoryItem } from '@/apis/categories';
import { BrowserWindow } from '@/components/BrowserWindow';
import { SideBar } from '@/components/SideBar';

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
  const defaultOgp  = `https://res.cloudinary.com/fujishima/image/upload/l_text:Sawarabi%20Gothic_90_bold:${encodeURI(`Blog - ${category.name}の記事一覧`)},co_rgb:FFF,w_1200,c_fit/v1622604816/ogp/OgpImage_1_fdwdbv.png`
  return (
    <SideBarLayout>
      <Meta
        title={`${category.name}カテゴリの記事一覧`}
        description={`${category.name}カテゴリの記事一覧`}
        image={defaultOgp}
        favicon="📝"
      />
      <BrowserWindow>
      <PageTitle>Blog 📝</PageTitle>
        <ContentSection>
          <SectionTitle>{category.name} category</SectionTitle>
          <ArticleList articles={articles}/>
          <Pagination
            pageHref={`/blog/categories/${category.id}/page/`}
            totalCount={totalCount}
            perPage={ARTICLES_PER_PAGE}
            currentPage={currentPage}
          />
        </ContentSection>
      </BrowserWindow>
      <SideBar categories={categories} popularArticles={popularArticles}/>
    </SideBarLayout>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const categoryList = await getCategories()
  const paths = await Promise.all(categoryList.contents.map(async (category) => {
    const articleList = await getArticles({ offset: 0, limit: ARTICLES_PER_PAGE, category })
    return range(1, Math.ceil(articleList.totalCount / ARTICLES_PER_PAGE)).map(repo => {
      return {
        params: {
          categoryId: category.id,
          pageId: repo.toString()
        }
      }
    })
  }))
  return { paths: paths.flat(), fallback: false }
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context: GetStaticPropsContext<Params>) => {
  const { categoryId, pageId }= context.params
  const category = await getCategory(categoryId)
  const offset = (Number(pageId) - 1) * ARTICLES_PER_PAGE;
  const [
    articleList,
    categoryList,
    popularArticleObject
  ] = await Promise.all([
    getArticles({ offset, limit: ARTICLES_PER_PAGE, category }),
    getCategories(),
    getPopularArticles()
  ])
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

export default CategoryPageId