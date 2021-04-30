import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import Twemoji from 'react-twemoji';
import { Meta, ArticleList, Pagination } from '@/components';
import { Article } from '@/types';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle } from '@/styles';
import { getArticles } from "@/lib"
import { ARTICLES_PER_PAGE, range } from '@/utils';
import { SideBarLayout } from '@/components/layouts/SideBarLayout';

type Props = {
  articles: Article[]
  totalCount: number
  currentPage: number,
  layout: 'SideBar'
}

type Params = {
  id: string
}

const BlogPageId: NextPage<Props> = (props: Props) => {
  const { articles, totalCount, currentPage, layout } = props;
  const image = "https://og-image-co9xs.vercel.app/Ryo Fujishima - Web Dev.png"
  console.log(layout)
  return (
    <SideBarLayout>
      <PageBase>
        <Meta
          title={'Blog'}
          description={'Ryo Fujishima - Web Dev'}
          image={encodeURI(image)}
        />
        <ContentSection background={'#F1F5F9'} style={{flexGrow: '1'}}>
          <ContentSectionInner>
            <SectionTitle><Twemoji tag="span">🧑‍💻</Twemoji>記事一覧</SectionTitle>
            <ArticleList articles={articles} />
            <Pagination pageHref={'/blog/page/'} totalCount={totalCount} perPage={ARTICLES_PER_PAGE} currentPage={currentPage}/>
          </ContentSectionInner>
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
  const data = await getArticles({ offset, limit: ARTICLES_PER_PAGE })
  return {
    props: {
      articles: data.contents,
      totalCount: data.totalCount,
      currentPage: Number(id),
      layout: 'SideBar'
    },
  }
}

export default BlogPageId