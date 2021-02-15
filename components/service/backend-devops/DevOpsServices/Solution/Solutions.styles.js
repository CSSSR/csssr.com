import { css } from '@emotion/react'
import calcRem from '../../../../../utils/style/calcRem'
import getGridValueForMs from '../../../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-top: ${calcRem(113)};
    padding-bottom: 160px;
  }

  .title {
    grid-column: 1 / span 6;
    grid-row: 1;
    margin-bottom: ${calcRem(33)};
  }

  .case {
    position: relative;
    grid-column: 1 / span 6;
  }

  .case-title::before {
    top: 0;
    left: 0;
    position: absolute;
    content: '';
    width: 3rem;
    height: 3rem;
    background-repeat: no-repeat;
    background-position-y: center;
  }

  .case_continuous .case-title::before {
    background-image: url(${require('../../../../../static/icons/solutions/continuous.svg').default});
  }

  .case_automatic .case-title::before {
    background-image: url(${require('../../../../../static/icons/solutions/automatic.svg').default});
  }

  .case_cluster .case-title::before {
    background-image: url(${require('../../../../../static/icons/solutions/cluster.svg').default});
  }

  .case_maintenance .case-title::before {
    background-image: url(${require('../../../../../static/icons/solutions/maintenance.svg').default});
  }

  .case-title {
    position: relative;
    padding-left: ${calcRem(56)};
  }

  .case-top {
    display: flex;
    align-items: center;
  }

  .case-description {
    margin-top: ${calcRem(13)};
  }

  ${mobile.all} {
    & {
      padding-bottom: ${calcRem(160)};
    }

    .case + .case {
      margin-top: ${calcRem(59)};
    }

    .case-top {
      min-height: 3rem;
    }

    .case-title::before {
      top: 50%;
      transform: translateY(-50%);
      background-size: 80%;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(145)};
      padding-bottom: ${calcRem(160)};
    }

    .title {
      text-align: center;
      grid-column: 1 / span 12;
      margin-bottom: ${calcRem(61)};
    }

    .case_continuous,
    .case_cluster {
      grid-column: 2 / span 4;
    }

    .case_automatic,
    .case_maintenance {
      grid-column: 8 / span 4;
    }

    .case_continuous,
    .case_automatic {
      margin-bottom: ${calcRem(63)};
    }

    .case-title {
      padding-left: ${calcRem(80)};
    }

    .case-title::before {
      background-size: 90%;
    }

    .case-description {
      margin-top: ${calcRem(9)};
      padding-left: ${calcRem(80)};
    }
  }

  ${desktop.all} {
    & {
      margin-top: ${calcRem(167)};
    }

    .title {
      text-align: center;
      grid-column: 1 / span 12;
      margin-bottom: ${calcRem(81)};
    }

    .case_continuous,
    .case_cluster {
      grid-column: 2 / span 4;
    }

    .case_automatic,
    .case_maintenance {
      grid-column: 7 / span 4;
    }

    .case-title {
      padding-left: ${calcRem(104)};
    }

    .case-title::before {
      width: 4rem;
      height: 4rem;
      background-size: 3.8rem;
    }

    .case-description {
      margin-top: ${calcRem(15)};
      padding-left: ${calcRem(104)};
    }

    .case_continuous,
    .case_automatic {
      margin-bottom: ${calcRem(97)};
    }
  }

  ${desktop.l} {
    .case-title,
    .case-description {
      padding-left: ${calcRem(152)};
    }
  }
`


const ie11Styles = ({ breakpoints: { desktop, tablet }}) => css`
  .title {
    -ms-grid-column: ${getGridValueForMs(1)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
    -ms-grid-row: 1;
  }

  .case {
    -ms-grid-column: ${getGridValueForMs(1)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
  }

  ${tablet.all} {
    .title {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(12)};
    }

    .case_continuous,
    .case_cluster {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .case_automatic,
    .case_maintenance {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${desktop.all} {
    .title {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(12)};
    }

    .case_continuous,
    .case_cluster {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .case_automatic,
    .case_maintenance {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }
`
const StyledSolutions = props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
export default StyledSolutions
