import { css } from '@emotion/react'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ colors }) => css`
.tag {
  position: relative;
  height: ${calcRem(31)};
  padding: 0 ${calcRem(12)};
  border: ${calcRem(1)} solid ${colors.secondary.gray};
  background-color: #ffffff;
  font-weight: 300;
  color: ${colors.secondary.darken100};
  letter-spacing: normal;
  text-transform: none;
  transition: none;

  &:disabled {
    border: ${calcRem(1)} solid #cdcdcd;
    color: ${colors.secondary.gray};
    opacity: 1;
  }

  &.color-blue {
    border: ${calcRem(1)} solid ${colors.primary.origin};
    background-color: ${colors.primary.origin};
    color: #ffffff;
  }
}

@media (hover: hover) and (pointer: fine) {
  .tag:hover {
    border: ${calcRem(1)} solid ${colors.secondary.darken100};
  }

  .tag {
    &.color-blue:hover {
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
        background-color: #0254d8;
      }

      &::after {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: ${calcRem(15)};
        height: ${calcRem(15)};
        background-image: url(${require('../../../../static/icons/cross.svg').default});
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
}
`

const Tag = props => {
  const colors = props.theme.colors

  return css`
    ${base({ colors })}
  `
}

export default Tag
