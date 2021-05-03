import styled from 'styled-components'
import { Header, SideBar } from '@/components'
import { DEAFULT_HEADER_HEIGHT } from '@/utils'
import React from 'react'
import { Article, Category } from '@/types'
import { media } from '@/styles'
import { ArticleItem } from '@/apis/blog'
import { CategoryItem } from '@/apis/categories'

type Props = {
  categories: CategoryItem[],
  popularArticles: ArticleItem[],
  children: React.ReactNode
}

export const SideBarLayout: React.VFC<Props> = (props) => {
  const { children, categories, popularArticles } = props;
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
          <SideBar categories={categories} popularArticles={popularArticles}/>
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
  padding: 24px 0 32px;
  flex-grow: 1;
  margin-right: 32px;
  ${media.tablet`
    margin: 0;
    width: 100%;
  `}
`

const SideBarArea = styled.div`
  max-width: 260px;
  padding: 24px 0 32px;
  ${media.tablet`
    max-width: 100%;
  `}
`