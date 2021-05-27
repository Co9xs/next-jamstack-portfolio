import styled from 'styled-components'

type Props = {
  children: React.ReactNode | React.ReactNode[]
}

export const BrowserWindow: React.VFC<Props> = (props) => {
  const { children } = props
  return (
    <PageWindowBase>
      <PageWindowTopBar>
        <TopBarDammyButton color="var(--colors-red)"/>
        <TopBarDammyButton color="var(--colors-yellow)"/>
        <TopBarDammyButton color="var(--colors-light-green)"/>
      </PageWindowTopBar>
      <PageWindowContent>
        {children}
      </PageWindowContent>
    </PageWindowBase>
  )
}

const PageWindowBase = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--colors-black);
  border-radius: 3px;
  overflow-y: scroll;
`

const PageWindowTopBar = styled.div`
  height: 22px;
  background-color: var(--colors-white);
  border-radius: 3px 3px 0 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const TopBarDammyButton = styled.span`
  display:block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin-left: var(--spacing-1);
`

const PageWindowContent = styled.div`
  padding: var(--spacing-3);
`