import { css, keyframes } from '@emotion/react'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    position: fixed;
    z-index: 2;
    bottom: ${calcRem(40)};
    right: 0;

    &.design {
      .button-wrapper {
        &::before {
          background-image: url(${require('../../static/icons/projects/triangle_red.svg').default});
        }
      }

      .bubble-button {
        background-color: #F9555A;

        &:hover {
          background-color: #C74044;
        }
      }
    }

    main.bubble_biggerBottomPosition & {
      bottom: ${calcRem(104)};
    }

    main.bubble_static & {
      position: absolute;
      bottom: ${calcRem(505)};
    }

    main.bubble_static.bubble_biggerBottomPosition & {
      bottom: ${calcRem(569)};
    }

    main.bubble_static.bubble_animation & {
      bottom: ${calcRem(592)};
    }
  }

  .button-wrapper {
    width: 100%;
    position: relative;
    right: ${calcRem(30)};
    transform: translateX(0);
    transition: transform, 1s cubic-bezier(0.25, 0.1, 0.25, 1);

    &::before {
      position: absolute;
      content: '';
      z-index: -1;
      top: ${calcRem(15)};
      left: ${calcRem(8)};
      width: ${calcRem(44)};
      height: ${calcRem(46)};
      background-image: url(${require('../../static/icons/projects/triangle_blue.svg').default});
      background-size: contain;
      background-repeat: no-repeat;
      transform: translate(0);
      transition: transform, 1s cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    main.bubble_static.bubble_animation & {
      transform: translate(calc(((100vw - ${calcRem(1792)}) / 2 + ${calcRem(660)} - 100%) * -1), ${calcRem(52)});
      transition: transform, 1s cubic-bezier(0.25, 0.1, 0.25, 1);

      &::before {
        transform: translateX(${calcRem(-44)});
        transition: transform, 1s cubic-bezier(0.25, 0.1, 0.25, 1);
      }
    }
  }

  .bubble-button {
    padding-top: ${calcRem(17)};
    padding-bottom: ${calcRem(15)};
    padding-left: ${calcRem(24)};
    padding-right: ${calcRem(24)};
    height: ${calcRem(48)};
    border-radius: ${calcRem(10)};
    font-size: ${calcRem(14)};
    line-height: ${calcRem(16)};
    background-color: #0076FF;
  }

  ${desktop.m} {
    & {
      main.bubble_static & {
        bottom: ${calcRem(523)};
      }
    }
  }

  ${desktop.s} {
    & {
      main.bubble_static & {
        bottom: ${calcRem(501)};
      }
    }
  }

  ${tablet.all} {
    & {
      main.bubble_static & {
        bottom: ${calcRem(552)};
      }
    }

    &.design {
      .button-wrapper {
        main.bubble_static.bubble_animation & {
          transform: translate(calc(((100vw - ${calcRem(944)}) / 2 + ${calcRem(150)} - 100%) * -1), ${calcRem(58)});
        }
      }
    }

    .button-wrapper {
      main.bubble_static.bubble_animation & {
        transform: translate(calc(((100vw - ${calcRem(944)}) / 2 + ${calcRem(315)} - 100%) * -1), ${calcRem(118)});
        transition: transform, 1s cubic-bezier(0.25, 0.1, 0.25, 1);
      }
    }
  }

  ${mobile.all} {
    & {
      bottom: ${calcRem(30)};

      main.bubble_biggerBottomPosition & {
        bottom: ${calcRem(182)};
      }

      main.bubble_static & {
        bottom: ${calcRem(1500)};
      }

      main.bubble_static.bubble_biggerBottomPosition & {
        bottom: ${calcRem(1652)};
      }

      main.bubble_static.bubble_animation & {
        bottom: ${calcRem(1250)};
      }
    }

    .button-wrapper {
      right: ${calcRem(20)};
      transition: none;

      &::before {
        top: ${calcRem(-12)};
        left: auto;
        right: ${calcRem(8)};
        transform: translate(0) scale(-1, -1);
        transition: transform, 1s cubic-bezier(0.25, 0.1, 0.25, 1);
      }

      main.bubble_initial.bubble_animation & {
        transform: translate(calc(((100vw - ${calcRem(328)}) / 2 + ${calcRem(164)} - 100%) * -1), ${calcRem(20)});
        animation: ${moveOut} 1s cubic-bezier(0.35, 0.1, 0.35, 1) forwards;
      }

      main.bubble_static.bubble_animation & {
        transform: none;
        transition: none;
        animation: ${moveIn} 1s cubic-bezier(0.35, 0.1, 0.35, 1) forwards;

        &::before {
          transform: translateX(${calcRem(44)}) scale(-1, -1);
          transition: transform, 1s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
      }
    }

    .bubble-button {
      height: ${calcRem(46)};
      padding-top: ${calcRem(15)};
    }
  }
`

const moveIn = keyframes`
  0 {
    transform: translate(0);
  }

  100% {
    transform: translate(calc(((100vw - ${calcRem(328)}) / 2 + ${calcRem(164)} - 100%) * -1), ${calcRem(-50)});
  }
`

const moveOut = keyframes`
  100% {
    transform: translate(0);
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
