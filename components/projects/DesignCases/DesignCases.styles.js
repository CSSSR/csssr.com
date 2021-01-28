import { css } from '@emotion/react'
import calcRem from '../../../utils/style/calcRem'


const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  .cases-wrapper {
    grid-column: 1 / span 12;
    margin-top: ${calcRem(56)};
  }

  .heading {
    grid-column: 2 / span 5;
  }

  .button {
    margin-top: ${calcRem(40)};
  }

  ${desktop.all} {
    & {
      margin-top: 152px;
    }
  }

  ${desktop.l} {
    .button {
      grid-column: 2 / span 2;
    }
  }

  ${desktop.m} {
    .button {
      grid-column: 2 / span 3;
    }
  }

  ${desktop.s} {
    .button {
      grid-column: 2 / span 3;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(112)};
    }

    .heading {
      grid-column: 1 / span 6;
    }

    .cases-wrapper {
      margin-top: ${calcRem(40)};
    }

    .button {
      grid-column: 1 / span 4;
      margin-top: ${calcRem(32)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(88)};
    }

    .cases-wrapper {
      grid-column: 1 / span 6;
      margin-top: ${calcRem(32)};
    }

    .heading {
      grid-column: 1 / span 6;
    }

    .button {
      grid-column: 1 / span 6;
      margin-top: ${calcRem(32)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
