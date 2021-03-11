import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Hero.styles'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

import { L10nConsumer } from '../../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import ContactButton from '../../../ContactButton'
import Grid from '../../../ui-kit/core-design/Grid'

const heroImages = require.context(
  '../../../../public/images/service/outsourcing-front-end/hero?csssr-images',
)

const Hero = ({ className, pageName, l10n: { translations } }) => (
  <Grid as="article" className={className} data-testid="Outsourcing:block:hero">
    <Heading
      className="title"
      as="h1"
      dangerouslySetInnerHTML={{ __html: translations.outsourcingFrontEnd.hero.title }}
      type="slab"
      size="l"
    />

    <Text
      className="description"
      as="p"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{ __html: translations.outsourcingFrontEnd.hero.description }}
    />

    <ContactButton
      className="button"
      pageName={pageName}
      dangerouslySetInnerHTML={{ __html: translations.outsourcingFrontEnd.hero.button }}
      testId="Outsourcing:button:contactUs.hero"
    />

    <div className="picture-container">
      <PictureSmart
        className="picture"
        requireImages={heroImages}
        alt={translations.outsourcingFrontEnd.imgAlt.hero}
      />
    </div>
  </Grid>
)

Hero.propTypes = {
  className: string,
  pageName: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Hero)`
    ${styles}
  `),
)
