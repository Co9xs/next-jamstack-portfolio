import styled from 'styled-components'
import { CustomLink } from './CustomLink'

export const CategoryList = ({ categories }) => {
  return (
    <CategoryListBase>
      {categories.map(category => (
        <CustomLink href={`/blog/categories/${category.id}/page/1`} key={ category.id }>
          <CategoryListItem>{ category.name }</CategoryListItem>
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
  margin-bottom: .5rem;
`
