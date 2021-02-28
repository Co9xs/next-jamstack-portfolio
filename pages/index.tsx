import styled from 'styled-components'
export default function Home({ blog }) {
  return (
    <div>
      <ContentSection style={{ background: '#E6F2FF'}}>
        <Heading2>プロフィール</Heading2>
        <p>現在はWebアプリ開発を中心に学習中で、Webフロントエンドが得意領域です。</p>
        <p>東北大学 経済学部 経済学科</p>
        <p>2000/02/03</p>
        <p>好きな言語：JavaScript, TypeScript</p>
        <p>好きなモノ：ゲーム、猫、ガジェット、サウナ</p>
        <p>Wantedly：プロフィール</p>
        <p>雑記ブログ：しまぶろぐ</p>
      </ContentSection>
      <ContentSection style={{background: '#F1F5F9'}}>
        <Heading2>活動経歴</Heading2>
        <p>2021/02 Wantedly Webフロントエンドインターン(React)</p>
        <p>2020/08〜現在 都内企業でフロントエンド開発アルバイト(Angular, TypeScript, rxjs, storybook)</p>
        <p>2020/08 CyberAgent WebFrontendChanllenge(Vue, Netlify)</p>
        <p>2020/03 Webアプリ開発の学習開始</p>
        <p>2019/12 Webサイト制作の学習開始</p>
      </ContentSection>
    </div>
  )
}

const Heading2 = styled.h2`
  margin: 1rem 0;
`

const ContentSection = styled.section`
  padding: 1rem 5rem;
`