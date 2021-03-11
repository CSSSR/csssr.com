import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './AboutFrontend.styles'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

import Heading from '../../../ui-kit/core-design/Heading'
import SubHeading from '../../../ui-kit/core-design/SubHeading'
import Text from '../../../ui-kit/core-design/Text'
import Grid from '../../../ui-kit/core-design/Grid'

const aboutFrontendImage = require.context(
  '../../../../public/images/service/outsourcing-front-end/aboutFrontend?csssr-images',
)

const AboutFrontend = ({ className, l10n: { translations } }) => (
  <Grid as="article" className={className} data-testid="Outsourcing:block:aboutFronted">
    <Heading
      className="title"
      as="h2"
      dangerouslySetInnerHTML={{ __html: translations.outsourcingFrontEnd.aboutFrontend.title }}
      type="slab"
      size="m"
    />

    <SubHeading
      className="subtitle"
      as="p"
      type="slab"
      dangerouslySetInnerHTML={{ __html: translations.outsourcingFrontEnd.aboutFrontend.subtitle }}
    />

    <Text
      className="description"
      as="p"
      size="m"
      dangerouslySetInnerHTML={{
        __html: translations.outsourcingFrontEnd.aboutFrontend.description,
      }}
    />

    <PictureSmart
      className="picture"
      requireImages={aboutFrontendImage}
      alt={translations.outsourcingFrontEnd.imgAlt.aboutFrontend}
      loading="lazy"
    />
  </Grid>
)

AboutFrontend.propTypes = {
  className: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(AboutFrontend)`
    ${styles}
  `),
)
