import { css } from '@emotion/react'
import getGridValueForMs from '../../../../utils/style/getGridValueForMs'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    position: relative;
  }

  .picture-container {
    position: absolute;
    height: 0;
    overflow: hidden;
  }

  .picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ${desktop.all} {
    .title {
      margin-top: 199px;
    }

    .description {
      margin-top: 77px;
      grid-column: 2 / span 4;
    }

    .button {
      margin-top: 60px;
    }
  }

  ${desktop.l} {
    & {
      padding-bottom: 437px;
    }

    .title {
      grid-column: 2 / span 4;
    }

    .button {
      grid-column: 2 / span 2;
    }

    .picture-container {
      top: 224px;
      right: 152px;
      width: 728px;
      padding-top: calc(1776 / 2184 * 728px);
    }
  }

  ${desktop.m} {
    & {
      padding-bottom: 453px;
    }

    .title {
      grid-column: 2 / span 6;
    }

    .button {
      grid-column: 2 / span 3;
    }

    .picture-container {
      top: 232px;
      right: 0;
      width: 788px;
      padding-top: calc(1776 / 2184 * 788px);
    }
  }

  ${desktop.s} {
    & {
      padding-bottom: 453px;
    }

    .title {
      grid-column: 2 / span 6;
    }

    .button {
      grid-column: 2 / span 3;
    }

    .picture-container {
      top: 278px;
      right: -6px;
      width: 724px;
      padding-top: calc(1776 / 2184 * 724px);
    }
  }

  ${tablet.all} {
    & {
      padding-bottom:  ${calcRem(263)};
    }

    .title {
      margin-top: ${calcRem(212)};
    }

    .description {
      margin-top: ${calcRem(27)};
    }

    .button {
      margin-top: ${calcRem(57)};
      grid-column: 2 / span 3;
    }

    .title,
    .description {
      grid-column: 2 / span 4;
    }

    .picture-container {
      top: ${calcRem(184)};
      right: 0;
      width: ${calcRem(544)};
      padding-top: calc(1776 / 2184 * ${calcRem(544)});
    }
  }

  ${mobile.all} {
    & {
      overflow: hidden;
    }

    .title {
      margin-top: ${calcRem(196)};
      z-index: 2;
    }

    .description {
      margin-top: ${calcRem(27)};
    }

    .button {
      margin-top: ${calcRem(49)};
    }

    .title,
    .description,
    .button {
      grid-column: 1 / span 6;
    }

    .picture-container {
      top: ${calcRem(26)};
      right: ${calcRem(-6)};
      width: ${calcRem(126)};
      z-index: 1;
      padding-top: calc(591 / 360 * ${calcRem(126)});
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${desktop.all} {
    .description {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${desktop.l} {
    .title {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .button {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(2)};
    }
  }

  ${desktop.m} {
    .title {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }

    .button {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }
  }

  ${desktop.s} {
    .title {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }

    .button {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }
  }

  ${tablet.all} {
    .title,
    .description {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .button {
      grid-column: 2 / span 3;
    }
  }

  ${mobile.all} {
    .title,
    .description,
    .button {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }
`
const StyledHero = props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
export default StyledHero
