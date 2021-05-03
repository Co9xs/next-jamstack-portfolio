import styled from 'styled-components'
import { CustomLink } from '@/components'
import { Category } from '@/types'

type Props = {
  categories: Category[]
}

export const CategoryList: React.VFC<Props> = ({ categories }) => {
  return (
    <CategoryListBase>
      <CategoryListHeading>Categories</CategoryListHeading>
      <CategoryListItems>
      {categories.map(category => (
        <CustomLink href={`/blog/categories/${category.id}/page/1`} key={category.id}>
          <CategoryListItem key={category.id}>
            {category.name}
          </CategoryListItem>
        </CustomLink>
      ))}
      </CategoryListItems>
    </CategoryListBase>
  )
}

const CategoryListBase = styled.div`
  margin: 0;
  padding: 0;
`

const CategoryListHeading = styled.h4`
  padding: 0;
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: bold;
`

const CategoryListItems = styled.ul`
  margin: 0;
  padding: 0;
`

const CategoryListItem = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 8px 0;
  border-bottom: 1px solid #EFEFEF;
  font-size: 18px;
`
