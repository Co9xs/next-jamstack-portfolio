import React, { useContext } from 'react'
import styled from 'styled-components'
import { CustomLink } from '@/components'
import { media } from '@/styles';
import { LinkItems } from '@/utils'
import { DarkModeContext } from '@/pages/_app';

type Props = {}

export const Header: React.VFC<Props> = () => {
  const value: {
    toggleDarkMode: () => void,
    isDarkMode: boolean
  } = useContext(DarkModeContext);
  return (
    <HeaderBase>
      <HeaderNav>
        <HeaderTop>
          <HeaderLogo>Ryo Fujishima - WebDev</HeaderLogo>
          {/* <ToggleSwitch
            onClick={value.toggleDarkMode}
            isOn={value.isDarkMode}
            icon={<MoonIcon />}
            aria-label={'ダークモード切り替え'}
          /> */}
        </HeaderTop>
        <HeaderLinkList>
          {LinkItems.map(item => (
            <HeaderLinkItem key={item.label}>
              <CustomLink href={item.href} label={item.label} />
            </HeaderLinkItem>
          ))}
        </HeaderLinkList>
      </HeaderNav>
    </HeaderBase>
  )
}

const HeaderBase = styled.div`
  width: 100%;
  border-bottom: solid 2px;
  color: ${({ theme }) => theme.font.main};
  background-color: ${({ theme }) => theme.background.main};
  border-color: ${({ theme }) => theme.border.sub};
`
const HeaderNav = styled.nav`
  max-width: 1160px;
  margin: auto;
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
  ${media.desktop`
    padding: 0 16px; 
  `}
  ${media.tablet`
    padding: 0 16px; 
  `}
  ${media.phone`
    padding: 0 16px; 
  `}
`

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const HeaderLogo = styled.h1`
  font-size: 23px;
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
