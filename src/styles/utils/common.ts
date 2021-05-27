import styled from 'styled-components';
import { media } from './helper';

export const PageBase = styled.div`
  height: 100%;
  background-color: var(--colors-navy);
`

export const SectionTitle = styled.h2`
  margin: var(--spacing-2) 0;
  line-height: 1;
  color: var(--colors-green);
`

export const SectionTitleText = styled.span`
`

export const ContentSection = styled.section`
color: var(--colors-white);
margin-bottom: var(--spacing-4);
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