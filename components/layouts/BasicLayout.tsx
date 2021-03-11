import React from 'react'
import styled from 'styled-components'
import { Header } from '../common/Header'
import { media } from '../../styles/utils/helper';
import { DEAFULT_HEADER_HEIGHT } from '../../utils'

type Props = {
  children: React.ReactNode
}

export const BasicLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <BasicLayoutBase>
      <FixedHeader>
        <Header />
      </FixedHeader>
      <PageContent>
        {children}
      </PageContent>
    </BasicLayoutBase>
  )
}

const BasicLayoutBase = styled.div`
  height: 100%;
  position: relative;
`

const FixedHeader = styled.div`
  background: #fff;
  z-index: 10;
  width: 100%;
  margin: 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: solid 1px #EFEFEF;
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
const PageContent = styled.div`
  padding-top: ${DEAFULT_HEADER_HEIGHT}px;
  height: 100%;
`