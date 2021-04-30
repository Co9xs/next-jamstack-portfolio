import { GetStaticProps, NextPage } from 'next';
import Twemoji from 'react-twemoji';
import { Meta, BasicLayout, SkillIconList } from '@/components';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle, PlainText } from '@/styles';
import { getArticles } from '@/lib';
import { ARTICLES_IN_TOP } from '@/utils';
import React from 'react';

type Props = {
}

const Home: NextPage<Props> = (props) => {
  const image = "https://og-image-co9xs.vercel.app/Ryo Fujishima - Web Dev.png"
  return (
    <BasicLayout>
      <PageBase>
        <Meta
          title={'Home'}
          description={'Ryo Fujishima - Web Dev'}
          image={encodeURI(image)}
        />
        <ContentSection background={'#E6F2FF'}>
          <ContentSectionInner>
            <SectionTitle><Twemoji tag="span">🙋‍♂️</Twemoji>プロフィール</SectionTitle>
            <PlainText>
              Webアプリ開発を中心に学習中で、フロントエンドが得意領域です。<br />
              最近はアルゴリズムやデータ構造の理解に課題を感じAtCoderに挑戦中。
            </PlainText>
            <PlainText>所属：東北大学 経済学部 経済学科 4年</PlainText>
            <PlainText>生年月日：2000/02/03</PlainText>
            <PlainText>好きな言語：JavaScript, TypeScript, etc</PlainText>
            <PlainText>好きなモノ：e-sports観戦、猫、ガジェット、サウナ</PlainText>
            <PlainText>Twitter：<a href={"https://twitter.com/Co9xsR"} target={'_blank'} rel={'noopener'}>しま</a></PlainText>
            <PlainText>Github：<a href={"https://github.com/Co9xs"} target={'_blank'} rel={'noopener'}>Co9xs</a></PlainText>
            <PlainText>SpeakerDeck：<a href={"https://speakerdeck.com/co9xs"} target={'_blank'} rel={'noopener'}>発表資料一覧</a></PlainText>
            <PlainText>Wantedly：<a href={"https://www.wantedly.com/id/ryou_fujishima_a"} target={'_blank'} rel={'noopener'}>プロフィール</a></PlainText>
            <PlainText>雑記ブログ：<a href={"https://shimablogs.com/"} target={'_blank'} rel={'noopener'}>しまぶろぐ</a></PlainText>
          </ContentSectionInner>
        </ContentSection>
        <ContentSection background={'#FFF'} >
          <ContentSectionInner>
            <SectionTitle><Twemoji tag="span">🧑‍💻</Twemoji>言語・FW・ツール</SectionTitle>
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
        <ContentSection background={'#F1F5F9'}>
          <ContentSectionInner>
            <SectionTitle><Twemoji tag="span">🏢</Twemoji>活動経歴</SectionTitle>
            <PlainText>2022/04〜 某メガベンチャーでフロントエンドエンジニアとして就業予定</PlainText>
            <PlainText>2021/02 Wantedly Webフロントエンドインターン(React)</PlainText>
            <PlainText>2020/08〜2020/03 都内企業でフロントエンド開発アルバイト(Angular, TypeScript, rxjs, storybook)</PlainText>
            <PlainText>2020/08 CyberAgent WebFrontendChanllenge(Vue, Netlify)</PlainText>
            <PlainText>2020/03 コーダーで受託制作&Webアプリ開発の学習開始</PlainText>
            <PlainText>2019/12 Webサイト制作の学習開始</PlainText>
          </ContentSectionInner>
        </ContentSection>
      </PageBase>
    </BasicLayout>
  )
}

export default Home