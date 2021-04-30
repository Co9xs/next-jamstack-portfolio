import styled from 'styled-components'
import { ArticleTitleList, CategoryList } from '@/components'
import React from 'react'
import { Category, Article } from '@/types'

type Props = {
  categories: Category[],
  popularArticles: Article[]
}

export const SideBar: React.VFC<Props> = (props) => {
  const { categories, popularArticles } = props
  return (
    <SideBarBase>
      <SideBarCategoryList>
        <CategoryList categories={categories}/>
      </SideBarCategoryList>
      <SideBarArticleList>
        <ArticleTitleList articles={popularArticles}/>
      </SideBarArticleList>
    </SideBarBase>
  )
}

const SideBarBase = styled.div`
  height: 100%;
`

const SideBarCategoryList = styled.div`
  margin-bottom: 40px;
`

const SideBarArticleList = styled.div`
  margin-bottom: 40px;
`