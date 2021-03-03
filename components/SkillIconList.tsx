import React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
};

export const SkillIconList: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <SkillIconListBase>
      {React.Children.map(
        children,
        child => (
        <SkillIconListItem>
          {child}
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
  margin-top: .75rem;
  margin-bottom: .75rem;
  margin-right: 1.25rem;
  margin-left: 0;
`