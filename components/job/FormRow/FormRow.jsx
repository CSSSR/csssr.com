import React from 'react'
import styled from '@emotion/styled'
import styles from './FormRow.styles'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import Grid from '../../ui-kit/core-design/Grid'

const FormRow = ({ className, children, rightSideContent }) => (
  <Grid className={className} data-testid="Jobs:block:formRow">
    <div className="cell">{children}</div>
    {rightSideContent}
  </Grid>
)

export default MsBrowserConsumer(styled(FormRow)`
  ${styles}
`)
