import React from 'react'
import { string, object, func } from 'prop-types'
import translate from '../../../utils/translate-wrapper'
import styled from '@emotion/styled'
import styles from './OurClients.styles'
import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const OurClients = ({ t, lng, className, id, content: { heading, images, altImg } }) => (
  <Grid className={className} as="section" id={id}>
    <Heading.H2
      type="slab"
      size="m"
      dangerouslySetInnerHTML={{ __html: t(heading) }}
      className="heading"
    />

    <PictureForAllResolutions images={images[lng]} className="image" type="image/svg+xml">
      <img src={images[lng]['desktop.l'].svg} alt={t(altImg)} />
    </PictureForAllResolutions>
  </Grid>
)

OurClients.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object,
}

export default translate(
  MsBrowserConsumer(styled(OurClients)`
    ${styles}
  `),
)
