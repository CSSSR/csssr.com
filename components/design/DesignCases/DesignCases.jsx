import React from 'react'
import { object, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './DesignCases.styles'
import Grid from '../../ui-kit/core-design/Grid'
import Case from './Case'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'

const DesignCases = ({ className, content: { plug, cases } }) => {
  return (
    <Grid className={className} as="section" data-testid="DesignCases:block:cases">
      {cases.map((content, index) => (
        <Case key={index} content={content} index={index} plug={plug} />
      ))}
    </Grid>
  )
}

DesignCases.propTypes = {
  className: string,
  content: object,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(DesignCases)`
      ${styles}
    `),
  ),
)
