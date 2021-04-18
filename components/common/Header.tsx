import React, { useContext } from 'react'
import styled from 'styled-components'
import { CustomLink } from '../CustomLink'
import { ToggleSwitch } from '../ToggleSwitch'
import { LinkItems } from '../../utils'
import { MoonIcon } from '../icons';
import { DarkModeContext } from '../../pages/_app';
import { media } from '../../styles/utils/helper';

export const Header: React.FC = () => {
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
            toggle={value.toggleDarkMode}
            value={value.isDarkMode}
            icon={<MoonIcon />}
            ariaLabel={'ダークモード切り替え'}
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
