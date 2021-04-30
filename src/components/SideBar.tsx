import styled from 'styled-components'
import { CategoryList } from '@/components'
import React from 'react'
import { Category, Article } from '@/types'

type Props = {
  categories: Category[],
  poplarArticles: Article[]
}

export const SideBar: React.VFC<Props> = (props) => {
  const { categories, poplarArticles } = props
  return (
    <SideBarBase>
      <SideBarCategoryList>
        <CategoryList categories={categories}/>
      </SideBarCategoryList>
      <SideBarArticleList>
        <CategoryList categories={categories}/>
      </SideBarArticleList>
    </SideBarBase>
  )
}

const SideBarBase = styled.div`
  height: 100%;
`

const SideBarCategoryList = styled.div`
  margin-top: 84px;
`

const SideBarArticleList = styled.div`
  margin-top: 32px;
`