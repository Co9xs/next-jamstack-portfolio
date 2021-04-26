import styled from 'styled-components';

type Props = React.SVGProps<SVGSVGElement> & {};

export const MoonIcon: React.VFC<Props> = (props) => { 
  const { } = props;
  return (
    <SvgBase>
      <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 512 512" xmlSpace="preserve">
      <g>
          <path d="M403.469,395.031c-129.203,0-233.938-104.75-233.938-233.953c0-62.438,24.5-119.125,64.375-161.078
          C109.313,17.953,13.563,125.094,13.563,254.656C13.563,396.781,128.781,512,270.906,512c98.688,0,184.359-55.578,227.531-137.125
          C469.406,387.781,437.297,395.031,403.469,395.031z" className={'need-reverse'}></path>
      </g>
      </svg>
    </SvgBase>
  );
}

const SvgBase = styled.div`
  width: 16px;
  height: 16px;
  .need-reverse {
    fill: #DDD
  }

  //DarkMode
  .need-reverse {
    fill: ${({ theme }) => theme.yellow};
  }
`