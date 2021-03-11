import React from 'react'
import { object, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Hero.styles'
import Grid from '../../ui-kit/core-design/Grid'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'

const Hero = ({
  className,
  content: { heading, text, images, imgAlt },
  l10n: { translations },
}) => {
  return (
    <Grid className={className} as="section" data-testid="DesignCases:block:hero">
      <h1
        className="visually-hidden"
        dangerouslySetInnerHTML={{ __html: translations.design.meta.title }}
      />
      <Heading.H2
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: heading(translations) }}
        className="heading"
      />

      <Text
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: text(translations) }}
        className="text"
      />

      <PictureSmart className="image" requireImages={images} alt={imgAlt(translations)} />
    </Grid>
  )
}

Hero.propTypes = {
  className: string,
  pageName: string,
  id: string,
  content: object,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Hero)`
      ${styles}
    `),
  ),
)
