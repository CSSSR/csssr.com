import { css, keyframes } from '@emotion/react'
import calcRem from '../../utils/style/calcRem'

/*Формула вычисления положения кнопки на странице для разных разрешений: 
- Отступ справа налево = (Общая ширина экрана минус ширина компонента, поделённая пополам - это динамические отступы по краям) плюс (ширина текстового блока компонента Have and Idea минус ширина всего компонента) умноженная на минус 1 для противоположного отступа. 
- Отступ сверху вниз = высота смещения анимации по макету.
*/
const bubblePositionDesktop = `calc(((100vw - ${calcRem(1792)}) / 2 + ${calcRem(650)} - 100%) * -1), ${calcRem(142)}`
const bubblePositionTablet = `calc(((100vw - ${calcRem(944)}) / 2 + ${calcRem(305)} - 100%) * -1), ${calcRem(100)}`
const bubblePositionTabletDesign = `calc(((100vw - ${calcRem(944)}) / 2 + ${calcRem(140)} - 100%) * -1), ${calcRem(48)}`
const bubblePositionMobileIn = `calc(((100vw - ${calcRem(328)}) / 2 + ${calcRem(170)} - 100%) * -1), ${calcRem(-50)}`
const bubblePositionMobileInRu = `calc(((100vw - ${calcRem(328)}) / 2 + ${calcRem(210)} - 100%) * -1), ${calcRem(-50)}`
const bubblePositionMobileOut = `calc(((100vw - ${calcRem(328)}) / 2 + ${calcRem(170)} - 100%) * -1), 0`
const bubblePositionMobileOutRu = `calc(((100vw - ${calcRem(328)}) / 2 + ${calcRem(210)} - 100%) * -1), 0`

const footerHeight = `${calcRem(344)}`
const footerHeightMobile = `${calcRem(1262)}`
const footerHeightMobileRu = `${calcRem(1376)}`
const bubbleBottomPadding = `${calcRem(30)}`
const bubbleBottomPaddingMobile = `${calcRem(20)}`
const cookiesPopupHeight = `var(--cookiesPopupHeight)`

const base = ({ breakpoints: { tablet, mobile }, colors, langRu }) => css`
  & {
    position: sticky;
    z-index: 2;
    bottom: ${bubbleBottomPadding};
    height: ${calcRem(48)};

    main.bubble_biggerBottomPosition & {
      bottom: calc(${bubbleBottomPadding} + ${cookiesPopupHeight});
    }

    main.bubble_static.bubble_animation & {
      position: absolute;
      right: 0;
      bottom: calc(${footerHeight} + ${bubbleBottomPadding} + 300px);
    }

    &.design {
      .button-wrapper {
        &::before {
          background-image: url(${require('../../static/icons/projects/triangle_red.svg').default});
        }
      }

      .bubble-button {
        background-color: #F45B53;

        &:hover {
          background-color: #C74044;
        }
      }
    }
  }

  .button-wrapper {
    position: absolute;
    right: ${calcRem(40)};
    display: inline-block;
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
    height: 100%;
    padding-top: ${calcRem(17)};
    padding-bottom: ${calcRem(15)};
    padding-left: ${calcRem(24)};
    padding-right: ${calcRem(24)};
    border-radius: ${calcRem(10)};
    background-color: ${colors.primary.origin};
    font-size: ${calcRem(14)};
    line-height: ${calcRem(16)};
    white-space: nowrap;
  }

  ${tablet.all} {
    & {
      main.bubble_static.bubble_animation & {
        bottom: calc(${footerHeight} + ${bubbleBottomPadding} + ${calcRem(200)});
      }

      &.design {
        .button-wrapper {
          main.bubble_static.bubble_animation & {
            transform: translate(${bubblePositionTabletDesign});
          }
        }
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
      bottom: ${bubbleBottomPaddingMobile};
      height: ${calcRem(46)};

      main.bubble_biggerBottomPosition & {
        bottom: calc(${bubbleBottomPaddingMobile} + ${cookiesPopupHeight});
      }

      main.bubble_static.bubble_animation & {
        bottom: calc(${langRu ? footerHeightMobileRu : footerHeightMobile} + ${bubbleBottomPaddingMobile});
      }
    }

    .button-wrapper {
      right: ${calcRem(30)};
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
        animation: ${langRu ? moveInRu : moveIn} 1s cubic-bezier(0.35, 0.1, 0.35, 1) forwards;

        &::before {
          transform: translateX(${calcRem(44)}) scale(-1, -1);
        }
      }

      main.bubble_initial.bubble_animation & {
        transform: translate(${langRu ? bubblePositionMobileOutRu : bubblePositionMobileOut});
        animation: ${moveOut} 1s cubic-bezier(0.35, 0.1, 0.35, 1) forwards;
      }
    }

    .bubble-button {
      padding-top: ${calcRem(15)};
    }
  }
`

const moveIn = keyframes`
  to {
    transform: translate(${bubblePositionMobileIn});
  }
`

const moveInRu = keyframes`
  to {
    transform: translate(${bubblePositionMobileInRu});
  }
`

const moveOut = keyframes`
  to {
    transform: translate(0);
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors
  const langRu = props.l10n.language === 'ru'

  return css`
    ${base({ breakpoints, colors, langRu })}
  `
}
