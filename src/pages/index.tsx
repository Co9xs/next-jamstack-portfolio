import { GetStaticProps, NextPage } from 'next';
import { Meta } from '@/components/Meta';
import { BrowserWindow } from '@/components/BrowserWindow';
import { SkillIconList } from '@/components/SkillIconList';
import { PageBase, ContentSection, SectionTitle, PlainText, PageTitle } from '@/styles/utils/common';
import { Layout } from '@/types/index';
import React from 'react';
import { ZennIcon } from '@/components/icons/ZennIcon';

type Props = {
  layout: Layout
}

const Home: NextPage<Props> = (props) => {
  const defaultOgp = `https://res.cloudinary.com/fujishima/image/upload/l_text:Sawarabi%20Gothic_45_bold:${encodeURI('Fujishima.dev')},co_rgb:333,w_800,c_fit/v1620608065/ogp/OgpImage_a2vlnk.png`
  return (
    <PageBase>
      <Meta
        title={'Home'}
        description={'Ryo Fujishima - Web Dev'}
        image={encodeURI(defaultOgp)}
        favicon="👋"
      />
      <BrowserWindow>
      <ZennIcon></ZennIcon>
        <PageTitle>Hello, World 👋</PageTitle>
        <ContentSection>
          <SectionTitle>Profile</SectionTitle>
          <PlainText>Hi, I'm Ryo Fujishima, a junior web engineer interested in frontend development and web design.</PlainText>
          <PlainText>I belong to the Faculty of Economics of Tohoku University.</PlainText>
        </ContentSection>
        <ContentSection>
          <SectionTitle>Experience</SectionTitle>
          <PlainText>2022.04〜 Will work at CyberAgent, as a full-time employee</PlainText>
          <PlainText>2021.02〜 Worked at Wantedly, as an intern(React, webpack)</PlainText>
          <PlainText>2020.08〜 Worked at ORO, as a part time job(Angular, rxjs, storybook)</PlainText>
          <PlainText>2020.08〜 Participated in CyberAgent Web Frontend Chanllenge(Vue, Netlify)</PlainText>
          <PlainText>2020.03〜 Started learing web development(JavaScript)</PlainText>
          <PlainText>2019.12〜 Started learing web design(HTML&CSS)</PlainText>
        </ContentSection>
        <ContentSection>
          <SectionTitle>Language・Tools</SectionTitle>
          <SkillIconList
            names={[
              'JavaScript',
              'TypeScript',
              'ReactiveX',
              'Vue',
              'React',
              'Next',
              'Webpack',
              'Storybook',
            ]}
          />
        </ContentSection>
      </BrowserWindow>
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
