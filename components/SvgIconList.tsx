import React from 'react'
import styled from 'styled-components'

export const SvgImageList = ({ children }) => { 
  return (
    <SvgImageListBase>
      {children.map(child => (
        <SvgImageListItem key={child.props.name}>
          {child}
        </SvgImageListItem>
      ))}
    </SvgImageListBase>
  )
}

const SvgImageListBase = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap; 
`

const SvgImageListItem = styled.div`
  margin-top: .75rem;
  margin-bottom: .75rem;
  margin-right: 1.25rem;
  margin-left: 0;
`