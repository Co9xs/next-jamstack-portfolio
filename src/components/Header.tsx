import React, { useContext } from 'react'
import styled from 'styled-components'
import { CustomLink } from '@/components/CustomLink'
import { media } from '@/styles';
import { LinkItems } from '@/utils'

type Props = {}

export const Header: React.VFC<Props> = () => {
  return (
    <HeaderBase>
      <HeaderInner>
        <HeaderTop>
          <HeaderLogo>
            <HeaderLogoMain>Fujishima</HeaderLogoMain>
            <HeaderLogoSub>.dev</HeaderLogoSub>
          </HeaderLogo>
        </HeaderTop>
        <HeaderLinkList>
          {LinkItems.map(item => (
            <HeaderLinkItem key={item.label}>
              <CustomLink href={item.href} label={item.label} />
            </HeaderLinkItem>
          ))}
        </HeaderLinkList>
      </HeaderInner>
    </HeaderBase>
  )
}

const HeaderBase = styled.div`
  width: 100%;
  border-bottom: solid 2px;
  background-color: var(--colors-navy);
`
const HeaderInner = styled.nav`
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 var(--spacing-3);
  a, a:visited {
    text-decoration: none;
    color: #637a88;
    padding: 8px 0;
    display: block;
    &[aria-current="true"] {
      border-bottom: 2px solid;
      color: #333;
    }
  }
  ${media.phone`
    padding: 0 var(--spacing-2); 
  `}
`

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderLogo = styled.h1`
  font-size: 28px;
  margin: 16px 0;
  letter-spacing: 1px;
  font-weight: var(--font-weight-heading);
`

const HeaderLogoMain = styled.span`
  color: var(--colors-yellow);
`
const HeaderLogoSub = styled.span`
  color: var(--colors-purple);
`
const HeaderLinkList = styled.ul`
  padding: 0;
  margin: 0; 
  display: flex;
  justify-content: flex-start;
`
const HeaderLinkItem = styled.li`
  font-weight: 600;
  font-size: 18px;
  list-style: none;
  margin-right: 1.7rem;
`
