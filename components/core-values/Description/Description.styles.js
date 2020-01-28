import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const dynamicStyles = description => css`
  ${description.length < 2 ?
    `
      .icon-column-1 {
        grid-column: 4 / span 1;
      }

      .text-column-1 {
        grid-column: 5 / span 5;
      }
    `
    :
    `
      .icon-column-1 {
        grid-column: 2 / span 1;
      }

      .icon-column-2 {
        grid-column: 7 / span 1;
      }

      .text-column-1 {
        grid-column: 3 / span 3;
      }

      .text-column-2 {
        grid-column: 8 / span 3;
      }
    `
  }
`

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-top: ${calcRem(143)};
  }

  ${desktop.s} {
    & {
      margin-top: ${calcRem(120)};
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(95)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: 0;
    }

    .icon-column-1,
    .icon-column-2,
    .text-column-1,
    .text-column-2 {
      grid-column: 1 / span 6;
      grid-row: auto;
    }

    .icon-column-1,
    .icon-column-2 {
      margin-top: ${calcRem(55)};
    }

    .text-column-1,
    .text-column-2 {
      margin-top: ${calcRem(15)};
    }
  }
`

const ie11Styles = ({ description, breakpoints: { desktop }}) => css`
  ${description.length < 2 ?
    `
      .icon-column-1 {
        -ms-grid-column: ${getGridValueForMs(4)};
        -ms-grid-column-span: ${getGridValueForMs(1)};
      }

      .text-column-1 {
        -ms-grid-column: ${getGridValueForMs(5)};
        -ms-grid-column-span: ${getGridValueForMs(5)};
      }
    `
    :
    `
      .icon-column-1 {
        -ms-grid-column: ${getGridValueForMs(2)};
        -ms-grid-column-span: ${getGridValueForMs(1)};
      }

      .icon-column-2 {
        -ms-grid-column: ${getGridValueForMs(7)};
        -ms-grid-column-span: ${getGridValueForMs(1)};
      }

      .text-column-1 {
        -ms-grid-column: ${getGridValueForMs(3)};
        -ms-grid-column-span: ${getGridValueForMs(3)};
      }

      .text-column-2 {
        -ms-grid-column: ${getGridValueForMs(8)};
        -ms-grid-column-span: ${getGridValueForMs(3)};
      }
    `
  }

  ${desktop.m} {
    
  }

  ${desktop.s} {
    
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const description = props.description

  return css`
    ${dynamicStyles(description)}
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles({ breakpoints, description })}
  `
}
