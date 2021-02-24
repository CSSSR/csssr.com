import { css } from '@emotion/react'
import calcRem from '../../../utils/style/calcRem'

const base = ({ colors }) => css`
  & {
    position: relative;
  }

  & + & {
    margin-top: ${calcRem(40)};
  }

  .input {
    width: 100%;
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    color: ${colors.secondary.darken100};
    border: none;
    border-radius: 0;
    border-bottom: ${calcRem(1)} solid #d4d4d4;
    background-color: transparent;
    padding-bottom: ${calcRem(4)};
    padding-left: ${calcRem(9)};
    padding-right: ${calcRem(9)};
  }

  .input::placeholder {
    color: ${colors.secondary.gray};
  }

  .input:focus {
    border-bottom-color: ${colors.primary.origin};
  }

  .input._filled {
    border-bottom-color: ${colors.secondary.darken100};
  }

  .input._error {
    border-bottom-color: #d0021b;
  }

  .input._error + .label,
  .input._error:focus + .label {
    color: #d0021b;
  }

  .label {
    display: none;
    font-family: Roboto, sans-serif;
    pointer-events: none;
    font-weight: 300;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    position: absolute;
    top: 0;
    left: ${calcRem(8)};
    color: ${colors.secondary.gray};

    > span {
      opacity: 0.4
    }
  }

  .label._active {
    display: block;
    transform: translateY(${calcRem(28)});
    color: ${colors.secondary.gray};
    font-weight: 300;
    font-size: ${calcRem(12)};
    text-transform: lowercase;
  }
`

const StyledTestFieldNew = props => {
  const { colors } = props.theme

  return css`
    ${base({colors})}
  `
}

export default StyledTestFieldNew
