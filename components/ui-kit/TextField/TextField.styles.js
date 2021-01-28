import { css } from '@emotion/react'
import TextFieldLightStyles from '../styles/TextFieldLight.styles'
import TextFieldRegularStyles from '../styles/TextFieldRegular.styles'

export default props => css`
  ${props.kind === 'light' ? TextFieldLightStyles : TextFieldRegularStyles}
`

