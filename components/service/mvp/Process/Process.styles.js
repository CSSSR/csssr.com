import { css } from "@emotion/core";
import getGridValueForMs from "../../../../utils/style/getGridValueForMs";
import calcRem from "../../../../utils/style/calcRem";

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    position: relative
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
      padding-bottom: 100px;
    }

    .content {
      padding-top: 25px;
    }

    .picture {
      top: -118px;
      left: calc(50% - 2025px);
    }

    .stage {
      grid-column-end: span 3;
    }

    .stage_start {
      margin-top: 119px;
    }

    .stage_development {
      margin-top: 285px;
      grid-column-start: 7
    }

    .stage_launch {
      margin-top: 251px;
    }

    .stage_start,
    .stage_launch {
      grid-column-start: 6
    }
  }

  ${desktop.m} {
    & {
      margin-top: 213px;
      padding-bottom: 130px;
    }

    .picture {
      top: -64px;
      left: calc(50% - 1610px);
    }

    .stage {
      grid-column-end: span 3;
    }

    .stage_start {
      margin-top: 91px;
      grid-column-start: 7
    }

    .stage_development {
      margin-top: 208px;
      grid-column-start: 9
    }

    .stage_launch {
      margin-top: 280px;
      grid-column-start: 8
    }
  }

  ${desktop.s} {
    & {
      margin-top: 213px;
      padding-bottom: 100px;
    }

    .picture {
      top: -60px;
      left: calc(50% - 1619px);
    }

    .stage {
      grid-column-end: span 4;
    }

    .stage_start {
      margin-top: 103px;
      grid-column-start: 6
    }

    .stage_development {
      margin-top: 264px;
      grid-column-start: 8
    }

    .stage_launch {
      margin-top: 240px;
      grid-column-start: 7
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(312)};
      padding-bottom: 70px;
    }

    h2.title {
      grid-column: 6 / span 4;
    }

    .picture {
      top: -150px;
      left: calc(50% - 1397px);
    }

    .stage {
      grid-column-end: span 3;
    }

    .stage_start {
      margin-top:  ${calcRem(90)};
      grid-column-start: 6
    }

    .stage_development {
      margin-top:  ${calcRem(210)};
      grid-column-start: 8
    }

    .stage_launch {
      margin-top: ${calcRem(258)};
      grid-column-start: 6
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(184)};
      padding-bottom: ${calcRem(36)};
    }

    .picture {
      top: ${calcRem(10)};
      left: 0;
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
  }

  ${desktop.l} {
    & > .title {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }
  }

  ${desktop.m} {

  }

  ${desktop.s} {

  }

  ${tablet.all} {

  }

  ${mobile.all} {
  }
`;

export default props => {
  const breakpoints = props.theme.breakpoints;

  return css`
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `;
};
