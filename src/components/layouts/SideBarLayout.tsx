import styled from 'styled-components'
import { Header } from '@/components/Header'
import { SideBar } from '@/components/SideBar'
import { DEAFULT_HEADER_HEIGHT } from '@/utils/constants'
import { media } from '@/styles'
import { ArticleItem } from '@/apis/blog'
import { CategoryItem } from '@/apis/categories'

type Props = {
  categories?: CategoryItem[],
  popularArticles?: ArticleItem[],
  articleBody?: string
  children: React.ReactNode
}

export const SideBarLayout: React.VFC<Props> = (props) => {
  const { children, categories, popularArticles, articleBody } = props;
  return (
    <SideBarLayoutBase>
      <FixedHeader>
        <Header/>
      </FixedHeader>
      <PageContent>
        <MainContentArea>
          { children }
        </MainContentArea>
        <SideBarArea>
          <SideBar categories={categories} popularArticles={popularArticles} articleBody={articleBody}/>
        </SideBarArea>
      </PageContent>
    </SideBarLayoutBase>
  )
}

const SideBarLayoutBase = styled.div`
  height: 100%;
  position: relative;
  background-color: var(--colors-navy);
`

const FixedHeader = styled.div`
  z-index: 10;
  width: 100%;
  margin: 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`

const PageContent = styled.div`
  padding: ${DEAFULT_HEADER_HEIGHT}px var(--spacing-3) 0;
  height: 100%;
  max-width: var(--width-2-colums-base);
  margin: auto;
  display: flex;
  justify-content: space-between;
  ${media.tablet`
    flex-direction: column;
    align-items: center;
    max-width: var(--width-1-colum);
  `}
  ${media.phone`
    padding: ${DEAFULT_HEADER_HEIGHT}px var(--spacing-2) 0; 
  `}
`

const MainContentArea = styled.div`
  flex-grow: 1;
  max-width: var(--width-2-columns-main);
  padding: var(--spacing-4) 0;
  margin: 0 var(--spacing-4) 0 0;
  ${media.tablet`
    margin: 0;
    width: 100%;
    max-width: 100%;
  `}
`

const SideBarArea = styled.div`
  min-width: var(--width-2-colums-sub);
  max-width: var(--width-2-colums-sub);
  padding: var(--spacing-4) 0;
  ${media.tablet`
    padding: 0;
    width: 100%;
    max-width: 100%;
  `}
`