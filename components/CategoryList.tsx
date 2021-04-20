import styled from 'styled-components'
import { Category } from '../types'
import { CustomLink } from './CustomLink'

type Props = {
  categories: Category[]
}

export const CategoryList: React.VFC<Props> = ({ categories }) => {
  return (
    <CategoryListBase>
      {categories.map(category => (
        <CustomLink href={`/blog/categories/${category.id}/page/1`} key={ category.id }>
          <CategoryListItem key={category.id}>
            #{category.name}
            {`(${category.articleCount}記事) `}
          </CategoryListItem>
        </CustomLink>
      ))}
    </CategoryListBase>
  )
}

const CategoryListBase = styled.ul`
  margin: 0;
  padding: 0;
`
const CategoryListItem = styled.li`
  list-style: none;
  margin-bottom: .5rem;
  color: #60A5FA;
  cursor: pointer;
`
