import { css } from '@emotion/react'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'
import calcRem from '../../../utils/style/calcRem'
import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'

const imagesDo = require.context('../../../public/images/main/about-us/do?csssr-images')

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  .about-us-title {
    grid-column: 3 / span 4;
    grid-row: 1;
  }

  .about-us-description {
    margin-top: 12px;
    grid-column: 7 / span 5;
    grid-row: 1;
    grid-row-end: span 3;
  }

  .about-us-description,
  .fact-description  {
    color: ${colors.secondary.darken100};
  }

  .picture {
    grid-column: 2 / span 4;
    background-color: #ffffff;
  }

  .fact {
    margin-top: 84px;
    grid-column-end: span 2;

    &:nth-of-type(2n+1) {
      grid-column-start: 7;
    }

    &:nth-of-type(2n) {
      grid-column-start: 9;
    }

    &:nth-of-type(n + 3) {
      margin-top: 40px;
    }
  }

  .fact-title {
    font-weight: 400;
  }

  .fact-title,
  .fact-description {
    width: 66%;
  }

  .fact-description {
    margin-top: -3px;
  }

  .link {
    grid-column: 7 / span 2;
    margin-top: 85px;
  }

  .picture-wrapper {
    position: sticky;
    top: 24px;
    margin-top: 35px;
    grid-column: 1 / span 6;
    grid-row-end: span 4;
    background-size: 99%;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  .picture_elbrus,
  .picture_volleyball {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    transition: opacity 100ms ease-out;
  }

  .picture_love {
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  .picture_volleyball {
    z-index: 0;
    top: -2px;
  }

  .picture_elbrus {
    z-index: 2;
  }

  .picture-wrapper_elbrus .picture_elbrus,
  .picture-wrapper_volleyball .picture_volleyball {
    opacity: 1;
  }

  .italic {
    font-style: italic;
  }

  ${desktop.all} {
    .picture-wrapper {
      height: 460px;
      width: 656px;
      z-index: -1;
    }

    .picture {
      height: 100%;
    }
  }

  ${desktop.l} {
    & {
      margin-top: 152px;
    }

    .picture-wrapper {
      margin-top: 35px;
      margin-left: -55px;
      grid-column: 2 / span 4;
    }

    .fact:nth-of-type(n + 3) {
      margin-top: 35px;
    }

    .link {
      margin-top: 76px;
    }
  }

  ${desktop.m} {
    & {
      margin-top: 152px;
    }

    .fact-title,
    .fact-description {
      width: 80%;
    }
  }

  ${desktop.s} {
    margin-top: 154px;

    .about-us-description {
      margin-top: 14px;
    }

    .picture-wrapper {
      margin-left: -24px;
      height: 460px;
      background-position: 15px 0;
    }

    .picture {
      height: 100%;

      img {
        width: auto;
      }
    }

    .fact-title,
    .fact-description {
      width: 85%;
    }
  }

  ${tablet.all} {
    margin-top: ${calcRem(101)};

    .about-us-description {
      margin-top: ${calcRem(2)};
    }

    .fact {
      margin-top: ${calcRem(44)};

      &:nth-of-type(n + 3) {
        margin-top: ${calcRem(38)};
      }
    }

    .fact-title,
    .fact-description {
      width: 85%;
    }

    .fact-description {
      margin-top: ${calcRem(2)};
    }

    .link {
      margin-top: ${calcRem(64)};
    }

    .picture-wrapper {
      margin-top: ${calcRem(25)};
      margin-left: ${calcRem(-20)};
      height: ${calcRem(352)};
      background-position: ${calcRem(5)} 0;
    }

    .picture {
      height: 100%;

      img {
        width: auto;
      }
    }

    @media (pointer:coarse) {
      .picture_elbrus,
      .picture_volleyball {
        display: none;
      }
    }
  }

  ${mobile.all} {
    margin-top: ${calcRem(104)};

    .about-us-title,
    .about-us-description {
      grid-column: 1 / span 6;
    }

    .about-us-title,
    .about-us-description {
      text-align: center;
    }

    .about-us-description {
      margin-top: ${calcRem(41)};
      grid-row: auto;
    }

    .fact {
      margin-top: ${calcRem(36)};

      &:nth-of-type(2n+1) {
        padding-right: ${calcRem(16)};
        grid-column-start: 2;
      }

      &:nth-of-type(2n) {
        grid-column-start: 4;
      }

      &:nth-of-type(n + 3) {
        margin-top: ${calcRem(22)};
      }
    }

    .fact-title,
    .fact-description {
      width: 110%;
    }

    .fact-description {
      margin-top: ${calcRem(2)};
    }

    .link {
      margin-top: ${calcRem(40)};
      grid-column: 2 / span 4;
    }

    .picture-wrapper {
      position: relative;
      top: 0;
      margin-top: ${calcRem(26)};
      background: none;
      grid-row: auto;
    }

    .picture_elbrus,
    .picture_volleyball {
      display: none;
    }

    .picture_love {
      position: static;
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, mobile }}) => css`
  .about-us-title {
    -ms-grid-column: ${getGridValueForMs(3)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
    -ms-grid-row: 1;
  }

  .about-us-description {
    -ms-grid-column: ${getGridValueForMs(7)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 1;
    -ms-grid-row-span: 3;
  }

  .picture-wrapper {
    position: relative;
    -ms-grid-column: ${getGridValueForMs(1)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
    -ms-grid-row: 2;
    -ms-grid-row-span: 4;
  }

  .fact {
    -ms-grid-column-span: ${getGridValueForMs(2)};

    &:nth-of-type(2n+1) {
      -ms-grid-column: ${getGridValueForMs(7)};
    }

    &:nth-of-type(2n) {
      -ms-grid-column: ${getGridValueForMs(9)};
    }

    &:nth-of-type(1) {
      -ms-grid-row: 4;
    }

    &:nth-of-type(2) {
      -ms-grid-row: 4;
    }

    &:nth-of-type(3) {
      -ms-grid-row: 5;
    }

    &:nth-of-type(4) {
      -ms-grid-row: 5;
    }
  }

  .link {
    -ms-grid-column: ${getGridValueForMs(7)};
    -ms-grid-column-span: ${getGridValueForMs(2)};
    -ms-grid-row: 6;
    display: block;
  }

  ${desktop.l} {
    .picture-wrapper {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${mobile.all} {
    margin-top: ${calcRem(104)};

    .about-us-title,
    .about-us-description,
    .picture {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }

    .about-us-title {
      -ms-grid-row: 1;
    }

    .picture-wrapper {
      -ms-grid-row: 2;
      -ms-grid-row-span: 1;
    }

    .about-us-description {
      -ms-grid-row: 3;
      -ms-grid-row-span: 1;
    }

    .fact {
      &:nth-of-type(2n+1) {
        -ms-grid-column: ${getGridValueForMs(2)};
      }

      &:nth-of-type(2n) {
        -ms-grid-column: ${getGridValueForMs(4)};
      }
    }

    .link {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }
`

export const loveBackgroundImagesStyles = theme => {
  const { above  } = theme.breakpoints

  return css`
    ${above.mobile} {
      ${backgroundCssSmart('.about-us .picture-wrapper', imagesDo)}
    }
  `
}
const StyledAboutUs = props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
export default StyledAboutUs
