import { NextPage } from 'next';
import { Meta, SkillIconList, BasicLayout } from '@/components';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle } from '@/styles';

type Props = {}

const Skills: NextPage<Props> = () => {
  const image = "https://og-image-co9xs.vercel.app/Ryo Fujishima - Web Dev.png"
  return (
    <BasicLayout>
      <PageBase>
        <Meta
          title={'Skills'}
          description={'Ryo Fujishima - Web Dev'}
          image={encodeURI(image)}
        />
        <ContentSection background={'#E6F2FF'} >
          <ContentSectionInner>
            <SectionTitle>言語</SectionTitle>
            <SkillIconList
              names={[
                'JavaScript',
                'TypeScript',
                'PHP',
              ]}
            />
          </ContentSectionInner>
        </ContentSection>
        <ContentSection background={'#FFF'}>
          <ContentSectionInner>
            <SectionTitle>フレームワーク等</SectionTitle>
            <SkillIconList
              names={[
                'ReactiveX',
                'Vue',
                'React',
                'Next',
                'Laravel'
              ]}
            />
          </ContentSectionInner>
        </ContentSection>
        <ContentSection background={'#F1F5F9'} style={{flexGrow: '1'}}>
          <ContentSectionInner>
            <SectionTitle>ツール・その他</SectionTitle>
            <SkillIconList
              names={[
                'Slack',
                'Webpack',
                'Storybook',
                'Vercel',
                'GitHub',
                'GitLab'
              ]}
            />
          </ContentSectionInner>
        </ContentSection>
      </PageBase>
    </BasicLayout>
  )
}

export default Skills