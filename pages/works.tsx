import styled from 'styled-components'
export default function Works() {
  return (
    <div>
      <ContentSection>
        <Heading2>主な制作物</Heading2>
      </ContentSection>
    </div>
  )
}

const Heading2 = styled.h2`
  margin: 0;
  padding: 0;
`

const ContentSection = styled.section`
  padding: 1rem 5rem;
`