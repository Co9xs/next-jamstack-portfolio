import Twemoji from 'react-twemoji';
import { GetStaticProps } from 'next';
import { Meta } from '../../../components/common/Meta';
import { ArticleList } from '../../../components/ArticleList';
import { Pagination } from '../../../components/Pagination';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle } from '../../../styles/utils/common';
import { getArticles } from "../../../lib"
import { Article } from '../../../types';
import { ARTICLES_PER_PAGE, range } from '../../../utils';

type Props = {
  articles: Article[]
  totalCount: number
  currentPage: number
}

export default function BlogPageId({ articles, totalCount, currentPage }: Props) {
  return (
    <PageBase>
      <Meta
        title={'Blog'}
        description={`ブログ記事一覧 - ${currentPage}ページ目`}
      />
      <ContentSection style={{ background: '#F1F5F9', flexGrow: '1'}}>
        <ContentSectionInner>
          <SectionTitle><Twemoji tag="span">🧑‍💻</Twemoji>記事一覧</SectionTitle>
          <ArticleList articles={articles} />
          <Pagination totalCount={totalCount} perPage={ARTICLES_PER_PAGE} currentPage={currentPage}/>
        </ContentSectionInner>
      </ContentSection>
    </PageBase>
  )
}

export const getStaticPaths = async () => {
  const data = await getArticles()
  const paths = range(1, Math.ceil(data.totalCount / ARTICLES_PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  )
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params?.id as string;
  const offset = (Number(id) - 1) * ARTICLES_PER_PAGE;
  const data: {
    contents: Article[]
    totalCount: number
  } = await getArticles({ offset, limit: ARTICLES_PER_PAGE })
  return {
    props: {
      articles: data.contents,
      totalCount: data.totalCount,
      currentPage: Number(id),
    },
  }
}