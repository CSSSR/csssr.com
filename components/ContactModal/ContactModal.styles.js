import { css } from '@emotion/react'
import calcRem from '../../utils/style/calcRem'

const base = ({  breakpoints: { mobile }, colors }) => css`
  & {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow-y: scroll;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .modal-wrapper {
    position: relative;
    width: ${calcRem(416)};
    height: 100vh;
    max-height: ${calcRem(846)};
    padding: ${calcRem(64)} ${calcRem(40)} ${calcRem(40)} ${calcRem(40)};
    border: 1px solid ${colors.secondary.gray};
    background-color: #ffffff;
    overflow-y: auto;
  }

  button[aria-label="close modal"] {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    background-image: url(${require('../../static/icons/cross_gray.svg').default});
    background-repeat: no-repeat;
    background-color: transparent;
    background-position: 50%;
    border: none;
    cursor: pointer;
  }

  ${mobile.all} {
    & {
      align-items: flex-end;
    }

    .modal-wrapper {
      padding: ${calcRem(32)} ${calcRem(16)} ${calcRem(16)} ${calcRem(16)};
      width: 100%;
      max-height: ${calcRem(736)};
    }

    button[aria-label="close modal"] {
      top: ${calcRem(38)};
      right: ${calcRem(18)};
    }
  }
`

const dynamic = ({ hasFailOrSuccessStatus, breakpoints: { mobile } }) => css`
  ${mobile.all} {
    .modal-wrapper {
      overflow-y: ${hasFailOrSuccessStatus ? 'unset' : 'auto'};
    }
  }
`

const StyledContactModal = props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors
  const hasFailOrSuccessStatus = props.hasFailOrSuccessStatus

  return css`
    ${base({ breakpoints, colors })}
    ${dynamic({ hasFailOrSuccessStatus, breakpoints })}
  `
}

export default StyledContactModal
