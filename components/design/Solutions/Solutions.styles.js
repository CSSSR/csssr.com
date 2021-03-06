import { css } from '@emotion/react'
import calcRem from '../../../utils/style/calcRem'


const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  & {
    margin-top: ${calcRem(152)};
  }

  .heading {
    grid-column: 2 / span 5;
    font-weight: normal;
  }

  .solution {
    margin-top: ${calcRem(56)};

    &:hover .solution-heading {
      color: ${colors.primary.origin};
    }

    &_lms {
      grid-column: 2 / span 5;

      &:hover .image {
        opacity: 0;
      }
    }

    &_time-tracker {
      grid-column: 8 / span 4;

      &:hover .image {
        opacity: 0;
      }
    }
  }

  .image-wrapper {
    background-repeat: no-repeat;

    &_lms {
      background-image: url('/images/projects/solutions/lms_hover/desktop.l.png');
      background-size: 728px 226px;
    }

    &_time-tracker {
      background-image: url('/images/projects/solutions/time-tracker_hover/desktop.l.png');
      background-size: 576px 226px;
    }
  }

  .solution-link {
    text-decoration: none;

    &:hover {
      &::after {
        display: none;
      }
    }
  }

  .solution-heading {
    margin-top: ${calcRem(40)};
  }

  .text {
    grid-column: 2 / span 4;
    margin-top: ${calcRem(32)};
    font-size: ${calcRem(18)};
    line-height: ${calcRem(30)};
  }

  ${desktop.m} {
    .solution-heading {
      max-width: 430px;
    }
    
    .image-wrapper {
      &_lms {
        background-image: url('/images/projects/solutions/lms_hover/desktop.m.png');
        background-size: 544px 226px;
      }

      &_time-tracker {
        background-image: url('/images/projects/solutions/time-tracker_hover/desktop.m.png');
        background-size: 432px 226px;
      }
    }
  }

  ${desktop.s} {
    .image-wrapper {
      &_lms {
        background-image: url('/images/projects/solutions/lms_hover/desktop.s.png');
        background-size: 504px 226px;
      }

      &_time-tracker {
        background-image: url('/images/projects/solutions/time-tracker_hover/desktop.s.png');
        background-size: 400px 226px;
      }
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(112)};
    }

    .heading {
      grid-column: 1 / span 7;
    }

    .solution {
      margin-top: ${calcRem(32)};

      &:hover .image {
        opacity: 1;
      }

      &_lms {
        grid-column: 1 / span 6;
      }

      &_time-tracker {
        grid-column: 8 / span 5;
      }
    }

    .solution-heading {
      margin-top: ${calcRem(24)};
    }

    .text {
      margin-top: ${calcRem(16)};
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(102)};
    }

    .heading {
      grid-column: 1 / span 6;
    }

    .solution {
      margin-top: ${calcRem(32)};

      &:hover .image {
        opacity: 1;
      }

      &_lms {
        grid-column: 1 / span 6;
      }

      &_time-tracker {
        margin-top: ${calcRem(40)};
        grid-column: 1 / span 6;
      }
    }

    .solution-heading {
      margin-top: ${calcRem(24)};
    }

    .text {
      margin-top: ${calcRem(16)};
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }  
  }
`
const StyledSolutions = props => {
  const breakpoints = props.theme.breakpoints
  const { colors } = props.theme

  return css`
    ${base({ breakpoints, colors })}
  `
}
export default StyledSolutions
