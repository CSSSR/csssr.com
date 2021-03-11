import React from 'react'
import { string } from 'prop-types'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import styles from './Autotests.styles'

import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Grid from '../../ui-kit/core-design/Grid'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const autotestsImages = require.context(
  '../../../public/images/technologies/autotests?csssr-images',
)

const Autotests = ({ className, l10n: { translations } }) => (
  <div className={className} data-testid="Technologies:block:autotests">
    <Grid as="article">
      <Heading
        className="title"
        as="h2"
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: translations.technologies.autotests.title }}
      />

      <PictureSmart
        className="picture"
        requireImages={autotestsImages}
        alt={translations.technologies.imgAlt.autotests}
        loading="lazy"
      />

      <SubHeading
        className="text"
        as="p"
        type="slab"
        dangerouslySetInnerHTML={{ __html: translations.technologies.autotests.text }}
      />
    </Grid>
  </div>
)

Autotests.propTypes = {
  className: string,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Autotests)`
      ${styles}
    `),
  ),
)
