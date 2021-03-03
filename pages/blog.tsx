import Twemoji from 'react-twemoji';
import { GetStaticProps } from "next";
import { Meta } from '../components/common/Meta';
import { ArticleList } from '../components/ArticleList';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle } from '../styles/utils/common';
import { Article } from '../types';
import { getArticles } from '../lib/api';

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
      <ContentSection style={{ background: '#F1F5F9', minHeight: '100%'}}>
        <ContentSectionInner>
          <SectionTitle><Twemoji tag="span">🧑‍💻</Twemoji>記事一覧</SectionTitle>
          <ArticleList articles={articles}/>
        </ContentSectionInner>
      </ContentSection>
    </PageBase>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const data: {
    contents: Article[],
    totalCount: number
  } = await getArticles();
  // TODO: ページネーション実装時にoffsetとlimitを指定する
  return {
    props: {
      articles: data.contents,
      totalCount: data.totalCount,
    },
  };
};