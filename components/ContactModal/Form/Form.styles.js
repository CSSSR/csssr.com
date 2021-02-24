import { css } from '@emotion/react'

const dynamic = hasFailOrSuccessStatus => css`
  @media (min-width: 768px) and (max-width: 1279px) {
    & {
      height: ${hasFailOrSuccessStatus ? '36.5rem' : 'auto'};
    }
  }

  @media (max-width: 767px) {
    & {
      height: ${hasFailOrSuccessStatus ? '100vh' : 'auto'};
    }
  }
`

const StyledForm = ({ hasFailOrSuccessStatus }) => () => css`
  ${dynamic(hasFailOrSuccessStatus)}
`
export default StyledForm
