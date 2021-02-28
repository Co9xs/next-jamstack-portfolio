import React from 'react'
import styled from 'styled-components'
import { CustomLink } from './CustomLink'

const headerLinkItems = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Works',
    href: '/works'
  },
  {
    label: 'Skills',
    href: '/skills'
  },
]

export const Header: React.FC = () => { 
  return (
    <HeaderNav>
      <HeaderLinkList>
        {headerLinkItems.map(item => (
          <HeaderLinkItem key={item.label}>
            <CustomLink href={item.href} label={item.label} />
          </HeaderLinkItem>
        ))}
      </HeaderLinkList>
    </HeaderNav>
  )
}
const HeaderNav = styled.nav`
  a {
    padding-top: 8px;
    padding-bottom: 8px;
    &[aria-current] {
      border-bottom: 2px solid #333;
    }
  }
`

const HeaderLinkList = styled.ul`
  color: #333;
  display: flex;
  justify-content: flex-start;
`

const HeaderLinkItem = styled.li`
  font-weight: bold;
  list-style: none;
  margin-right: 18px;
`
