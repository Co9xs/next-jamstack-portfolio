import styled from 'styled-components'
import { CustomLink } from '@/components'
import { CategoryItem } from '@/apis/categories'

type Props = {
  categories: CategoryItem[]
}

export const CategoryList: React.VFC<Props> = ({ categories }) => {
  return (
    <CategoryListBase>
    {categories.map(category => (
      <CustomLink href={`/blog/categories/${category.id}/page/1`} key={category.id}>
        <CategoryListItem key={category.id}>
          {category.name}
        </CategoryListItem>
      </CustomLink>
    ))}
    </CategoryListBase>
  )
}

const CategoryListBase = styled.ul`
  margin: 0;
  padding: 0;
  color: var(--colors-white);
  list-style: none;
`

const CategoryListItem = styled.li`
  cursor: pointer;
  padding: var(--spacing-2) var(--spacing-1);
  font-size: var(--font-size-1);
  & + li {
    border-top: var(--border-size-1) solid var(--colors-dark-gray);
  }
  &:hover {
    background-color: var(--colors-navy);
    transition: background var(--animation-duration) var(--animation-timing);
  }
`
