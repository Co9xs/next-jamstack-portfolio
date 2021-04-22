import { NextPage } from 'next';
import { Meta, SkillIcon, SkillIconList} from '@/components';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle } from '@/styles';

type Props = {}

const Skills: NextPage<Props> = () => {
  const image = "https://og-image-co9xs.vercel.app/Ryo Fujishima - Web Dev.png"
  return (
    <PageBase>
      <Meta
        title={'Skills'}
        description={'Ryo Fujishima - Web Dev'}
        image={encodeURI(image)}
      />
      <ContentSection background={'#E6F2FF'} >
        <ContentSectionInner>
          <SectionTitle>言語</SectionTitle>
          <SkillIconList>
            <SkillIcon name={'JavaScript'}/>
            <SkillIcon name={'TypeScript'}/>
            <SkillIcon name={'PHP'}/>
          </SkillIconList>
        </ContentSectionInner>
      </ContentSection>
      <ContentSection background={'#FFF'}>
        <ContentSectionInner>
          <SectionTitle>フレームワーク等</SectionTitle>
          <SkillIconList>
            <SkillIcon name={'Angular'}/>
            <SkillIcon name={'ReactiveX'}/>
            <SkillIcon name={'Vue'}/>
            <SkillIcon name={'Nuxt'}/>
            <SkillIcon name={'React'}/>
            <SkillIcon name={'Next'}/>
            <SkillIcon name={'jQuery'}/>
            <SkillIcon name={'Laravel'}/>
          </SkillIconList>
        </ContentSectionInner>
      </ContentSection>
      <ContentSection background={'#F1F5F9'} style={{flexGrow: '1'}}>
        <ContentSectionInner>
          <SectionTitle>ツール・その他</SectionTitle>
          <SkillIconList>
            <SkillIcon name={'Slack'}/>
            <SkillIcon name={'Webpack'}/>
            <SkillIcon name={'Docker'}/>
            <SkillIcon name={'Storybook'}/>
            <SkillIcon name={'Vercel'}/>
            <SkillIcon name={'GitHub'}/>
            <SkillIcon name={'GitLab'}/>
          </SkillIconList>
        </ContentSectionInner>
      </ContentSection>
    </PageBase>
  )
}

export default Skills