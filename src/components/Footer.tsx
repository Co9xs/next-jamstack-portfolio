import React from 'react'
import styled from 'styled-components'
import { media } from '@/styles/utils/helper';

type Props = {}

export const Footer: React.VFC<Props> = () => {
  return (
    <FooterBase>
      <FooterText>Build with <a href="https://github.com/vercel/next.js" target="_blank" rel="noopener">Next.js</a></FooterText>
      <FooterText>This site uses Google Analytics <a href="https://policies.google.com/technologies/partner-sites?hl=ja" target="_blank" rel="noopener">view details</a></FooterText>
    </FooterBase>
  )
}

const FooterBase = styled.div`
  max-width: var(--width-1-colum);
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-top: var(--spacing-3);
  padding: var(--spacing-3);
  border-radius: var(--border-size-3);
  background-color: var(--colors-black);
  font-size: var(--font-size-min);
  color: var(--colors-white);
`

const FooterText = styled.p`
  margin: 0;
  line-height: 1.8;
`


