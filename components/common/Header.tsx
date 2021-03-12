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
          <HeaderLogo>Ryo Fujishima - Web Dev</HeaderLogo>
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
  border-bottom: solid 1.5px #EFEFEF;

  //DarkMode
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.black};
  border-color: ${({ theme }) => theme.smoke};
`

const HeaderNav = styled.nav`
  a, a:visited {
    text-decoration: none;
    color: #93A5B1;
    padding: .5rem 0;
    display: block;
    &[aria-current] {
      border-bottom: 2px solid #333;
      color: #333;
      border-color: ${({ theme }) => theme.white};
      color: ${({ theme }) => theme.white};
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
`

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderLogo = styled.h1`
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
