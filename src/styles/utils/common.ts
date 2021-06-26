import styled from 'styled-components';
import { media } from './helper';

export const SectionTitle = styled.h2`
  margin: var(--spacing-2) 0;
  color: var(--colors-green);
  font-weight: var(--font-weight-heading);
`

export const PageTitle = styled.h1`
  margin: 0 0 var(--spacing-2) 0;
  color: var(--colors-white);
  font-weight: var(--font-weight-heading);
`

export const ContentSection = styled.section`
color: var(--colors-white);
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