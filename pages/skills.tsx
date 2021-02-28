import styled from 'styled-components'
export default function Skills() {
  return (
    <div>
      <ContentSection>
        <Heading2>言語</Heading2>
      </ContentSection>
      <ContentSection>
        <Heading2>フレームワーク</Heading2>
      </ContentSection>
      <ContentSection>
        <Heading2>ツール・その他</Heading2>
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