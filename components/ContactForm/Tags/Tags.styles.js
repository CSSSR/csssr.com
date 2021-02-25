import { css } from '@emotion/react'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }, colors }) => css`
  & {
    grid-column: 2 / span 3;
    width: 100%;
    margin-top: ${calcRem(32)};
  }

  .tag-wrapper {
    position: relative;
    margin-top: ${calcRem(32)};
  }

  .tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: ${calcRem(12)} ${calcRem(16)};
  }

  .reset-button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-color: #ffffff;
    border: none;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    font-weight: 300;
    color: ${colors.primary.origin};
    cursor: pointer;
  }

  ${mobile.all} {
    .tag-list {
      gap: ${calcRem(12)} ${calcRem(9)};
    }
  }
`

const Tags = props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default Tags
