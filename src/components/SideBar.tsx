import styled from 'styled-components'
import { ArticleTitleList, CategoryList } from '@/components'
import { ArticleItem } from '@/apis/blog'
import { CategoryItem } from '@/apis/categories'
import TableOfContents from './TableOfContents'

type Props = {
  articleBody?: string
  categories?: CategoryItem[],
  popularArticles?: ArticleItem[]
}

export const SideBar: React.VFC<Props> = (props) => {
  const { articleBody, categories, popularArticles } = props
  return (
    <SideBarBase>
      <SideBarCategoryList>
        {categories && <CategoryList categories={categories}/>}
      </SideBarCategoryList>
      <SideBarArticleList>
        {popularArticles && <ArticleTitleList articles={popularArticles}/>}
      </SideBarArticleList>
      <SideBarArticleList>
        {articleBody && <TableOfContents articleBody={articleBody}/>}
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