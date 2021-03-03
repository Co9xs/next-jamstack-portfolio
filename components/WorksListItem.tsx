import styled from 'styled-components'
import { Work } from '../types';

type Props = {
  work: Work
};

export const WorksListItem: React.FC<Props> = (props) => {
  const { work } = props;
  return (
    <WorksListItemBase>
      <WorksListItemHeader>
        <WorksListItemTitle>{work.title}</WorksListItemTitle>
        <WorksListItemUrl href={work.url}>{work.url}</WorksListItemUrl>
      </WorksListItemHeader>
      <WorksListItemDescription>{work.description}</WorksListItemDescription>
      <WorksListItemHeading>使用技術</WorksListItemHeading>
      <WorksListItemLangList>
        {work.languages.map(lang => (
          <WorksListItemLangListItem key={lang}>{lang}</WorksListItemLangListItem>
        ))}
      </WorksListItemLangList>
    </WorksListItemBase>
  )
}

const WorksListItemBase = styled.div`
  border: 1px solid #EFEFEF;
  border-radius: 5px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background: #FFF;
`

const WorksListItemHeader = styled.div`
  border-bottom: 1px solid #333;
  padding: 0 0 1rem 0;
  margin-bottom: .5rem;
`

const WorksListItemTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 22px;
`

const WorksListItemUrl = styled.a`
  text-decoration: underline;
  margin: 0;
  padding: 0;
  color: #60A5FA;
`

const WorksListItemDescription = styled.div`
  margin: 0 0 .5rem 0;
  padding: 0;
`
const WorksListItemHeading = styled.h4`
  margin: 0;
  padding: 0;
`
const WorksListItemLangList = styled.ul`
  padding: 0 1rem;
  margin: 0;
`
const WorksListItemLangListItem = styled.li`
  margin: 0;
  padding: 0;
`