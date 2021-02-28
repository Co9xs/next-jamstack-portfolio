import styled from 'styled-components'
import { SvgImageList } from '../components/SvgIconList'
import { Icon } from '../components/SvgIcon'

export default function Skills() {
  return (
    <div>
      <ContentSection style={{ background: '#E6F2FF'}} >
        <Heading2>言語</Heading2>
        <SvgImageList>
          <Icon name={'JavaScript'}/>
          <Icon name={'TypeScript'}/>
          <Icon name={'PHP'}/>
        </SvgImageList>
      </ContentSection>
      <ContentSection>
        <Heading2>フレームワーク・ライブラリ</Heading2>
        <SvgImageList>
          <Icon name={'Angular'}/>
          <Icon name={'ReactiveX'}/>
          <Icon name={'Vue'}/>
          <Icon name={'Nuxt'}/>
          <Icon name={'React'}/>
          <Icon name={'Next'}/>
          <Icon name={'jQuery'}/>
          <Icon name={'Laravel'}/>
        </SvgImageList>
      </ContentSection>
      <ContentSection style={{background: '#F1F5F9'}} >
        <Heading2>ツール・その他</Heading2>
        <SvgImageList>
          <Icon name={'Slack'}/>
          <Icon name={'Webpack'}/>
          <Icon name={'Storybook'}/>
          <Icon name={'GitHub'}/>
          <Icon name={'Gitlab'}/>
        </SvgImageList>
      </ContentSection>
    </div>
  )
}

const Heading2 = styled.h2`
  margin: 1rem 0;
  padding: 0;
`

const ContentSection = styled.section`
  padding: 1rem 5rem;
`