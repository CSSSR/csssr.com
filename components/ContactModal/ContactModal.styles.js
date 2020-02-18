import { css } from '@emotion/core'

const base = css`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-top: 3.5px;
  padding-bottom: 3.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);

  .modal-wrapper {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: repeat(10, 120px);
    width: 93rem;
    max-height: 86vh;
    background-color: white;
    overflow-y: auto;
  }

  button[aria-label="close modal"] {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    background-image: url(${require('../../static/icons/cross.svg').default});
    background-repeat: no-repeat;
    background-color: transparent;
    background-position: 50%;
    border: none;
    cursor: pointer;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    .modal-wrapper {
      grid-template-columns: repeat(10, 96px);
      width: 69rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    .modal-wrapper {
      grid-template-columns: repeat(10, 5.5rem);
      width: 64rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    .modal-wrapper {
      grid-template-columns: repeat(8, 4rem);
      width: 39rem;
    }
  }

  @media (max-width: 767px) {
    padding-top: 0;
    padding-bottom: 0;
    height: 100%;

    .modal-wrapper {
      grid-template-columns: repeat(6, 3rem);
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 2rem;
      width: 20.5rem;
      max-height: 100vh;
      box-sizing: content-box;
      height: calc(100% - 2rem);
    }

    button[aria-label="close modal"] {
      right: 2rem;
    }
  }
`

const dynamic = ({ hasFailOrSuccessStatus }) => css`
  @media (max-width: 767px) {
    .modal-wrapper {
      overflow-y: ${hasFailOrSuccessStatus ? 'unset' : 'auto'};
    }
  }
`

export default props => css`
  ${base}
  ${dynamic(props)}
`