import { css } from '@emotion/core'
import getGridValueForMs from '../../utils/style/getGridValueForMs'

const base = css`
  & {
    padding-bottom: 4rem;
  }

  &.error-code_500 h2 {
    grid-column: 9 / span 4;
  }

  a {
    grid-column: 2 / span 2;
    margin-top: 5.25rem;
    width: 11.5rem;
    height: 2.875rem;
    color: black;
  }

  a.font_burger-menu {
    margin-top: 0;
    padding-bottom: 0;
    height: 3rem;
  }

  h1 {
    margin-top: 3.875rem;
    grid-column: 2 / span 7;
    grid-row: 1;
  }

  h2,
  ul {
    grid-column: 10 / span 2;
  }

  h2 {
    margin-top: -3.1875rem;
    grid-row: 2;
  }

  ul {
    margin-top: -0.125rem;
    grid-row: 4;
  }

  .code-wrapper {
    grid-column: 2 / span 6;
    grid-row: 2 / span 10;
    margin-top: 2.5rem;
    width: calc(100% + 1rem);
    height: 25rem;
  }

  .arrow-wrapper {
    grid-column: 10 / span 1;
    grid-row: 3;
    margin-top: 1.5rem;
    width: 0.625rem;
    height: 3.875rem;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    ul {
      grid-column: 10 / span 3;
    }

    .code-wrapper {
      margin-top: 3.5rem;
      width: 41.75rem;
      height: 18.625rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    ul {
      grid-column: 10 / span 3;
    }

    .code-wrapper {
      margin-top: 2.5rem;
      width: 41.75rem;
      height: 18.625rem;
    }

    .arrow-wrapper {
      grid-column: 10 / span 1;
      grid-row: 3;
      margin-top: 0;
      padding-top: 1.5rem;
      width: 0.625rem;
      height: 5.375rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    ul {
      grid-column: 10 / span 3;
    }

    h1 {
      margin-top: 5.6875rem;
    }

    h2 {
      margin-top: -2.375rem;
    }

    .code-wrapper {
      margin-top: 2.5rem;
      width: 30.5rem;
      height: 13.625rem;
    }
  }

  @media (max-width: 767px) {
    & {
      padding-bottom: 2.875rem;
    }

    &.error-code_500 h2 {
      grid-column: 1 / span 4;
    }

    &.error-code_500 .code-wrapper {
      margin-top: 0;
      margin-left: 0;
      width: 17.875rem;
      height: 8.5rem;
      width: 18.75rem;
      height: 8.9375rem;
    }

    a {
      grid-column: 1 / span 3;
      margin-top: 3.625rem;
      width: 10rem;
      height: 2.5rem;
      color: black;
    }

    h1 {
      grid-column: 1 / span 6;
      grid-row: 1;
      margin-top: 3.6875rem;
    }

    h2 {
      margin-top: 2.625rem;
      grid-column: 1 / span 2;
      grid-row: 3;
    }

    ul {
      grid-column: 1 / span 4;
      grid-row: 5;
      margin-top: 0.1875rem;
    }

    .arrow-wrapper {
      grid-column: 1;
      grid-row: 4;
      margin-top: 0;
      padding-top: 0rem;
      width: 0.625rem;
      height: 3.0625rem;
    }

    .code-wrapper {
      grid-column: 1 / span 5;
      grid-row: 2;
      margin-top: 3.5625rem;
      margin-left: 0.1875rem;
      width: 16.125rem;
      height: 7.25rem;
    }
  }
`

const ie11Styles = css`
  a {
    display: block;
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(2)};
  }

  h1 {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(7)};
    -ms-grid-row: 1;
  }

  h2,
  ul {
    -ms-grid-column: ${getGridValueForMs(10)};
    -ms-grid-column-span: ${getGridValueForMs(2)};
  }

  h2 {
    -ms-grid-row: 2;
  }

  &.error-code_500 h2 {
    -ms-grid-column: ${getGridValueForMs(9)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
  }

  ul {
    -ms-grid-row: 4;
  }

  .code-wrapper {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
    -ms-grid-row: 2;
    -ms-grid-row-span: 10;
  }

  .arrow-wrapper {
    -ms-grid-column: ${getGridValueForMs(10)};
    -ms-grid-column-span: ${getGridValueForMs(1)};
    -ms-grid-row: 3;
  }

  .picture {
    display: block;
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(7)};
    -ms-grid-row: 2;
    -ms-grid-row-span: 10;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    ul {
      -ms-grid-column: ${getGridValueForMs(10)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    ul {
      -ms-grid-column: ${getGridValueForMs(10)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }

    .arrow-wrapper {
      -ms-grid-column: ${getGridValueForMs(10)};
      -ms-grid-column-span: ${getGridValueForMs(1)};
      -ms-grid-row: 3;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    ul {
      -ms-grid-column: ${getGridValueForMs(10)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }
  }
`

const pictureStyles = css`
  .picture {
    grid-column: 2 / span 7;
    grid-row: 2 / span 10;
    margin-top: 1.5rem;
    z-index: -1;
    height: 51.5rem;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    .picture {
      height: 38.5rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    .picture {
      height: 35.5rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    .picture {
      height: 27rem;
    }
  }

  @media (max-width: 767px) {
    .picture {
      grid-column: 1 / span 6;
      grid-row: 2;
      height: 16.5rem;
    }
  }
`

export default ({ isIe11 }) => css`
  ${base}
  ${pictureStyles}
  ${isIe11 && ie11Styles}
`