import { css } from '@emotion/react'

const base = ({ colors }) => css`
  & {
    grid-column: 2 / span 3;
    width: 100%;
    margin-top: 32px;

    outline: 1px dashed red !important;
  }

  .tag-wrapper {
    position: relative;
    margin-top: 32px;
  }

  .tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 16px;
  }

  .reset-button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-color: #ffffff;
    border: none;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
    color: ${colors.primary.origin};
    cursor: pointer;
  }
`

const Tags = props => {
  const colors = props.theme.colors

  return css`
    ${base({ colors })}
  `
}

export default Tags
