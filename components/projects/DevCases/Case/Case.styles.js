import { css } from '@emotion/react'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile }, colors }) => css`
  & {
    &.large.left {
      grid-column: 2 / span 6;
    }

    &.large.right {
      grid-column: 6 / span 6;
    }

    &.small.left {
      grid-column: 2 / span 4;
    }

    &.small.right {
      grid-column: 8 / span 4;
    }

    &:nth-of-type(n + 3) {
      margin-top: ${calcRem(104)};
    }
  }

  .link {
    text-decoration: none;

    @media (hover: hover) and (pointer: fine) {
      &:hover .heading {
        color: ${colors.primary.origin};
      }

      &:hover .image-wrapper::before {
        top: 0;
      }
    }
  }

  .image-wrapper {
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      background-color: #0054D7;
      transition: top .25s ease-in-out;
      top: 100%;
      mix-blend-mode: color;
    }
  }

  .heading {
    margin-top: ${calcRem(32)};
  }

  .text {
    grid-column: 2 / span 4;
    margin-top: ${calcRem(16)};
  }

  .data-wrapper {
    display: flex;
    align-items: center;
    margin-top: ${calcRem(12)};
  }

  .tag {
    font-weight: 500;
    color: ${colors.primary.origin};
    text-decoration: none;
  }

  .team,
  .duration,
  .separatopr {
    font-weight: 500;
  }

  .separator {
    margin: 0 ${calcRem(16)};
    color: ${colors.secondary.darken100};
  }

  ${tablet.all} {
    & {
      &.large.left {
        grid-column: 1 / span 7;
      }

      &.large.right {
        grid-column: 6 / span 7;
      }

      &.small.left {
        grid-column: 1 / span 5;
      }

      &.small.right {
        grid-column: 8 / span 5;
      }

      &:nth-of-type(n + 3) {
        margin-top: ${calcRem(72)};
      }
    }

    .heading {
      margin-top: ${calcRem(16)};

      &.small {
        max-width: ${calcRem(379)};
      }
    }

    .text {
      margin-top: ${calcRem(8)};
    }

    .data-wrapper {
      margin-top: ${calcRem(8)};
    }

    .text,
    .tag,
    .team,
    .duration {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }
  }

  ${mobile.all} {
    & {
      grid-column: 1 / span 6 !important;

      &:not(:nth-of-type(1)) {
        margin-top: ${calcRem(64)};
      }

      &.mindbox .separator:nth-of-type(2) {
        display: none;
      }

      &.mindbox .duration {
        width: ${calcRem(100)};
      }
    }

    .heading {
      margin-top: ${calcRem(16)};
    }

    .text,
    .tag,
    .team,
    .duration,
    .separator {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }

    .text {
      margin-top: ${calcRem(12)};
    }

    .data-wrapper {
      flex-wrap: wrap;
      margin-top: ${calcRem(8)};
    }

    .mindbox .separator:nth-of-type(2) {
      display: none;
    }

    .separator {
      margin: 0 ${calcRem(14)};
    }
  }
`
const StyledCase = props => {
  const breakpoints = props.theme.breakpoints
  const { colors } = props.theme

  return css`
    ${base({ breakpoints, colors })}
  `
}
export default StyledCase
