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
