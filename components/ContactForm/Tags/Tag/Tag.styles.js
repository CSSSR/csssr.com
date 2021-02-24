import { css } from '@emotion/react'

const base = ({ breakpoints: { tablet, mobile }, colors }) => css`
  & {
    .tag {
      position: relative;
      height: 31px;
      padding: 0 12px;
      border: 1px solid ${colors.secondary.gray};
      background-color: #ffffff;
      font-weight: 300;
      color: ${colors.secondary.darken100};
      letter-spacing: normal;
      text-transform: none;
      transition: none;

      &:hover {
        border: 1px solid ${colors.secondary.darken100};
      }

      &:disabled {
        border: 1px solid #cdcdcd;
        color: ${colors.secondary.gray};
        opacity: 1;
      }

      &.color-blue {
        border: 1px solid ${colors.primary.origin};
        background-color: ${colors.primary.origin};
        color: #ffffff;

        &:hover {
          &::before,
          &::after {
            position: absolute;
            content: '';
          }

          &::before {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #0254D8;
          }

          &::after {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 15px;
            height: 15px;
            background-image: url(${require('../../../../static/icons/closeCross.svg').default});
            background-repeat: no-repeat;
          }
        }
      }
    }
  }

  ${tablet.all} {
    & {
      margin-top: 0;
      min-width: 9rem;
    }
  }

  ${mobile.all} {
    & {
      margin-top: 0;
      min-width: 13.5rem;
    }
  }
`

const Tag = props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default Tag
