import styled from 'styled-components';
import { media } from './helper';

export const PageBase = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const SectionTitle = styled.h2`
  margin: 1rem 0;
  span {
    text-align:center;
    display: inline-block;
    img {
      height: 28px;
      vertical-align: bottom;
      margin-right: .5rem;
    }
  }
  ${media.phone`
    font-size: 22px;
  `}
`

export const ContentSection = styled.section`
  a {
    text-decoration: underline;
    color: #60A5FA;
  }
`

export const ContentSectionInner = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  ${media.desktop`
    padding: 1rem 5rem;
  `}
  ${media.tablet`
    padding: 1rem 3rem;
  `}
  ${media.phone`
    padding: 1.25rem 1.5rem;
  `}
`