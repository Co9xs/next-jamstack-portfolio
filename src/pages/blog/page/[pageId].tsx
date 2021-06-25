import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { SideBarLayout } from '@/components/layouts/SideBarLayout';
import { Meta } from '@/components/Meta';
import { ArticleList } from '@/components/ArticleList';
import { Pagination } from '@/components/Pagination';
import { PageBase, ContentSection, SectionTitle, PageTitle } from '@/styles/utils/common';
import { getArticles, getCategories, getPopularArticles } from "@/lib/api/index"
import { ARTICLES_PER_PAGE } from '@/utils/constants';
import { range } from '@/utils/commonFunctions';
import { ArticleItem } from '@/apis/blog';
import { CategoryItem } from '@/apis/categories';
import { BrowserWindow } from '@/components/BrowserWindow';

type Props = {
  articles: ArticleItem[]
  totalCount: number
  currentPage: number,
  layout: 'SideBar',
  categories: CategoryItem[], 
  popularArticles: ArticleItem[]
}

type Params = {
  pageId: string
}

const filterArticles = (articles: ArticleItem[], query: string): ArticleItem[] => {
  return query 
    ? articles.filter((article) => {
      const title = article.title.toLowerCase();
      return title.includes(query.toLowerCase());
    })
    : articles
};

const BlogPageId: NextPage<Props> = (props: Props) => {
  const { articles, totalCount, currentPage, categories, popularArticles } = props;
  const defaultOgp  = `https://res.cloudinary.com/fujishima/image/upload/l_text:Sawarabi%20Gothic_90_bold:${encodeURI('Blog - 記事一覧')},co_rgb:FFF,w_1200,c_fit/v1622604816/ogp/OgpImage_1_fdwdbv.png`
  return (
    <SideBarLayout categories={categories} popularArticles={popularArticles}>
      <PageBase>
        <Meta
          title={'Blog'}
          description={'Ryo Fujishima - Web Dev'}
          image={defaultOgp}
          favicon="📝"
        />
        <BrowserWindow>
          <PageTitle>Blog 📝</PageTitle>
          <ContentSection>
            <SectionTitle>Articles</SectionTitle>
            <ArticleList articles={articles} />
            <Pagination 
              pageHref={'/blog/page/'} 
              totalCount={totalCount} 
              perPage={ARTICLES_PER_PAGE} 
              currentPage={currentPage}
            />
          </ContentSection>
        </BrowserWindow>
      </PageBase>
    </SideBarLayout>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const articleList = await getArticles()
  const paths = range(1, Math.ceil(articleList.totalCount / ARTICLES_PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  )
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context: GetStaticPropsContext<Params>) => {
  const { pageId } = context.params;
  const offset = (Number(pageId) - 1) * ARTICLES_PER_PAGE;
  const [
    articleList, 
    categoryList, 
    popularArticleObject
  ] = await Promise.all([
    getArticles({ offset, limit: ARTICLES_PER_PAGE }),
    getCategories(),
    getPopularArticles()
  ])
  return {
    props: {
      articles: articleList.contents,
      totalCount: articleList.totalCount,
      currentPage: Number(pageId),
      layout: 'SideBar',
      categories: categoryList.contents,
      popularArticles: popularArticleObject.contents
    },
  }
}

export default BlogPageId