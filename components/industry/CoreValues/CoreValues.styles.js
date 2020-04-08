import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  & {
    margin-top: ${calcRem(352)};
  }

  .heading {
    grid-column: 1 / span 12;
    grid-row: 1;
    text-align: center;
  }

  .sub-heading {
    grid-column: 3 / span 8;
    grid-row: 2;
    text-align: center;
    margin-top: ${calcRem(31)};
    color: ${colors.secondary.darken100};
  }

  .card {
    grid-row: 3;
  }

  .image {
    display: flex;
    align-items: flex-end;
    img {
      height: auto;
    }
  }

  .title {
    margin-top: ${calcRem(56)};
    color: ${colors.secondary.darken100};
    svg {
      margin-left: ${calcRem(16)};
      opacity: 0;
      transition: opacity 100ms ease-out;
    }
  }

  @media (pointer: fine) {
    .card:hover {
    .title svg {
        opacity: 1;
      }
    }
  }

  .text {
    margin-top: ${calcRem(22)};
    color: ${colors.secondary.darken100};
  }

  .first-item {
    grid-column: 1 / span 3;
  }

  .second-item {
    grid-column: 5 / span 4;
  }

  .third-item {
    grid-column: 10 / span 3;
  }

  .first-item.card,
  .third-item.card {
    margin-top: ${calcRem(164)};
  }

  .button {
    grid-row: 4;
    grid-column: 6 / span 3;
    max-width: 296px;
    background-color: #ffffff;
    border: 2px solid #000000;
    color: ${colors.secondary.origin};
  }

  .button:hover {
    border-color: #E8178A;
    background-color: #ffffff;
  }

  ${desktop.all} {
    .second-item.card {
      margin-top: ${calcRem(76)};
    }

    .button {
      margin-top: ${calcRem(73)};
    }
  }

  ${desktop.l} {
    .second-item .image {
      max-height: 568px;
    }
  }

  ${desktop.m} {
    & {
      margin-top: ${calcRem(307)};
    }

    .heading {
      grid-column: 1 / span 12;
      text-align: center;
    }

    .sub-heading {
      grid-column: 3 / span 8;
      text-align: center;
      padding: 0 ${calcRem(12)};
      margin-top: ${calcRem(31)};
    }

    .first-item.card,
    .third-item.card {
      margin-top: ${calcRem(140)};
    }

    .second-item .image {
      max-height: 424px;
    }
  }

  ${desktop.s} {
    & {
      margin-top: ${calcRem(312)};
    }

    .first-item.card,
    .third-item.card {
      margin-top: ${calcRem(132)};
    }

    .heading {
      grid-column: 1 / span 12;
      grid-row: 1;
      text-align: center;
    }

    .second-item .image {
      max-height: 392px;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(215)};
    }

    .sub-heading {
      margin-top: ${calcRem(10)};
      margin-bottom: ${calcRem(2)};
    }

    .first-item.card,
    .third-item.card {
      margin-top: ${calcRem(96)};
    }

    .second-item.card {
      margin-top: ${calcRem(55)};
    }

    .second-item .image {
      max-height: 296px;
    }

    .title {
      margin-top: ${calcRem(62)};
    }

    .text {
      margin-top: ${calcRem(16)};
      font-size: ${calcRem(14)};
    }

    .button {
      margin-top: ${calcRem(49)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(143)};
    }

    .heading,
    .sub-heading,
    .card {
      grid-column: 1 / span 6;
    }

    .heading {
      text-align: start;
    }

    .sub-heading {
      text-align: start;
      margin-top: ${calcRem(10)};
    }

    .first-item {
      grid-row: 3;
    }

    .second-item {
      grid-row: 4;
    }

    .third-item {
      grid-row: 5;
    }

    .second-item.card,
    .third-item.card {
      margin-top: ${calcRem(89)};
    }

    .first-item.card {
      margin-top: ${calcRem(87)};
    }

    .title {
      margin-top: ${calcRem(30)};
    }

    .text {
      margin-top: ${calcRem(13)};
      font-size: ${calcRem(14)};
    }

    .button {
      grid-row: 6;
      grid-column: 1 / span 6;
      max-width: 100%;
      margin-top: ${calcRem(57)};
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop }}) => css`
  .heading {
    -ms-grid-column: ${getGridValueForMs(1)};
    -ms-grid-column-span: ${getGridValueForMs(12)};
    -ms-grid-row: 1;
  }

  .sub-heading {
    -ms-grid-column: ${getGridValueForMs(3)};
    -ms-grid-column-span: ${getGridValueForMs(8)};
    -ms-grid-row: 2;
  }

  .card {
    display: block;
    -ms-grid-row: 3;
  }

  .image {
    display: flex;
    align-items: flex-end;

  }

  .title {
    display: block;
  }

  .first-item {
    -ms-grid-column: ${getGridValueForMs(1)};
    -ms-grid-column-span: ${getGridValueForMs(3)};
  }

  .second-item {
    -ms-grid-column: ${getGridValueForMs(5)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
  }

  .third-item {
    -ms-grid-column: ${getGridValueForMs(10)};
    -ms-grid-column-span: ${getGridValueForMs(3)};
  }

  .card:hover {
    .title svg {
      opacity: 1;
    }
  }

  ${desktop.m} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(12)};
    }

    .sub-heading {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(8)};
    }
  }

  ${desktop.s} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(12)};
      -ms-grid-row: 1;
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
