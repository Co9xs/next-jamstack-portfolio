import { SkillIconList } from '../components/SkillIconList';
import { Meta } from '../components/common/Meta';
import { SkillIcon } from '../components/SkillIcon';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle } from '../styles/utils/common';

export default function Skills() {
  return (
    <PageBase>
      <Meta
        title={'Skills'}
        description={'現在のスキル一覧'}
      />
      <ContentSection style={{ background: '#E6F2FF' }} >
        <ContentSectionInner>
          <SectionTitle>言語</SectionTitle>
          <SkillIconList>
            <SkillIcon name={'JavaScript'}/>
            <SkillIcon name={'TypeScript'}/>
            <SkillIcon name={'PHP'}/>
          </SkillIconList>
        </ContentSectionInner>
      </ContentSection>
      <ContentSection>
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
      <ContentSection style={{ background: '#F1F5F9', flexGrow: '1' }}>
        <ContentSectionInner>
          <SectionTitle>ツール・その他</SectionTitle>
          <SkillIconList>
            <SkillIcon name={'Slack'}/>
            <SkillIcon name={'Webpack'}/>
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