import { css } from '@emotion/react'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors}) => css`
  & {
    padding-bottom: ${calcRem(256)};
  }

  .title,
  .text {
    color: ${colors.secondary.darken100};
  }

  ${desktop.all},
  ${tablet.all.replace('@media ', '')} {
    .picture_node {
      grid-row: 1;
    }

    .title_node {
      grid-row: 2;
    }

    .picture_dbs {
      grid-row: 1 / span 2;
    }

    .picture_node,
    .title_node {
      grid-column: 2;
    }

    .title_dbs {
      grid-row: 3;
    }

    .text_node {
      grid-column: 2 / span 3;
      grid-row: 3 / span 2;
    }

    .text_dbs {
      grid-row: 4;
    }

    .picture_dbs,
    .text_dbs {
      grid-column: 7 / span 5;
    }

    .title_dbs {
      grid-column: 7 / span 6;
    }

    .picture_kotlin {
      grid-column: 2 / span 2;
      grid-row: 5 / span 2;
    }

    .title_kotlin {
      grid-row: 5;
    }

    .text_kotlin {
      grid-row: 6;
    }

    .title_kotlin,
    .text_kotlin {
      grid-column: 5 / span 5;
    }
  }

  ${desktop.all} {
    & {
      margin-top: ${calcRem(-70)};
    }

    .title_node {
      margin-top: 71px;
    }

    .title_dbs {
      margin-top: 77px;
    }

    .text_dbs {
      margin-top: 31px;
    }

    .text_kotlin {
      margin-top: 20px;
    }
  }

  ${desktop.l} {
    & {
      grid-template-rows: 737px max-content max-content max-content 302px max-content;
      margin-top: ${calcRem(-83)};
      padding-bottom: ${calcRem(313)};
    }

    .picture_dbs {
      margin-top: 233px;
    }

    .picture_node {
      margin-top: 617px;
      width: 120px;
      height: 120px;
    }

    .text_node {
      margin-top: -28px;
    }

    .picture_kotlin {
      margin-top: 212px;
    }

    .title_kotlin {
      margin-top: 268px;
      width: 272px;
      height: 280px;
    }
  }

  ${desktop.m} {
    & {
      grid-template-rows: 515px max-content max-content max-content 228px max-content;
      padding-bottom: ${calcRem(313)};
    }

    .picture_dbs {
      margin-top: 153px;
    }

    .picture_node {
      margin-top: 419px;
      width: 96px;
      height: 96px;
    }

    .text_node {
      margin-top: -5px;
    }

    .picture_kotlin {
      margin-top: 196px;
      width: 208px;
      height: 216px;
    }

    .title_kotlin {
      margin-top: 196px;
    }
  }

  ${desktop.s} {
    & {
      grid-template-rows: 513px max-content max-content max-content 196px max-content;
      padding-bottom: ${calcRem(289)};
    }

    .picture_dbs {
      margin-top: 239px;
    }

    .picture_node {
      margin-top: 508px;
      width: 88px;
      height: 88px;
    }

    .title_node {
      margin-top: 123px;
    }

    .text_node {
      margin-top: -5px;
    }

    .picture_kotlin {
      margin-top: 172px;
      width: 192px;
      height: 200px;
    }

    .title_kotlin {
      margin-top: 164px;
    }
  }

  ${tablet.all} {
    & {
      grid-template-rows: ${calcRem(458)} max-content max-content max-content ${calcRem(196)} max-content;
      margin-top: ${calcRem(-80)};
      padding-bottom: ${calcRem(249)};
    }

    .picture_dbs {
      margin-top: ${calcRem(192)};
    }

    .picture_node {
      margin-top: ${calcRem(347)};
      width: ${calcRem(64)};
      height: ${calcRem(64)};
    }

    .text_node {
      margin-top: ${calcRem(-18)};
    }

    .picture_kotlin {
      margin-top: ${calcRem(175)};
      width: ${calcRem(144)};
      height: ${calcRem(152)};
    }

    .title_kotlin {
      margin-top: ${calcRem(173)};
    }

    .title_node {
      margin-top: ${calcRem(18)};
    }

    .text_kotlin {
      margin-top: ${calcRem(25)};
    }

    .title_dbs {
      margin-top: ${calcRem(39)};
    }

    .text_dbs {
      margin-top: ${calcRem(18)};
    }
  }

  ${mobile.all} {
    & {
      padding-bottom: ${calcRem(98)};
    }

    .picture_dbs {
      grid-column: 1 / span 5;
      height: ${calcRem(240)};
      margin-top: ${calcRem(173)};
      padding-bottom: ${calcRem(153)};
    }

    .title_dbs {
      margin-top: ${calcRem(39)};
    }

    .text_dbs {
      margin-top: ${calcRem(18)};
    }

    .title_dbs,
    .text_dbs {
      grid-column: 1 / span 6;
    }

    .picture_node {
      margin-top: ${calcRem(116)};
    }

    .title_node {
      margin-top: ${calcRem(18)};
    }

    .text_node {
      margin-top: ${calcRem(25)};
    }

    .picture_node,
    .title_node {
      grid-column: 3 / span 2;
    }

    .text_node {
      grid-column: 3 / span 4;
    }

    .picture_kotlin {
      margin-top: ${calcRem(93)};
      height: ${calcRem(104)};
    }

    .title_kotlin {
      margin-top: ${calcRem(40)};
    }

    .text_kotlin {
      margin-top: ${calcRem(25)};
    }

    .picture_kotlin,
    .title_kotlin {
      grid-column: 1 / span 2;
    }

    .text_kotlin {
      grid-column: 1 / span 4;
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${desktop.all},
  ${tablet.all.replace('@media ', '')} {
    .picture_node {
      -ms-grid-row: 1;
    }

    .title_node {
      -ms-grid-row: 2;
    }

    .picture_dbs {
      grid-row: 1 / span 2;
      -ms-grid-row: 1;
      -ms-grid-row-span: 2;
    }

    .picture_node,
    .title_node {
      -ms-grid-column: ${getGridValueForMs(2)};
    }

    .title_dbs {
      -ms-grid-row: 3;
    }

    .text_node {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
      -ms-grid-row: 3;
      -ms-grid-row-span: 2;
    }

    .text_dbs {
      -ms-grid-row: 4;
    }

    .picture_dbs,
    .text_dbs {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .title_dbs {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }

    .picture_kotlin {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(2)};
      -ms-grid-row: 5;
      -ms-grid-row-span: 2;
    }

    .title_kotlin {
      -ms-grid-row: 5;
    }

    .text_kotlin {
      -ms-grid-row: 6;
    }

    .title_kotlin,
    .text_kotlin {
      -ms-grid-column: ${getGridValueForMs(5)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }
  }

  ${desktop.l} {
    & {
      -ms-grid-rows: 737px max-content max-content max-content 302px max-content;
    }
  }

  ${desktop.m} {
    & {
      -ms-grid-rows: 515px max-content max-content max-content 228px max-content;
    }
  }

  ${desktop.s} {
    & {
      -ms-grid-rows: 513px max-content max-content max-content 196px max-content;
    }
  }

  ${tablet.all} {
    & {
      -ms-grid-rows: ${calcRem(458)} max-content max-content max-content ${calcRem(196)} max-content;
    }
  }

  ${mobile.all} {
    .picture_dbs {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .title_dbs,
    .text_dbs {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }

    .picture_node,
    .title_node {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(2)};
    }

    .text_node {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .picture_kotlin,
    .title_kotlin {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(2)};
    }

    .text_kotlin {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(24)};
    }
  }
`
const StyledBackend = props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
export default StyledBackend
