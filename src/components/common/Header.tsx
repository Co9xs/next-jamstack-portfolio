import React, { useContext } from 'react'
import styled from 'styled-components'
import { CustomLink, ToggleSwitch, MoonIcon, } from '@/components'
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
          <ToggleSwitch
            onClick={value.toggleDarkMode}
            isOn={value.isDarkMode}
            icon={<MoonIcon />}
            aria-label={'ダークモード切り替え'}
          />
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
  background: #fff;
  border-bottom: solid 2px #EFEFEF;

  //DarkMode
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.black};
  border-color: ${({ theme }) => theme.woodSmoke};
`

const HeaderNav = styled.nav`
  max-width: 1000px;
  margin: auto;
  a, a:visited {
    text-decoration: none;
    color: #93A5B1;
    padding: .5rem 0;
    display: block;
    &[aria-current="true"] {
      border-bottom: 2px solid #333;
      color: #333;
    }
  }
  ${media.desktop`
    padding: 0 2.5rem; 
  `}
  ${media.tablet`
    padding: 0 2.5rem; 
  `}
  ${media.phone`
    padding: 0 1.5rem; 
  `}

  //DarkMode
  a, a:visited {
    color: ${({ theme }) => theme.lightGray};
    &[aria-current] {
      border-color: ${({ theme }) => theme.yellow};
      color: ${({ theme }) => theme.yellow};
    }
  }
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
  color: #93A5B1;
  font-weight: 600;
  font-size: 18px;
  list-style: none;
  margin-right: 1.7rem;
`
