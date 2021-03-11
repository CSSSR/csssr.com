import * as React from 'react'
import styled from '@emotion/styled'
import styles from './Greeting.styles'
import { bool, string } from 'prop-types'
import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'

import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const OriginGreeting = (props) => (
  <Grid className={props.className} data-testid="Faq:block:greeting">
    <Heading.H1 type="regular" size="l" className="greeting_heading">
      F.A.Q.
    </Heading.H1>

    <Text className="greeting_subheading" type="strong" size="m">
      Актуальные вопросы кандидатов про вакансии, условия найма, график работы в&nbsp;компании
      CSSSR. Для тех, кто предпочитает читать инструкции перед применением, а&nbsp;не&nbsp;после.
    </Text>
  </Grid>
)

OriginGreeting.propTypes = {
  className: string,
  isIe11: bool,
}

const Greeting = MsBrowserConsumer(styled(OriginGreeting)`
  ${styles.base}
  ${styles.ie11}
`)

export { Greeting }
export default Greeting
