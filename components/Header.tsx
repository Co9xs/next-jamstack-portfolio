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
  {
    label: 'Blog',
    href: '/blog'
  },
]

export const Header: React.FC = () => { 
  return (
    <HeaderNav>
      <h1>Ryo Fujishima - Web Frontend Developer</h1>
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
    padding: .5rem 0;
    display: block;
    &[aria-current] {
      border-bottom: 2px solid #333;
      color: #333;
    }
  }
`

const HeaderLinkList = styled.ul`
  padding: 0;
  margin: 0; 
  display: flex;
  justify-content: flex-start;
`

const HeaderLinkItem = styled.li`
  color: #93A5B1;
  font-weight: 600;
  font-size: 18px;
  list-style: none;
  margin-right: 1.7rem;
`
