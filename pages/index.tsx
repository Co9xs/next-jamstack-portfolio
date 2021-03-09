import Twemoji from 'react-twemoji';
import { GetStaticProps } from 'next';
import { Meta } from '../components/common/Meta';
import { getArticles } from '../lib/api';
import { Article } from '../types';
import { ArticleList } from '../components/ArticleList';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle } from '../styles/utils/common';
import { ARTICLES_IN_TOP } from '../utils';

type Props = {
  articles: Article[],
  totalCount: number
}

export default function Home({articles, totalCount}: Props) {
  return (
    <PageBase>
      <Meta
        title={'Home'}
        description={'Home画面'}
      />
      <ContentSection style={{ background: '#E6F2FF' }}>
        <ContentSectionInner>
          <SectionTitle><Twemoji tag="span">🙋‍♂️</Twemoji>プロフィール</SectionTitle>
          <p>Webアプリ開発を中心に学習中で、Webフロントエンドが得意領域です。最近はアルゴリズムやデータ構造の理解に課題を感じAtCoderに挑戦中。</p>
          <p>所属：東北大学 経済学部 経済学科</p>
          <p>生年月日：2000/02/03</p>
          <p>好きな言語：JavaScript, TypeScript</p>
          <p>好きなモノ：ゲーム、猫、ガジェット、サウナ</p>
          <p>Wantedly：<a href={"https://www.wantedly.com/id/ryou_fujishima_a"}>プロフィール</a></p>
          <p>雑記ブログ：<a href={"https://shimablogs.com/"}>しまぶろぐ</a></p>
        </ContentSectionInner>
      </ContentSection>
      <ContentSection>
        <ContentSectionInner>
          <SectionTitle><Twemoji tag="span">🏢</Twemoji>活動経歴</SectionTitle>
          <p>2021/02 Wantedly Webフロントエンドインターン(React)</p>
          <p>2020/08〜現在 都内企業でフロントエンド開発アルバイト(Angular, TypeScript, rxjs, storybook)</p>
          <p>2020/08 CyberAgent WebFrontendChanllenge(Vue, Netlify)</p>
          <p>2020/03 Webアプリ開発の学習開始</p>
          <p>2019/12 Webサイト制作の学習開始</p>
        </ContentSectionInner>
      </ContentSection>
      <ContentSection style={{ background: '#F1F5F9' }}>
        <ContentSectionInner>
          <SectionTitle><Twemoji tag="span">🖊️</Twemoji>最近の投稿</SectionTitle>
          <ArticleList articles={articles} />
        </ContentSectionInner>
      </ContentSection>
    </PageBase>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const data: {
    contents: Article[],
    totalCount: number
  } = await getArticles({ offset: 0, limit: ARTICLES_IN_TOP})
  return {
    props: {
      articles: data.contents,
      totalCount: data.totalCount
    },
  };
};
