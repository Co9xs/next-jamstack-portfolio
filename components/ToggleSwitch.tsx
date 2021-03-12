import styled from 'styled-components';

type Props = {
  toggle: ()=>void,
  value: boolean,
  icon: any,
  ariaLabel: string
}

export const ToggleSwitch: React.VFC<Props> = (props) => {
  const { toggle, value, icon, ariaLabel } = props;
  return (
    <ToggleSwitchFrame onClick={toggle} role={'switch'} aria-checked={value} aria-label={ariaLabel}>
      <ToggleSwitchButton aria-checked={value}>
        {icon}
      </ToggleSwitchButton>
    </ToggleSwitchFrame>
  )
}

const ToggleSwitchFrame = styled.div`
  width: 54px;
  height: 32px;
  background-color: #FFF;
  border-radius: 20px;
  border: 3px solid #ECECEC;
  position: relative;
  transition: all .4s;
  cursor: pointer;
  user-select: none;
  &[aria-checked="true"] {
    background-color: #2A2A2A;
    border: 3px solid #444;
  }
`

const ToggleSwitchButton = styled.div`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #666;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  position: absolute;
  top: -4px;
  left: -3px;
  transition: all .4s;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 4px, rgb(0 0 0 / 2%) 0px 4px 8px;
  &[aria-checked="true"] {
    margin-left: 40%;
    background-color: #444;
    box-shadow: rgb(255 255 255 / 6%) 0px 4px 4px, rgb(255 255 255 / 4%) 0px 4px 8px;
  }
`