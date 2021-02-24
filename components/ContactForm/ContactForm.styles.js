import { css } from '@emotion/react'
import AnimatedButton from '../ui-kit/core-design/AnimatedButton'
import Text from '../ui-kit/core-design/Text'

const base = () => css`
  position: relative;
  padding-top: 16rem;
  padding-bottom: 10rem;
  width: 1792px;
  align-items: center;
  border: none;

  @media (min-width: 768px) and (max-width: 1279px) {
    background-position: 50% calc(100% - 8.45rem);
  }

  @media screen and (max-width: 360px) {
    padding-top: 160px;
  }

  h2 {
    margin-top: -6rem;
    margin-bottom: 5.5rem;
    padding-top: 6rem;
    grid-column: 4 / span 6;
    text-align: center;

    @media (min-width: 1360px) and (max-width: 1919px) {
      margin-bottom: 6rem;
    }

    @media (min-width: 1280px) and (max-width: 1359px) {
      margin-bottom: 6rem;
    }

    @media (min-width: 768px) and (max-width: 1279px) {
      margin-bottom: 2.375rem;
    }

    @media (max-width: 767px) {
      margin-bottom: 2.5625rem;
      grid-column: 1 / span 6;
    }
  }

  .button {
    margin-top: 2.5625rem;
    grid-column: 6 / span 2;

    @media (min-width: 768px) and (max-width: 1279px) {
      grid-column: 5 / span 4;
    }

    @media (max-width: 767px) {
      margin-top: 3.4375rem;
      grid-column: 2 / span 4;
    }
  }

  .message {
    grid-column: 4 / span 6;

    @media (max-width: 767px) {
      grid-column: 1 / span 6;
    }
  }

  .field {
    grid-column: 4 / span 6;
    margin-bottom: 2.0625rem;

    @media (min-width: 768px) and (max-width: 1279px) {
      grid-column: 4 / span 6;
      margin-bottom: 2.0625rem;
    }

    @media (max-width: 767px) {
      grid-column: 1 / span 6;
    }
  }

  .field_type_textarea {
    position: relative;
    margin-top: 1.5rem;
    margin-bottom: 3.5rem;

    @media (min-width: 768px) and (max-width: 1279px) {
      margin-bottom: 3.625rem;
    }

    @media (max-width: 767px) {
      margin-top: 1.4375rem;
      margin-bottom: 1.6875rem;
    }
  }

  .field_type_checkbox {
    margin-bottom: 1.5rem;

    @media (min-width: 768px) and (max-width: 1279px) {
      margin-bottom: 1.5rem;
    }

    @media (max-width: 767px) {
      margin-bottom: 1.1875rem;
    }
  }

  .field_type_checkbox + .field_type_checkbox {
    @media (min-width: 1360px) and (max-width: 1919px) {
      margin-bottom: 2.5rem;
    }
  }

  .field_type_no-margin {
    margin: 0;
  }

  .privacyPolicy {
    grid-column: 4 / span 6;
    color: #18191b;

    & > a:hover::after {
        display: none;
      }

    @media (min-width: 768px) and (max-width: 1279px) {
      grid-column: 4 / span 6;
      font-size: inherit;
      line-height: inherit;

      & > a {
        font-size: inherit;
        line-height: inherit;
      }
    }

    @media (max-width: 767px) {
      grid-column: 1 / span 6;
    }
  }
`
const ie11Styles = () => css`
  -ms-grid-rows: (auto)[9];

  h2 {
    -ms-grid-column: 7;
    -ms-grid-column-span: 11;
    -ms-grid-row: 1;

    @media (max-width: 767px) {
      -ms-grid-column: 1;
      -ms-grid-column-span: 11;
    }
  }

  .button {
    -ms-grid-column: 11;
    -ms-grid-column-span: 3;
    -ms-grid-row: 8;

    @media (min-width: 768px) and (max-width: 1279px) {
      -ms-grid-column: 9;
      -ms-grid-column-span: 7;
    }

    @media (max-width: 767px) {
      -ms-grid-column: 3;
      -ms-grid-column-span: 9;
    }
  }

  .message {
    -ms-grid-column: 7;
    -ms-grid-column-span: 11;
    -ms-grid-row: 9;

    @media (max-width: 767px) {
      -ms-grid-column: 1;
      -ms-grid-column-span: 11;
    }
  }

  .field {
    -ms-grid-column: 7;
    -ms-grid-column-span: 11;

    @media (min-width: 768px) and (max-width: 1279px) {
      -ms-grid-column: 7;
      -ms-grid-column-span: 11;
    }

    @media (max-width: 767px) {
      -ms-grid-column: 1;
      -ms-grid-column-span: 11;
    }
  }

  .field:nth-of-type(1) {
    -ms-grid-row: 2;
  }

  .field:nth-of-type(2) {
    -ms-grid-row: 3;
  }

  .field:nth-of-type(3) {
    -ms-grid-row: 4;
  }

  .field:nth-of-type(4) {
    -ms-grid-row: 5;
  }

  .field:nth-of-type(5) {
    -ms-grid-row: 6;
  }

  .field:nth-of-type(6) {
    -ms-grid-row: 7;
  }

  ${AnimatedButton} ${Text} {
    color: white;
  }
`

const StyledContactForm = () => css`
  ${base()}
  ${ie11Styles()}
`

export default StyledContactForm
