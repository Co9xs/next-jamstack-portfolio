import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import Twemoji from 'react-twemoji';
import { Meta, ArticleList, Pagination, SideBarLayout } from '@/components';
import { Article, Category } from '@/types';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle } from '@/styles';
import { getArticles, getCategories, getPoplarArticles } from "@/lib"
import { ARTICLES_PER_PAGE, range } from '@/utils';

type Props = {
  articles: Article[]
  totalCount: number
  currentPage: number,
  layout: 'SideBar',
  categories: Category[],
  poplarArticles: Article[]
}

type Params = {
  id: string
}

const BlogPageId: NextPage<Props> = (props: Props) => {
  const { articles, totalCount, currentPage, layout, categories, poplarArticles } = props;
  const image = "https://og-image-co9xs.vercel.app/Ryo Fujishima - Web Dev.png"
  return (
    <SideBarLayout categories={categories} poplarArticles={poplarArticles}>
      <PageBase>
        <Meta
          title={'Blog'}
          description={'Ryo Fujishima - Web Dev'}
          image={encodeURI(image)}
        />
        <ContentSection style={{flexGrow: '1'}}>
          {/* <ContentSectionInner> */}
            <SectionTitle><Twemoji tag="span">🧑‍💻</Twemoji>記事一覧</SectionTitle>
            <ArticleList articles={articles} />
            <Pagination pageHref={'/blog/page/'} totalCount={totalCount} perPage={ARTICLES_PER_PAGE} currentPage={currentPage}/>
          {/* </ContentSectionInner> */}
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
  const articleData = await getArticles({ offset, limit: ARTICLES_PER_PAGE })
  const categoryData = await getCategories()
  const poplarArticleData = await getPoplarArticles()
  console.log(poplarArticleData.contents)
  return {
    props: {
      articles: articleData.contents,
      totalCount: articleData.totalCount,
      currentPage: Number(id),
      layout: 'SideBar',
      categories: categoryData.contents,
      poplarArticles: poplarArticleData.articles
    },
  }
}

export default BlogPageId