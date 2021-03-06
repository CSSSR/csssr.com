import { css } from '@emotion/react'
import getGridValueForMs from '../../../../utils/style/getGridValueForMs'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${desktop.all} {
    aside {
      grid-column: 2 / span 4;
    }

    .sticky-wrapper {
      position: sticky;
      top: ${calcRem(72)};
    }

    aside .description {
      margin-top: 23px;
    }
  }

  ${desktop.l} {
    & {
      margin-top: 470px;
    }

    aside .title {
      width: 60%;
    }
  }

  ${desktop.m} {
    & {
      margin-top: 398px;
    }
  }

  ${desktop.s} {
    & {
      margin-top: 390px;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(353)};
    }

    .sticky-wrapper {
      position: sticky;
      top: ${calcRem(72)};
    }

    aside {
      grid-column: 2 / span 4;
    }

    aside .description {
      margin-top: ${calcRem(24)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(167)};
    }

    aside {
      grid-column: 1 / span 6;
    }

    aside .title {
      text-align: center;
    }

    aside .description {
      margin-top: ${calcRem(34)};
    }
  }
`;

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  ${desktop.all} {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
  }

  ${tablet.all} {
    aside {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${mobile.all} {
    aside {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }
`;
const StyledBenefits = props => {
  const breakpoints = props.theme.breakpoints;

  return css`
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `;
};

export default StyledBenefits