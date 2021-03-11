import React from 'react'
import { object, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './DevCases.styles'
import Grid from '../../ui-kit/core-design/Grid'
import Case from './Case'
import Heading from '../../ui-kit/core-design/Heading'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'

const DevCases = ({ className, content: { heading, cases }, l10n: { translations } }) => {
  return (
    <Grid className={className} as="section" data-testid="Projects:block:devCases">
      <Heading.H2
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: heading(translations) }}
        className="heading"
      />
      <Grid as="div" className="cases-wrapper">
        {cases.map((content, index) => (
          <Case key={index} content={content} index={index} />
        ))}
      </Grid>
    </Grid>
  )
}

DevCases.propTypes = {
  className: string,
  content: object,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(DevCases)`
      ${styles}
    `),
  ),
)
