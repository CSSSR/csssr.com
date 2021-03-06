import { css } from '@emotion/react'

export default css`
  & {
    position: relative;
    padding-bottom: 0;
  }

  &.error textarea {
    color: #d0021b;
    border-color: #d0021b;
  }

  textarea {
    appearance: none;
    margin-top: 0;
    padding-top: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1.5rem;
    display: block;
    width: 100%;
    min-height: 10rem;
    border: none;
    border: solid 0.0625rem #e1e1e1;
    border-radius: 0;
    caret-color: #4a4a4a;
    resize: vertical;
  }

  textarea::placeholder {
    font-weight: 100;
    color: #9b9b9b;
  }

  textarea:focus {
    border-color: #0076ff;
  }

  & textarea:focus + label {
    color: #0076ff;
  }

  label {
    position: absolute;
    top: 1px;
    left: 1px;
    right: 17px;
    margin: auto;
    padding-top: 1.4375rem;
    padding-left: 1rem;
    line-height: 1rem;
    font-size: 0.875rem;
    font-weight: normal;
    background-color: #fff;
    color: #9b9b9b;
    pointer-events: none;
    user-select: none;
  }

  span.error {
    margin-top: 0.625rem;
    display: block;
    font-weight: 400;
    color: #ff0000;
  }

  &.textarea_filled label,
  & textarea:focus + label {
    padding-top: 0.375rem;
    font-size: 0.625rem;
  }
`
