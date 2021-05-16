import styled from 'styled-components'

type Props = {
  text: string
}

export const Alert: React.VFC<Props> = (props) => {
  const { text } = props
  return (
    <AlertBase>
      {text}
    </AlertBase>
  )
}

const AlertBase = styled.div`
  width: 100%;
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
  padding: 10px 8px;
  border: 1px solid transparent;
  border-radius: 4px;
`