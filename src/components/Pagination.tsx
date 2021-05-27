import Link from 'next/link';
import styled from 'styled-components';
import { range } from '@/utils';

type Props = {
  pageHref: string
  totalCount: number
  currentPage: number
  perPage?: number
}

export const Pagination: React.VFC<Props> = ({ pageHref, totalCount, currentPage, perPage = 5 }) => {
  if (totalCount <= perPage) return null
  const maxPage = Math.ceil(totalCount / perPage)
  return (
    <PaginationList>
      {range(1, maxPage).map((number, index) => {
        const isCurrent = currentPage === number
        return (
          <PaginationItem key={index} data-current={isCurrent}>
            <Link href={`${pageHref}${number}`}>
              <PaginationLink data-current={isCurrent}>
                {number}
              </PaginationLink>
            </Link>
          </PaginationItem>
        )
      })}
    </PaginationList>
  )
}

const PaginationList = styled.ul`
  display: flex;
  list-style: none;
  padding: var(--spacing-1) 0;
  margin: 0;
  justify-content: center;
  flex-wrap: wrap;
`

const PaginationItem = styled.li`
  background-color: var(--colors-white);
  border-radius: var(--border-size-3);
  text-align: center;
  width: var(--spacing-4);
  height: var(--spacing-4);
  font-weight: var(--font-weight-heading);
  margin: var(--spacing-2);
  &[data-current="true"] {
    background-color: var(--colors-blue-green);
  }
`

const PaginationLink = styled.a`
  user-select: none;
  text-decoration: none;
  display: block;
  height: 100%;
  color: var(--colors-black);
  line-height: var(--spacing-4);
  cursor: pointer;
  &[data-current="true"] {
    font-weight: var(--font-weight-heading);
    color: var(--colors-black);
  }
`