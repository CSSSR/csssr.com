import { css } from '@emotion/react'
import calcRem from '../../utils/style/calcRem'

const base = ({ colors }) => css`
  & {
    display: flex;
    flex-direction: column;
    width: 100%;
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

  .button {
    height: ${calcRem(40)};
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: ${calcRem(12)};
    line-height: ${calcRem(24)};
    font-weight: 900;
    letter-spacing: ${calcRem(1.6)};
    text-transform: uppercase;
  }

  .button-content {
    color: #ffffff;
  }
`

const StyledContactForm = (props) => {
  const colors = props.theme.colors

  return css`
    ${base({ colors })}
  `
}

export default StyledContactForm
