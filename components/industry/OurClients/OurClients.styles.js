import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-top: ${calcRem(347)};
  }

  .heading {
    grid-column: 1 / span 12;
    grid-row: 1;
    justify-self: center;
  }

  .image {
    position: relative;
    grid-column: 2 / span 11;
    grid-row: 2;
    z-index: -1;
    margin-top: ${calcRem(119)};
  }

  ${desktop.m} {
    margin-top: ${calcRem(308)};

    .image {
      margin-top: ${calcRem(69)};
    }
  }

  ${desktop.s} {
    margin-top: ${calcRem(224)};

    .image {
      margin-top: ${calcRem(82)};
    }
  }

  ${tablet.all} {
    margin-top: ${calcRem(215)};

    .image {
      margin-top: ${calcRem(78)};
      margin-left: -3.5rem;
    }
  }

  ${mobile.all} {
    margin-top: ${calcRem(135)};

    .heading {
      justify-self: start;
    }

    .image {
      grid-column: 1 / span 6;
      margin-top: ${calcRem(130)};
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet }}) => css`
  .heading {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 1;
  }

  .image {
    -ms-grid-column: ${getGridValueForMs(7)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 1;
    -ms-grid-row-span: 4;
  }

  ${desktop.m} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }

    .image {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }
  }

  ${desktop.s} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }

    .image {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }
  }

  ${tablet.all} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }

    .image {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}