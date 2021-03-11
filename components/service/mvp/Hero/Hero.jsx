import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styles from './Hero.styles'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import ContactButton from '../../../ContactButton'
import Grid from '../../../ui-kit/core-design/Grid'

const heroIsmages = require.context('../../../../public/images/service/mvp/hero?csssr-images')

const Hero = ({ className, pageName, l10n: { translations } }) => (
  <article className={className} data-testid="MVP:block:hero">
    <Grid as="div">
      <Heading
        className="title"
        as="h1"
        dangerouslySetInnerHTML={{ __html: translations.mvp.hero.title }}
        type="slab"
        size="l"
      />

      <Text
        className="description"
        as="p"
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: translations.mvp.hero.description }}
      />

      <ContactButton
        className="button"
        pageName={pageName}
        dangerouslySetInnerHTML={{ __html: translations.mvp.hero.button }}
        testId="MVP:button:contactUs"
      />

      <div className="picture-container">
        <PictureSmart
          className="picture"
          requireImages={heroIsmages}
          alt={translations.mvp.imgAlt.hero}
        />
      </div>
    </Grid>
  </article>
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
