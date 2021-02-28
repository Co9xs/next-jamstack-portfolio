import styled from 'styled-components'
import { WorksList } from '../components/WorksList'
export default function Works() {
  return (
    <div>
      <ContentSection>
        <Heading2>主な制作物</Heading2>
        <WorksList></WorksList>
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