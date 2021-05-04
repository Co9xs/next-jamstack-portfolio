import styled from 'styled-components';
import { media } from './helper';

export const PageBase = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const SectionTitle = styled.h2`
  margin: 8px 0;
  line-height: 1;
  display: flex;
  align-items: center;
  div {
    text-align:center;
    display: inline-block;
    img {
      height: 1em;
      width: 1em;
      margin-right: 8px;
      vertical-align: -0.1em;
    }
  }
`

export const SectionTitleText = styled.span`
`

export const ContentSection = styled.section`
`

export const ContentSectionInner = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  ${media.desktop`
    padding: 24px 16px 0;
  `}
  ${media.tablet`
    padding: 24px 16px 0;
  `}
  ${media.phone`
    padding: 24px 16px 0;
  `}
`

export const PlainText = styled.p`
  margin: 12px 0;
  line-height: 1.5;
`