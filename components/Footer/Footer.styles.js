import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }, colors }) => css`
  & {
    position: relative;
    margin-bottom: ${calcRem(344)};
    padding: ${calcRem(32)};
    display: flex;
    height: ${calcRem(344)};
    background-color: white;
    box-shadow: 0px 8px 12px rgba(50, 60, 72, 0.15);
    overflow: hidden;
  }

  .logo {
    position: relative;
    z-index: 2;
    height: ${calcRem(24)};
    display: block;
    color: ${colors.secondary.darken100};
    transition: color 100ms ease-out;
  }

  .video {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 1;
    width: 100%;
    opacity: 0;
    transform: translateY(-50%);
    transition: opacity 100ms ease-out;
  }

  @media (pointer: fine) {
    .logo:hover {
      color: white;
    }

    .logo:hover ~ .video {
      opacity: 1;
    }
  }

  .action-phrase {
    margin-top: ${calcRem(28)};
    color: ${colors.secondary.darken100};
  }

  .email {
    margin-top: ${calcRem(8)};
    display: block;
  }

  ${mobile.all} {
    & {
      padding-bottom: ${calcRem(16)};
      margin-bottom: 0;
      height: auto;
      flex-direction: column;
      align-items: center;
      box-shadow: none;
    }

    .logo {
      display: none;
    }

    .top-content-left-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .action-phrase {
      margin-top: ${calcRem(3)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
  `
}