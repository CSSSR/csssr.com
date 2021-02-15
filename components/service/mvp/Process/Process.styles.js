import { css } from '@emotion/react'
import getGridValueForMs from '../../../../utils/style/getGridValueForMs'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    position: relative;
    padding-bottom: 160px;
  }

  .picture {
    position: absolute;
  }

  ${desktop.all} {
    h2.title {
      grid-column: 6 / span 4;
    }
  }

  ${desktop.l} {
    & {
      margin-top: 305px;
    }

    .content {
      padding-top: 25px;
    }

    .picture {
      top: -118px;
      left: calc(50% - 2025px);
      width: 2008px;
    }

    .stage {
      grid-column-end: span 3;
    }

    .stage_start {
      margin-top: 119px;
    }

    .stage_development {
      margin-top: 285px;
      grid-column-start: 7;
    }

    .stage_launch {
      margin-top: 251px;
    }

    .stage_start,
    .stage_launch {
      grid-column-start: 6;
    }
  }

  ${desktop.m} {
    & {
      margin-top: 213px;
    }

    .picture {
      top: -64px;
      left: calc(50% - 1610px);
      width: 1714px;
    }

    .stage {
      grid-column-end: span 3;
    }

    .stage_start {
      margin-top: 91px;
      grid-column-start: 7;
    }

    .stage_development {
      margin-top: 208px;
      grid-column-start: 9;
    }

    .stage_launch {
      margin-top: 280px;
      grid-column-start: 8;
    }
  }

  ${desktop.s} {
    & {
      margin-top: 213px;
    }

    .picture {
      top: -60px;
      left: calc(50% - 1619px);
      width: 1612px;
    }

    .stage {
      grid-column-end: span 4;
    }

    .stage_start {
      margin-top: 103px;
      grid-column-start: 6;
    }

    .stage_development {
      margin-top: 264px;
      grid-column-start: 8;
    }

    .stage_launch {
      margin-top: 240px;
      grid-column-start: 7;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(312)};
      padding-bottom: ${calcRem(160)};
    }

    h2.title {
      grid-column: 6 / span 4;
    }

    .picture {
      top: -150px;
      left: calc(50% - ${calcRem(1397)});
      width: ${calcRem(1486)};
    }

    .stage {
      grid-column-end: span 3;
    }

    .stage_start {
      margin-top: ${calcRem(90)};
      grid-column-start: 6;
    }

    .stage_development {
      margin-top:  ${calcRem(210)};
      grid-column-start: 8;
    }

    .stage_launch {
      margin-top: ${calcRem(258)};
      grid-column-start: 6;
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(184)};
      padding-bottom: ${calcRem(160)};
    }

    .picture {
      top: ${calcRem(10)};
      left: 0;
      width: ${calcRem(120)};
    }

    .stage,
    h2.title {
      grid-column: 3 / span 4;
    }

    .stage_start {
      margin-top: ${calcRem(50)};
    }

    .stage_development {
      margin-top:  ${calcRem(90)};
    }

    .stage_launch {
      margin-top: ${calcRem(90)};
    }
  }
`;

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  ${desktop.all} {
    h2.title {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${desktop.l} {
    .stage {
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }

    .stage_development {
      -ms-grid-column: ${getGridValueForMs(7)};
    }

    .stage_start,
    .stage_launch {
      -ms-grid-column: ${getGridValueForMs(6)};
    }
  }

  ${desktop.m} {
    .stage {
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }

    .stage_start {
      -ms-grid-column: ${getGridValueForMs(7)};
    }

    .stage_development {
      -ms-grid-column: ${getGridValueForMs(9)};
    }

    .stage_launch {
      -ms-grid-column: ${getGridValueForMs(8)};
    }
  }

  ${desktop.s} {
    .stage {
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .stage_start {
      -ms-grid-column: ${getGridValueForMs(6)};
    }

    .stage_development {
      -ms-grid-column: ${getGridValueForMs(8)};
    }

    .stage_launch {
      -ms-grid-column: ${getGridValueForMs(7)};
    }
  }

  ${tablet.all} {
    h2.title {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .stage {
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }

    .stage_start {
      -ms-grid-column: ${getGridValueForMs(6)};
    }

    .stage_development {
      -ms-grid-column: ${getGridValueForMs(8)};
    }

    .stage_launch {
      -ms-grid-column: ${getGridValueForMs(6)};
    }
  }

  ${mobile.all} {

    .stage,
    h2.title {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }
`;

const StyledProcess = props => {
  const breakpoints = props.theme.breakpoints;

  return css`
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `;
};

export default StyledProcess
