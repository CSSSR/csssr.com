import React from 'react'
import { object, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Hero.styles'
import Grid from '../../../ui-kit/core-design/Grid'
import Text from '../../../ui-kit/core-design/Text'
import Heading from '../../../ui-kit/core-design/Heading'
import ContactButton from '../../../ContactButton'
import PictureForAllResolutions from '../../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../../utils/deviceProvider'
import { L10nConsumer } from '../../../../utils/l10nProvider'

const Hero = ({
  className,
  pageName,
  id,
  content: { heading, description, button, images, imgAlt },
  l10n: { translations },
}) => {
  return (
    <Grid className={className} as="section" id={id}>
      <Heading.H1
        type="slab"
        size="l"
        dangerouslySetInnerHTML={{ __html: heading(translations) }}
        className="heading"
      />

      <Text
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: description(translations) }}
        className="text"
      />

      <PictureForAllResolutions
        images={images}
        fallback={images['desktop.l'].png}
        alt={imgAlt(translations)}
        className="image"
      />

      <ContactButton
        className="button"
        pageName={pageName}
        dangerouslySetInnerHTML={{ __html: button(translations) }}
        testId="BackendAndDevops:button:contactUs"
      />
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
