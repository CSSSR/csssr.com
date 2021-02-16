import { css } from '@emotion/react'
import calcRem from '../../utils/style/calcRem'
import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'

const sageImages = require.context('../../public/images/idea/sage?csssr-images')

const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  .heading-wrapper {
    grid-column: 1 / span 12;
    width: ${calcRem(522)};
    margin: 0 auto;
    text-align: center;
  }

  .heading-text {
    position: relative;
    display: inline-block;
  }

  ${desktop.all} {
    & {
      margin-top: 179px;
      margin-bottom: 150px;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(141)};
      margin-bottom: ${calcRem(120)};
    }

    .heading {
      grid-column: 1 / span 5;
    }
  }

  ${mobile.all} {
    & {
      position: relative;
      height: ${calcRem(32)};
      margin-top: ${calcRem(72)};
      margin-bottom: ${calcRem(136)};

      &.gazpromNeft {
        margin-top: ${calcRem(72)};
      }
    }

    .heading-wrapper {
      position: absolute;
      grid-column: 1 / span 6;
      width: 100vw;
      height: ${calcRem(159)};
      margin: 0;
      margin-left: calc(((100vw - ${calcRem(328)}) / 2) * -1);
      text-align: center;
      overflow-x: hidden;

      &::after {
        position: absolute;
        content: '';
        z-index: -1;
        top: ${calcRem(0)};
        right: 0;
        width: ${calcRem(153)};
        height: ${calcRem(159)};
        background-size: contain;
        background-repeat: no-repeat;
        transform: translateX(${calcRem(153)}) rotate(30deg);
        transition: transform, 1s 0.2s ease-out;
      }

      main.bubble_static.bubble_animation & {
        &::after {
          transform: translateX(${calcRem(40)}) rotate(0);
        }
      }
    }

    .heading {
      grid-row: 1;
      grid-column: 1 / span 6;
      margin-top: 0;
    }
  }
`

export const backgroundImagesStyles = css`
  & {
    ${backgroundCssSmart('.heading-wrapper::after', sageImages)}
  }
`

const StyledIdea = props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
    ${backgroundImagesStyles}
  `
}
export default StyledIdea
