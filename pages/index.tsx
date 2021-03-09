import Twemoji from 'react-twemoji';
import { GetStaticProps } from 'next';
import { Meta } from '../components/common/Meta';
import { getArticles } from '../lib/api';
import { Article } from '../types';
import { ArticleList } from '../components/ArticleList';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle, PlainText } from '../styles/utils/common';
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
      />
      <ContentSection style={{ background: '#E6F2FF' }}>
        <ContentSectionInner>
          <SectionTitle><Twemoji tag="span">🙋‍♂️</Twemoji>プロフィール</SectionTitle>
          <PlainText>Webアプリ開発を中心に学習中で、Webフロントエンドが得意領域です。最近はアルゴリズムやデータ構造の理解に課題を感じAtCoderに挑戦中。</PlainText>
          <PlainText>所属：東北大学 経済学部 経済学科</PlainText>
          <PlainText>生年月日：2000/02/03</PlainText>
          <PlainText>好きな言語：JavaScript, TypeScript</PlainText>
          <PlainText>好きなモノ：ゲーム、猫、ガジェット、サウナ</PlainText>
          <PlainText>Wantedly：<a href={"https://www.wantedly.com/id/ryou_fujishima_a"}>プロフィール</a></PlainText>
          <PlainText>雑記ブログ：<a href={"https://shimablogs.com/"}>しまぶろぐ</a></PlainText>
        </ContentSectionInner>
      </ContentSection>
      <ContentSection>
        <ContentSectionInner>
          <SectionTitle><Twemoji tag="span">🏢</Twemoji>活動経歴</SectionTitle>
          <PlainText>2021/02 Wantedly Webフロントエンドインターン(React)</PlainText>
          <PlainText>2020/08〜現在 都内企業でフロントエンド開発アルバイト(Angular, TypeScript, rxjs, storybook)</PlainText>
          <PlainText>2020/08 CyberAgent WebFrontendChanllenge(Vue, Netlify)</PlainText>
          <PlainText>2020/03 Webアプリ開発の学習開始</PlainText>
          <PlainText>2019/12 Webサイト制作の学習開始</PlainText>
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
