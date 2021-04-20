import styled from 'styled-components'
import { WorksListItem } from './WorksListItem'
import { Work } from '@/types'

type Props = {
  works: Work[]
}

export const WorksList: React.VFC<Props> = (props) => {
  const { works } = props;
  return (
    <WorksListBase>
      {works.map(work => (
        <WorksListItem key={work.title} work={work} />
      ))}
    </WorksListBase>
  )
}

const WorksListBase = styled.div`
`