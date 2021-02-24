import { css } from '@emotion/react'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ colors }) => css`
  & {
    position: absolute;
    top: ${calcRem(-4)};
    left: ${calcRem(56)};
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: ${calcRem(14)};
    line-height: ${calcRem(24)};
    font-weight: 300;
    color: ${colors.secondary.darken100};
    letter-spacing: normal;
    text-transform: none;
  }

  .tryAgainButton {
    border: none;
    background-color: #ffffff;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: ${calcRem(14)};
    line-height: ${calcRem(24)};
    font-weight: 300;
    color: ${colors.primary.origin};
    text-decoration: underline;
  }

  .emailLink {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: ${calcRem(14)};
    line-height: ${calcRem(24)};
    font-weight: 300;
    color: ${colors.primary.origin};
    text-decoration: underline;
  }
`

const ie11Styles = css`
  .cell {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
  }
`

const StyledFormStateMessage = (props) => {
  const colors = props.theme.colors
  const isIe11 = props.isIe11

  return css`
    ${base({ colors })}
    ${isIe11 && ie11Styles}
  `
}

export default StyledFormStateMessage
