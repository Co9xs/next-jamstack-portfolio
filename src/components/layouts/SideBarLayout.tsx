import styled from 'styled-components'
import { Header } from '@/components'
import { DEAFULT_HEADER_HEIGHT } from '@/utils'

type Props = {
  children: React.ReactNode
}

export const SideBarLayout: React.VFC<Props> = (props) => {
  const { children } = props;
  return (
    <SideBarLayoutBase>
      <FixedHeader>
        <Header />
      </FixedHeader>
      <PageContent>
        <MainContentArea>
          { children }
        </MainContentArea>
        <SideBarArea>
          aaaaaa
        </SideBarArea>
      </PageContent>
    </SideBarLayoutBase>
  )
}

const SideBarLayoutBase = styled.div`
  height: 100%;
  position: relative;
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
  padding-top: ${DEAFULT_HEADER_HEIGHT}px;
  height: 100%;
  max-width: 1160px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`

const MainContentArea = styled.div`
  max-width: 820px;
`

const SideBarArea = styled.div`
  min-width: 300px;
  background: #EEE;
`