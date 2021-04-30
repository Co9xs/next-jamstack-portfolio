import styled from 'styled-components';
import { media } from './helper';

export const PageBase = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const SectionTitle = styled.h2`
  margin: 0;
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

  // DarkMode
  color: ${({ theme }) => theme.white};
`

export const ContentSection = styled.section`
  background: ${({ background }) => background};

  // DarkMode
  color: ${({ theme }) => theme.white};
  background: ${({ theme, background }) => {
    if (background === '#E6F2FF') return theme.gray
    if (background === '#FFF') return theme.black
    if (background === '#F1F5F9') return theme.gray
  }};
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

export const PlainText = styled.p`
`