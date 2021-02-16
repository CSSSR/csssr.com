import { css, keyframes } from '@emotion/react'
import calcRem from '../../utils/style/calcRem'

/*Формула вычисления положения кнопки на странице для разных разрешений: 
- Отступ справа налево = (Общая ширина экрана минус ширина компонента, поделённая пополам - это динамические отступы по краям) плюс (ширина текстового блока компонента Have and Idea минус ширина всего компонента) умноженная на минус 1 для противоположного отступа. 
- Отступ сверху вниз = высота смещения анимации по макету.
*/
const bubblePositionDesktop = `calc(((100vw - 1792px) / 2 + 660px - 100%) * -1), 152px`
const bubblePositionTablet = `calc(((100vw - ${calcRem(944)}) / 2 + ${calcRem(315)} - 100%) * -1), ${calcRem(110)}`
const bubblePositionTablet_design = `calc(((100vw - ${calcRem(944)}) / 2 + ${calcRem(150)} - 100%) * -1), ${calcRem(58)}`
const bubblePositionMobile_in = `calc(((100vw - ${calcRem(328)}) / 2 + ${calcRem(164)} - 100%) * -1), ${calcRem(-10)}`
const bubblePositionMobile_out = `calc(((100vw - ${calcRem(328)}) / 2 + ${calcRem(164)} - 100%) * -1), 0`

const footerHeight = '344px'
const footerHeight_mobile = '1262px'
const bubbleBottomPadding = '40px'
const bubbleBottomPadding_mobile = '30px'
const cookiesPopupHeight = '64px'
const cookiesPopupHeight_mobile = '152px'

const base = ({ breakpoints: { tablet, mobile } }) => css`
  & {
    position: fixed;
    z-index: 2;
    bottom: ${bubbleBottomPadding};
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

    main.bubble_static & {
      position: absolute;
      bottom: calc(${footerHeight} + ${bubbleBottomPadding});
    }

    main.bubble_biggerBottomPosition & {
      bottom: calc(${bubbleBottomPadding} + ${cookiesPopupHeight});
    }

    main.bubble_static.bubble_biggerBottomPosition & {
      bottom: calc(${footerHeight} + ${bubbleBottomPadding} + ${cookiesPopupHeight});
    }

    main.bubble_static.bubble_animation & {
      bottom: calc(${footerHeight} + ${bubbleBottomPadding} + 300px);
    }
  }

  .button-wrapper {
    width: 100%;
    position: relative;
    right: ${calcRem(30)};
    transform: translate(0);
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
      transform: translateX(0);
      transition: transform, 1s cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    main.bubble_static.bubble_animation & {
      transform: translate(${bubblePositionDesktop});

      &::before {
        transform: translateX(${calcRem(-44)});
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

  ${tablet.all} {
    & {
      &.design {
        .button-wrapper {
          main.bubble_static.bubble_animation & {
            transform: translate(${bubblePositionTablet_design});
          }
        }
      }

      main.bubble_static.bubble_animation & {
        bottom: calc(${footerHeight} + ${bubbleBottomPadding} + 200px);
      }
    }

    .button-wrapper {
      main.bubble_static.bubble_animation & {
        transform: translate(${bubblePositionTablet});
      }
    }
  }

  ${mobile.all} {
    & {
      bottom: ${bubbleBottomPadding_mobile};

      main.bubble_static & {
        bottom: calc(${footerHeight_mobile} + ${bubbleBottomPadding_mobile});
      }

      main.bubble_biggerBottomPosition & {
        bottom: calc(${bubbleBottomPadding_mobile} + ${cookiesPopupHeight_mobile});
      }

      main.bubble_static.bubble_biggerBottomPosition & {
        bottom: calc(${footerHeight_mobile} + ${bubbleBottomPadding_mobile} + ${cookiesPopupHeight_mobile} - 100px);
      }

      main.bubble_static.bubble_animation & {
        bottom: calc(${footerHeight_mobile} + ${bubbleBottomPadding_mobile});
      }
    }

    .button-wrapper {
      right: ${calcRem(20)};
      transform: none;
      transition: none;

      &::before {
        top: ${calcRem(-12)};
        left: auto;
        right: ${calcRem(8)};
        transform: translate(0) scale(-1, -1);
        transition: transform, 1s cubic-bezier(0.35, 0.1, 0.35, 1);
      }

      main.bubble_static.bubble_animation & {
        transform: translate(0);
        animation: ${moveIn} 1s cubic-bezier(0.35, 0.1, 0.35, 1) forwards;

        &::before {
          transform: translateX(${calcRem(44)}) scale(-1, -1);
        }
      }

      main.bubble_initial.bubble_animation & {
        transform: translate(${bubblePositionMobile_out});
        animation: ${moveOut} 1s cubic-bezier(0.35, 0.1, 0.35, 1) forwards;
      }
    }

    .bubble-button {
      height: ${calcRem(46)};
      padding-top: ${calcRem(15)};
    }
  }
`

const moveIn = keyframes`
  to {
    transform: translate(${bubblePositionMobile_in});
  }
`

const moveOut = keyframes`
  to {
    transform: translate(0);
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
