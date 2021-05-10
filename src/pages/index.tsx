import { GetStaticProps, NextPage } from 'next';
import Twemoji from 'react-twemoji';
import { Meta, SkillIconList } from '@/components';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle, PlainText, SectionTitleText } from '@/styles';
import { Layout } from '@/types';

type Props = {
  layout: Layout
}

const Home: NextPage<Props> = (props) => {
  const defaultOgp = `https://res.cloudinary.com/fujishima/image/upload/l_text:Sawarabi%20Gothic_45_bold:${encodeURI('Ryo Fujishima - Web Dev')},co_rgb:333,w_800,c_fit/v1620608065/ogp/OgpImage_a2vlnk.png`
  return (
      <PageBase>
        <Meta
          title={'Home'}
          description={'Ryo Fujishima - Web Dev'}
          image={encodeURI(defaultOgp)}
        />
        <ContentSection>
          <ContentSectionInner>
            <SectionTitle>
              <Twemoji tag="div">🙋‍♂️</Twemoji>
              <SectionTitleText>Profile</SectionTitleText>
            </SectionTitle>
            <PlainText>I'm a web frontend engineer interested in Performance and Frontend Tools</PlainText>
            <PlainText>Love React, Next, TypeScript, and so on :)</PlainText>
            <PlainText>And, I belong to the Faculty of Economics of Tohoku University</PlainText>
            <PlainText>My daily life interests is e-sports, collecting gadgets and sauna</PlainText>
            <PlainText><a href={"https://twitter.com/Co9xsR"} target={'_blank'} rel={'noopener'}>Twitter</a></PlainText>
            <PlainText><a href={"https://github.com/Co9xs"} target={'_blank'} rel={'noopener'}>GitHub</a></PlainText>
            <PlainText><a href={"https://zenn.dev/co9xs"} target={'_blank'} rel={'noopener'}>Zenn</a></PlainText>
            <PlainText><a href={"https://speakerdeck.com/co9xs"} target={'_blank'} rel={'noopener'}>SpeakerDeck</a></PlainText>
          </ContentSectionInner>
        </ContentSection>
        <ContentSection>
          <ContentSectionInner>
            <SectionTitle>
              <Twemoji tag="div">🧑‍💻</Twemoji>
              <SectionTitleText>Language・Framework</SectionTitleText>
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
              <SectionTitleText>Experience</SectionTitleText>
            </SectionTitle>
            <PlainText>2022.04 | Will work at CyberAgent, as a full-time employee</PlainText>
            <PlainText>2021.02 | Worked at Wantedly, as an intern(React, webpack)</PlainText>
            <PlainText>2020.08 | Worked at ORO, as a part time job(Angular, rxjs, storybook)</PlainText>
            <PlainText>2020.08 | Participated in CyberAgent Web Frontend Chanllenge(Vue, Netlify)</PlainText>
            <PlainText>2020.03 | Started learing web development(JavaScript)</PlainText>
            <PlainText>2019.12 | Started learing web design(HTML&CSS)</PlainText>
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