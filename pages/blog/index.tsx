import Twemoji from 'react-twemoji';
import { GetStaticProps } from "next";
import { Meta } from '../../components/common/Meta';
import { ArticleList } from '../../components/ArticleList';
import { Pagination } from '../../components/Pagination';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle } from '../../styles/utils/common';
import { Article } from '../../types';
import { getArticles } from '../../lib/api';
import { ARTICLES_PER_PAGE } from '../../utils';

type Props = {
  articles: Article[],
  totalCount
}

export default function Blog({ articles, totalCount }: Props) {
  return (
    <PageBase>
      <Meta
        title={'Blog'}
        description={'ブログ記事一覧'}
      />
      <ContentSection style={{ background: '#F1F5F9', flexGrow: '1'}}>
        <ContentSectionInner>
          <SectionTitle><Twemoji tag="span">🧑‍💻</Twemoji>記事一覧</SectionTitle>
          <ArticleList articles={articles} />
          <Pagination totalCount={totalCount} perPage={ARTICLES_PER_PAGE} currentPage={1}/>
        </ContentSectionInner>
      </ContentSection>
    </PageBase>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const data: {
    contents: Article[],
    totalCount: number
  } = await getArticles({ offset: 0, limit: ARTICLES_PER_PAGE});
  return {
    props: {
      articles: data.contents,
      totalCount: data.totalCount,
    },
  };
};