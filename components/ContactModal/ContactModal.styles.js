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
    max-height: 100vh;
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
      display: flex;
      flex-direction: column;
      width: 100%;
      border: none;
      border-top: 1px solid ${colors.secondary.gray};
    }

    button[aria-label="close modal"] {
      top: ${calcRem(40)};
      right: ${calcRem(20)};
      width: ${calcRem(18)};
      height: ${calcRem(18)};
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
