import { css } from '@emotion/react'

const base = css`
  &:hover label::before {
    border-color: rgba(155, 155, 155, 1);
  }

  &:hover input:checked + label::before {
    border-color: #0254d8;
  }

  &:hover input:checked + label::after {
    background-color: #0254d8;
  }

  label {
    position: relative;
    padding-left: 2rem;
    display: flex;
    align-items: center;
    min-height: 1.5rem;
    user-select: none;
    cursor: pointer;
  }

  label::before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    box-sizing: border-box;
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid rgba(155, 155, 155, 0.5);
    border-radius: 50%;
    transition: border-color 0.2s ease-out, background-color 0.2s ease-out;
    content: '';
  }

  label::after {
    position: absolute;
    top: 6px;
    left: 6px;
    display: none;
    width: 0.75rem;
    height: 0.75rem;
    background-color: #fff;
    border-radius: 50%;
    content: '';
    transform: rotate(45deg);
  }

  input {
    position: absolute;
    margin: 0;
    overflow: visible;
    height: 0;
    width: 0;
    border: 0;
    clip: rect(0 0 0 0);
  }

  input:focus {
    outline: none;
  }

  input:checked + label::before {
    border-color: #0076ff;
  }

  input:checked + label::after {
    display: block;
    background-color: #0076ff;
  }
`

export default css`
  ${base}
`
