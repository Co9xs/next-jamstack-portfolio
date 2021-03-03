import { SvgImageList } from '../components/SvgIconList';
import { Meta } from '../components/Meta';
import { Icon } from '../components/SvgIcon';
import { PageBase, ContentSection, ContentSectionInner, Heading2 } from '../styles/utils/styled';


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
          <SvgImageList>
            <Icon name={'JavaScript'}/>
            <Icon name={'TypeScript'}/>
            <Icon name={'PHP'}/>
          </SvgImageList>
        </ContentSectionInner>
      </ContentSection>
      <ContentSection>
        <ContentSectionInner>
          <Heading2>フレームワーク等</Heading2>
          <SvgImageList>
            <Icon name={'Angular'}/>
            <Icon name={'ReactiveX'}/>
            <Icon name={'Vue'}/>
            <Icon name={'React'}/>
            <Icon name={'Next'}/>
            <Icon name={'jQuery'}/>
            <Icon name={'Laravel'}/>
          </SvgImageList>
        </ContentSectionInner>
      </ContentSection>
      <ContentSection style={{ background: '#F1F5F9', flexGrow: '1' }}>
        <ContentSectionInner>
          <Heading2>ツール・その他</Heading2>
          <SvgImageList>
            <Icon name={'Slack'}/>
            <Icon name={'Webpack'}/>
            <Icon name={'Vercel'}/>
            <Icon name={'GitHub'}/>
            <Icon name={'Gitlab'}/>
          </SvgImageList>
        </ContentSectionInner>
      </ContentSection>
    </PageBase>
  )
}