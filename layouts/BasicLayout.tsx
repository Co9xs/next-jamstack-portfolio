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
  margin: 0;
  padding: 0 2.5rem; 
`

const FixedHeader = styled.div`
  width: 100%;
  margin: 0;
  padding: 0 2.5rem; 
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`

// headerの高さ
const PageContent = styled.div`
  padding-top: 53px;
`