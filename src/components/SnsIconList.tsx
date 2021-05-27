import styled from 'styled-components'
import { TwitterIcon } from '@/components/icons/TwitterIcon'
import { GitHubIcon } from '@/components/icons/GitHubIcon'

type Props = {}

export const SnsIconList: React.VFC<Props> = () => {
  return (
    <IconListBase>
      <IconListItem>
        <a href="https://twitter.com/Co9xsR" target="_blank" rel="noopener">
          <TwitterIcon fill="var(--colors-gray)" hoverFill="var(--colors-white)" size="sm"/>
        </a>
      </IconListItem>
      <IconListItem>
        <a href="https://github.com/Co9xs" target="_blank" rel="noopener">
          <GitHubIcon fill="var(--colors-gray)" hoverFill="var(--colors-white)" size="sm"/>
        </a>
      </IconListItem>
    </IconListBase>
  )
}

const IconListBase = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`

const IconListItem = styled.li`
  margin-left: var(--spacing-2);
`