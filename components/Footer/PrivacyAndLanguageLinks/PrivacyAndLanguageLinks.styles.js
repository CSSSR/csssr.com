import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }, colors }) => css`
  & {
    margin-top: ${calcRem(11)};
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    & > li {
      display: flex;
    }
  }

  .link {
    text-decoration: none;
  }

  .language-link {
    margin-left: ${calcRem(50)};
  }

  .policy-link {
    margin-left: 16px;
  }

  .internal-link::after {
    display: none;
  }

  .link-text {
    color: ${colors.primary.origin};
  }

  ${mobile.all} {
    margin-top: ${calcRem(45)};

    .language-link {
      display: none;
    }
  }
`

export default props => {
  const colors = props.theme.colors
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints, colors })}
  `
}
