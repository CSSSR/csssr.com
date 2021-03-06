import { css } from '@emotion/react'
import calcRem from '../../../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile, desktop, above }, colors }) => css`
  & {
    display: flex;
    height: ${calcRem(40)};
    background-color: #ffffff;
    z-index: 2;
  }

  .item {
    font-family: Roboto, sans-serif;
    font-weight: 900;
    text-align: center;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 24px;
    background-color: transparent;
    cursor: pointer;
    color: #18191b;
    border: none;
    flex-grow: 1;
    width: ${100/3}%;

    &:hover {
      color:  #0254D8;
    }

    &._active {
      background-color: ${colors.primary.origin};
      border-color: ${colors.primary.origin};
      color: #ffffff;
    }
  }

  ${desktop.all} {
    & {
      width: 444px;
    }

    .item {
      padding-top: 8px;
      padding-bottom: 8px;
      padding-right: 30px;
      padding-left: 30px;
    }
  }

  ${desktop.s} {
    & {
      left: 42px;
      right: 42px;
    }
  }

  ${desktop.m} {
    & {
      left: 58px;
      right: 58px;
    }
  }

  ${desktop.l} {
    & {
      left: 20.625%;
      transform: translateX(-50%);
    }
  }

  ${tablet.all} {
    & {
      left: ${calcRem(16)};
      right: ${calcRem(16)};
      width: ${calcRem(392)};
    }

    .item {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
      padding-top: ${calcRem(8)};
      padding-bottom: ${calcRem(8)};
    }
  }

  ${above.mobile} {
    position: fixed;
    top: ${calcRem(96)};
  }

  ${mobile.all} {
    & {
      position: absolute;
      top: ${calcRem(48)};
      left: ${calcRem(16)};
      right: ${calcRem(16)};
    }

    .item {
      font-size: ${calcRem(12)};
      line-height: ${calcRem(24)};
      padding-top: ${calcRem(8)};
      padding-bottom: ${calcRem(8)};
    }
  }
`

const StyledTabs = props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default StyledTabs
