import { css } from '@emotion/react'
import calcRem from '../../../../utils/style/calcRem'

const StyledLinksList = () => css`
& {
  margin-top: ${calcRem(18)};
}

li:not(:first-of-type) {
  margin-top: ${calcRem(14)};
}

.link {
  line-height: ${calcRem(16)} !important;
}

@media (hover: hover) and (pointer: fine) {
  & .link:hover::after,
  & .link:focus::after {
    display: none;
  }
}
`
export default StyledLinksList
