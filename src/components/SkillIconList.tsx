import { skills } from '@/utils';
import styled from 'styled-components'
import { SkillIcon } from './SkillIcon';

type Props = {
  names: typeof skills[number][]
};

export const SkillIconList: React.VFC<Props> = (props) => {
  const { names } = props;
  return (
    <SkillIconListBase>
      {names.map(
        (name) => (
        <SkillIconListItem key={name}>
          <SkillIcon name={name}/>
        </SkillIconListItem>
      ))}
    </SkillIconListBase>
  )
}

const SkillIconListBase = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap; 
`

const SkillIconListItem = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  margin-right: 24px;
  margin-left: 0;
`