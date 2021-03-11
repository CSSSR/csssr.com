import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './DevBlock.styles'
import Grid from '../../ui-kit/core-design/Grid'
import Text from '../../ui-kit/core-design/Text'
import Idea from '../../../components/Idea/Idea'
import Heading from '../../ui-kit/core-design/Heading'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'
import DevBlockContent from '../../../data/design/devBlock'

const DevBlock = ({ className, pageName, l10n: { translations } }) => {
  return (
    <Grid className={className} as="section" data-testid="DesignCases:block:dev">
      <Heading.H2
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: DevBlockContent.heading(translations) }}
        className="heading"
      />

      <Text
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: DevBlockContent.text(translations) }}
        className="text"
      />
      <Idea className="idea" pageName={pageName} />
    </Grid>
  )
}

DevBlock.propTypes = {
  className: string,
  pageName: string,
  id: string,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(DevBlock)`
      ${styles}
    `),
  ),
)
