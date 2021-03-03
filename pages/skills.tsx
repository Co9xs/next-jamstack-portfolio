import { SkillIconList } from '../components/SkillIconList';
import { Meta } from '../components/common/Meta';
import { SkillIcon } from '../components/SkillIcon';
import { PageBase, ContentSection, ContentSectionInner, Heading2 } from '../styles/utils/common';

export default function Skills() {
  return (
    <PageBase>
      <Meta
        title={'Skills'}
        description={'現在のスキル一覧'}
      />
      <ContentSection style={{ background: '#E6F2FF' }} >
        <ContentSectionInner>
          <Heading2>言語</Heading2>
          <SkillIconList>
            <SkillIcon name={'JavaScript'}/>
            <SkillIcon name={'TypeScript'}/>
            <SkillIcon name={'PHP'}/>
          </SkillIconList>
        </ContentSectionInner>
      </ContentSection>
      <ContentSection>
        <ContentSectionInner>
          <Heading2>フレームワーク等</Heading2>
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
          <Heading2>ツール・その他</Heading2>
          <SkillIconList>
            <SkillIcon name={'Slack'}/>
            <SkillIcon name={'Webpack'}/>
            <SkillIcon name={'Storybook'}/>
            <SkillIcon name={'Vercel'}/>
            <SkillIcon name={'GitHub'}/>
            <SkillIcon name={'Gitlab'}/>
          </SkillIconList>
        </ContentSectionInner>
      </ContentSection>
    </PageBase>
  )
}