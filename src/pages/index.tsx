import { GetStaticProps, NextPage } from 'next';
import Twemoji from 'react-twemoji';
import { Meta, SkillIconList } from '@/components';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle, PlainText, SectionTitleText } from '@/styles';
import React from 'react';
import { Layout } from '@/types';

type Props = {
  layout: Layout
}

const Home: NextPage<Props> = (props) => {
  const image = "https://og-image-co9xs.vercel.app/Ryo Fujishima - Web Dev.png"
  return (
      <PageBase>
        <Meta
          title={'Home'}
          description={'Ryo Fujishima - Web Dev'}
          image={encodeURI(image)}
        />
        <ContentSection>
          <ContentSectionInner>
            <SectionTitle>
              <Twemoji tag="div">🙋‍♂️</Twemoji>
              <SectionTitleText>プロフィール</SectionTitleText>
            </SectionTitle>
            <PlainText>
              Web Developerとして活動している、しま | Ryo Fujishima です<br/>
              Webフロントエンドが得意領域で、パフォーマンス、UI/UX、アクセシビリティなど広く関心があります<br/>
            </PlainText>
            <PlainText>所属：東北大学 経済学部 経済学科 4年</PlainText>
            <PlainText>生年月日：2000/02/03</PlainText>
            <PlainText>好きな技術：React, TypeScript, etc</PlainText>
            <PlainText>好きなもの：e-sports観戦, 猫, ガジェット, サウナ, etc</PlainText>
            <PlainText>Twitter：<a href={"https://twitter.com/Co9xsR"} target={'_blank'} rel={'noopener'}>しま</a></PlainText>
            <PlainText>Github：<a href={"https://github.com/Co9xs"} target={'_blank'} rel={'noopener'}>Co9xs</a></PlainText>
            <PlainText>SpeakerDeck：<a href={"https://speakerdeck.com/co9xs"} target={'_blank'} rel={'noopener'}>発表資料一覧</a></PlainText>
            <PlainText>Wantedly：<a href={"https://www.wantedly.com/id/ryou_fujishima_a"} target={'_blank'} rel={'noopener'}>プロフィール</a></PlainText>
            <PlainText>雑記ブログ：<a href={"https://shimablogs.com/"} target={'_blank'} rel={'noopener'}>しまぶろぐ</a></PlainText>
          </ContentSectionInner>
        </ContentSection>
        <ContentSection background={'#FFF'} >
          <ContentSectionInner>
            <SectionTitle>
              <Twemoji tag="div">🧑‍💻</Twemoji>
              <SectionTitleText>言語・フレームワーク</SectionTitleText>
            </SectionTitle>
            <SkillIconList
              names={[
                'JavaScript',
                'TypeScript',
                'PHP',
                'ReactiveX',
                'Vue',
                'React',
                'Next',
                'Laravel',
                'Storybook',
                'Vercel',
                'GitHub',
                'GitLab'
              ]}
            />
          </ContentSectionInner>
        </ContentSection>
        <ContentSection>
          <ContentSectionInner>
            <SectionTitle>
              <Twemoji tag="div">🏫</Twemoji>
              <SectionTitleText>活動経歴</SectionTitleText>
            </SectionTitle>
            <PlainText>2022/04〜 メガベンチャーでフロントエンドエンジニアとして就業予定</PlainText>
            <PlainText>2021/02 Wantedly Webフロントエンドインターン(React)</PlainText>
            <PlainText>2020/08〜2020/03 都内企業でフロントエンド開発アルバイト(Angular, TypeScript, rxjs, storybook)</PlainText>
            <PlainText>2020/08 CyberAgent WebFrontendChanllenge(Vue, Netlify)</PlainText>
            <PlainText>2020/03 コーダーで受託制作&Webアプリ開発の学習開始</PlainText>
            <PlainText>2019/12 Webサイト制作の学習開始</PlainText>
          </ContentSectionInner>
        </ContentSection>
      </PageBase>
  )
}

export const getStaticProps: GetStaticProps<Props>  = async () => {
  return {
    props: {
      layout: 'Basic'
    }
  }
}

export default Home