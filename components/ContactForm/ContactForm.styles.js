import { css } from '@emotion/react'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }, colors }) => css`
  & {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${calcRem(64)} ${calcRem(40)} ${calcRem(40)} ${calcRem(40)};
  }

  .heading {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: ${calcRem(32)};
    line-height: ${calcRem(40)};
    font-weight: 900;
    color: ${colors.secondary.darken100};
  }

  .fieldset {
    margin-top: ${calcRem(40)};
    border: none;
  }

  .field {
    margin-bottom: ${calcRem(32)};
  }

  .field_type_textarea {
    margin-bottom: ${calcRem(24)};
  }

  .field_type_checkbox {
    margin-bottom: ${calcRem(24)};
  }

  .field_type_checkbox label {
    color: white;
  }

  .field_type_no-margin {
    margin: 0;
  }
  
  .privacyPolicy {
    margin-bottom: ${calcRem(24)};
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: ${calcRem(10)};
    line-height: ${calcRem(16)};
    font-weight: 300;
    color: ${colors.secondary.gray};
  }

  .privacyPolicyLink {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: ${calcRem(10)};
    line-height: ${calcRem(16)};
    font-weight: 300;
    color: ${colors.primary.origin};
    text-decoration: unreline;
  }

  .buttonWrapper {
    height: ${calcRem(40)};
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: ${calcRem(12)};
    line-height: ${calcRem(24)};
    font-weight: 900;
    letter-spacing: ${calcRem(1.6)};
    text-transform: uppercase;

    &.shortWidth {
      position: relative;

      .submitButton {
        width: ${calcRem(40)};
        height: ${calcRem(40)};
      }

      .progress-circle,
      .checkmark,
      .cross {
        width: ${calcRem(40)};
        height: ${calcRem(40)};
      }

      button[type="submit"] {
        width: ${calcRem(40)};
        height: ${calcRem(40)};
      }
    }
  }

  button[type="submit"] {
    height: ${calcRem(40)};
  }

  .submitButtonContent {
    color: #ffffff;
  }

  ${mobile.all} {
    & {
      margin-top: auto;
      padding: ${calcRem(32)} ${calcRem(16)} ${calcRem(40)} ${calcRem(16)};

      .buttonWrapper {
        position: fixed;
        bottom: 0;
        width: 100%;
        margin-left: ${calcRem(-16)};

        &.shortWidth {
          position: relative;
          bottom: auto;
          margin-left: 0;
        }
      }

      &.biggerSize {
        padding: ${calcRem(32)} ${calcRem(16)} ${calcRem(48)} ${calcRem(16)};

        .buttonWrapper {
          height: ${calcRem(48)};

          button[type="submit"] {
            height: ${calcRem(48)};
          }
        }
      }
    }
  }
`

const StyledContactForm = (props) => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default StyledContactForm
