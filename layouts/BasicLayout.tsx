import React from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header'

export const BasicLayout = ({children}) => {
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
`

const FixedHeader = styled.div`
  background: #fff;
  z-index: 10;
  width: 100%;
  margin: 0;
  padding: 0 2.5rem; 
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: solid 1px #E4EDF4;
`

// headerの高さ
const PageContent = styled.div`
  margin-top: 107px;
`