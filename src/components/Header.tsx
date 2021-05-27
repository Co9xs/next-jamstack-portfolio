import React from 'react'
import styled from 'styled-components'
import { NavLink } from '@/components/NavLink'
import { media } from '@/styles/utils/helper';
import { LinkItems } from '@/utils/links'
import { SnsIconList } from './SnsIconList';

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
          <SnsIconList/>
        </HeaderTop>
        <HeaderNav>
          {LinkItems.map(item => (
            <HeaderNavItem key={item.label}>
              <NavLink href={item.href} label={item.label} />
            </HeaderNavItem>
          ))}
        </HeaderNav>
      </HeaderInner>
    </HeaderBase>
  )
}

const HeaderBase = styled.div`
  width: 100%;
  background-color: var(--colors-navy);
`

const HeaderInner = styled.nav`
  max-width: var(--width-1-colum);
  margin-right: auto;
  margin-left: auto;
  padding: 0 var(--spacing-3);
  ${media.phone`
    padding: 0 var(--spacing-2); 
  `}
`

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-3) 0;
`

const HeaderLogo = styled.h1`
  margin: 0;
  font-size: var(--font-size-7);
  letter-spacing: 1px;
  font-weight: var(--font-weight-heading);
`

const HeaderLogoMain = styled.span`
  color: var(--colors-yellow);
`
const HeaderLogoSub = styled.span`
  color: var(--colors-purple);
`
const HeaderNav = styled.ul`
  padding: 0;
  margin: 0; 
  display: flex;
  justify-content: flex-start;
  list-style: none;
`
const HeaderNavItem = styled.li`
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-heading);
  margin-right: var(--spacing-3);
`
