import { css } from '@emotion/react'
import calcRem from '../../../utils/style/calcRem'

const base = ({ colors }) => css`
  & {
    position: relative;
    padding-bottom: 0;
  }

  &.error textarea {
    color: #d0021b;
    border-bottom-color: #d0021b;
  }

  textarea {
    appearance: none;
    margin-top: 0;
    padding-left: ${calcRem(9)};
    padding-right: ${calcRem(9)};
    padding-bottom: ${calcRem(5)};
    display: block;
    width: 100%;
    border: none;
    border-bottom: ${calcRem(1)} solid #d4d4d4;
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    color: ${colors.secondary.darken100};
    resize: none;
  }

  textarea::placeholder {
    color: ${colors.secondary.gray};
  }

  textarea:focus {
    border-bottom-color: ${colors.primary.origin};
  }

  textarea.textarea_filled {
    border-bottom-color: ${colors.secondary.darken100};
  }

  span.error {
    margin-top: 0.625rem;
    display: block;
    font-weight: 400;
    color: #ff0000;
  }
`

const StyledTextareaField = props => {
const colors = props.theme.colors

return css`
    ${base({ colors })}
`
}

export default StyledTextareaField
