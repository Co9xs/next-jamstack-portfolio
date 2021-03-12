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
        { work.url && <WorksListItemUrl href={work.url} target={'_blank'} rel={'noopener'}>{work.url}</WorksListItemUrl>}
        { work.githubUrl && <WorksListItemUrl href={work.githubUrl} target={'_blank'} rel={'noopener'}>{work.githubUrl}</WorksListItemUrl>}
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
  border: 2px solid #EFEFEF;
  border-radius: 5px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background: #FFF;

  // DarkMode
  background: ${({ theme }) => theme.woodSmoke};
  border-color: ${({ theme }) => theme.smoke};
`

const WorksListItemHeader = styled.div`
  border-bottom: 1px solid #333;
  padding: 0 0 1rem 0;
  margin-bottom: .5rem;
`

const WorksListItemTitle = styled.h3`
  margin: 0;
  padding: 5px 0;
  font-size: 22px;
`

const WorksListItemUrl = styled.a`
  display: block;
  margin: 0;
  padding: 0;
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