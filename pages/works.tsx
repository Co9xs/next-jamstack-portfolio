import styled from 'styled-components'
import { WorksList } from '../components/WorksList'
import Twemoji from 'react-twemoji';

export default function Works() {
  return (
    <div>
      <ContentSection style={{background: '#F1F5F9'}}>
        <Heading2><Twemoji tag="span">💻</Twemoji>主な制作物</Heading2>
        <WorksList></WorksList>
      </ContentSection>
    </div>
  )
}

const Heading2 = styled.h2`
  margin: 1rem 0;
  padding: 0;
  span {
  text-align:center;
  display: inline-block;
  img {
    height: 28px;
    vertical-align: bottom;
    margin-right: .5rem;
  }
}
`

const ContentSection = styled.section`
  padding: 1rem 5rem;
`