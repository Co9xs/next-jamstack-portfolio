import styled from 'styled-components'
import { ArticleTitleList, CategoryList } from '@/components'
import { ArticleItem } from '@/apis/blog'
import { CategoryItem } from '@/apis/categories'
import TableOfContents from './TableOfContents'
import { media } from '@/styles/utils/helper'

type Props = {
  articleBody?: string
  categories?: CategoryItem[],
  popularArticles?: ArticleItem[]
}

export const SideBar: React.VFC<Props> = (props) => {
  const { articleBody, categories, popularArticles } = props
  return (
    <SideBarBase>
      {categories && 
      <SideBarItem>
        <SideBarHeading>Categories</SideBarHeading>
        <CategoryList categories={categories}/>
      </SideBarItem>
      }
      {popularArticles && 
      <SideBarItem>
        <SideBarHeading>Popular Articles</SideBarHeading>
        <ArticleTitleList articles={popularArticles}/>
      </SideBarItem>
      }
      {articleBody && 
      <TableOfContentesItem>
        <SideBarHeading>Table of Contents</SideBarHeading>
        <TableOfContents articleBody={articleBody}/>
      </TableOfContentesItem>
      }
    </SideBarBase>
  )
}

const SideBarBase = styled.div`
  height: 100%;
`

const SideBarItem = styled.div`
  margin-bottom: var(--spacing-4);
  background-color: var(--colors-black);
  padding: var(--spacing-3);
  border-radius: var(--border-size-3);
`

// mobileで目次の表示をどうするか検討中
const TableOfContentesItem = styled(SideBarItem)`
  ${media.tablet`
    // display: none;
  `}
`

const SideBarHeading = styled.p`
  margin: 0 0 var(--spacing-2) 0;
  font-size: var(--font-size-3);
  color: var(--colors-green);
  font-weight: var(--font-weight-heading);
`