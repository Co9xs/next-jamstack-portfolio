import styled from 'styled-components'
import { Header, SideBar } from '@/components'
import { DEAFULT_HEADER_HEIGHT } from '@/utils'
import React from 'react'
import { Article, Category } from '@/types'
import { media } from '@/styles'

type Props = {
  categories: Category[],
  poplarArticles: Article[],
  children: React.ReactNode
}

export const SideBarLayout: React.VFC<Props> = (props) => {
  const { children, categories, poplarArticles } = props;
  return (
    <SideBarLayoutBase>
      <FixedHeader>
        <Header />
      </FixedHeader>
      <PageContent>
        <MainContentArea>
          { children }
        </MainContentArea>
        <SideBarArea>
          <SideBar categories={categories} poplarArticles={poplarArticles}/>
        </SideBarArea>
      </PageContent>
    </SideBarLayoutBase>
  )
}

const SideBarLayoutBase = styled.div`
  height: 100%;
  position: relative;
`

const FixedHeader = styled.div`
  z-index: 10;
  width: 100%;
  margin: 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`

const PageContent = styled.div`
  padding-top: ${DEAFULT_HEADER_HEIGHT}px;
  padding-right: 16px;
  padding-left: 16px;
  height: 100%;
  max-width: 1160px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  ${media.tablet`
    flex-direction: column;
    align-items: center;
    max-width: 600px;
  `}
`

const MainContentArea = styled.div`
  max-width: 820px;
  padding: 32px 0;
  flex-grow: 1;
  margin-right: 32px;
  ${media.tablet`
    margin: 0;
    width: 100%;
  `}
`

const SideBarArea = styled.div`
  max-width: 260px;
  padding: 32px 0;
  ${media.tablet`
    max-width: 100%;
  `}
`