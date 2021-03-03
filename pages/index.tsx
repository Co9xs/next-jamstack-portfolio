import Twemoji from 'react-twemoji';
import { Meta } from '../components/Meta';
import { ArticleList } from '../components/ArticleList';
import { PageBase, ContentSection, ContentSectionInner, Heading2 } from '../styles/utils/styled';

export default function Home({articles}) {
  return (
    <PageBase>
      <Meta
        title={'Home'}
        description={'Home画面'}
      />
      <ContentSection style={{ background: '#E6F2FF' }}>
        <ContentSectionInner>
          <Heading2><Twemoji tag="span">🙋‍♂️</Twemoji>プロフィール</Heading2>
          <p>現在はWebアプリ開発を中心に学習中で、Webフロントエンドが得意領域です。</p>
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
          <Heading2><Twemoji tag="span">🏢</Twemoji>活動経歴</Heading2>
          <p>2021/02 Wantedly Webフロントエンドインターン(React)</p>
          <p>2020/08〜現在 都内企業でフロントエンド開発アルバイト(Angular, TypeScript, rxjs, storybook)</p>
          <p>2020/08 CyberAgent WebFrontendChanllenge(Vue, Netlify)</p>
          <p>2020/03 Webアプリ開発の学習開始</p>
          <p>2019/12 Webサイト制作の学習開始</p>
        </ContentSectionInner>
      </ContentSection>
      <ContentSection style={{ background: '#F1F5F9' }}>
        <ContentSectionInner>
          <Heading2><Twemoji tag="span">🖊️</Twemoji>最近の投稿</Heading2>
          <ArticleList articles={articles} />
        </ContentSectionInner>
      </ContentSection>
    </PageBase>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://shima.microcms.io/api/v1/blog?offset=0&limit=3', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      articles: data.contents,
    },
  };
};
