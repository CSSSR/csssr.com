import React from 'react'
import { object, string } from 'prop-types'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'

import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import styles from './OurClients.styles'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const OurClients = ({
  l10n: { translations, language },
  className,
  id,
  page,
  content: { heading, images, altImg },
}) => (
  <Grid className={className} as="section" id={id} data-testid="Industry:block:ourClients">
    <Heading.H2
      type="slab"
      size="m"
      dangerouslySetInnerHTML={{ __html: heading(translations) }}
      className="heading"
    />

    <PictureSmart
      requireImages={images[language]}
      className={`image image_${page}`}
      alt={altImg(translations)}
      loading="lazy"
    />
  </Grid>
)

OurClients.propTypes = {
  className: string,
  id: string,
  content: object,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(OurClients)`
    ${styles}
  `),
)
