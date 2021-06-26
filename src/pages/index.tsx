import posts from '../../.contents/posts.json'
import { NextPage } from 'next';
import { createOgpUrl } from '@/utils';
import { Meta } from '@/components/Meta';
import { BrowserWindow } from '@/components/BrowserWindow';
import { SkillIconList } from '@/components/SkillIconList';
import { ExternalPostList } from '@/components/ExternalPostList'
import { Footer } from '@/components/Footer';
import { BasicLayout } from '@/components/layouts/BasicLayout';
import { ContentSection, SectionTitle, PlainText, PageTitle } from '@/styles/utils/common';

type Props = {}

const Home: NextPage<Props> = (props) => {
  const defaultOgpUrl  = createOgpUrl('Top - About me')
  return (
    <BasicLayout>
      <Meta
        title={'Home'}
        description={'Ryo Fujishima - Web Dev'}
        image={defaultOgpUrl}
        favicon="👋"
      />
      <BrowserWindow>
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
        <ContentSection>
          <SectionTitle>Recent activities</SectionTitle>
          <ExternalPostList posts={posts}/>
        </ContentSection>
      </BrowserWindow>
      <Footer/>
    </BasicLayout>
  )
}

export default Home
