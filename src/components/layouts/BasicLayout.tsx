import styled from 'styled-components'
import { Header } from '@/components'
import { DEAFULT_HEADER_HEIGHT } from '@/utils/constants'
import { media } from '@/styles/utils/helper'

type Props = {
  children: React.ReactNode
}

export const BasicLayout: React.VFC<Props> = (props) => {
  const { children } = props;
  return (
    <BasicLayoutBase>
      <FixedHeader>
        <Header />
      </FixedHeader>
      <PageContent>
        <MainContentArea>
          {children}
        </MainContentArea>
      </PageContent>
    </BasicLayoutBase>
  )
}

const BasicLayoutBase = styled.div`
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
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: var(--width-1-colum);
  padding: ${DEAFULT_HEADER_HEIGHT}px var(--spacing-3) var(--spacing-3);
  ${media.phone`
    padding: ${DEAFULT_HEADER_HEIGHT}px var(--spacing-2) var(--spacing-3); 
  `}
`

const MainContentArea = styled.div`
  padding: var(--spacing-4) 0;
`