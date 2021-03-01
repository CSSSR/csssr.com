import React from 'react'
import { string } from 'prop-types'

import { Global, css } from '@emotion/react'
import cn from 'classnames'
import styled from '@emotion/styled'
import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'
import styles from './Hero.styles'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import Heading from '../../ui-kit/core-design/Heading'
import Grid from '../../ui-kit/core-design/Grid'

const heroImagesEn = require.context('../../../public/images/main/hero-en?csssr-images')
const heroImagesRu = require.context('../../../public/images/main/hero-ru?csssr-images')

const Hero = ({ className, isMobile, l10n: { translations, language } }) => (
  <section className={cn(`${className} hero-wrap`)} data-testid="Hero:block">
    <Grid>
      <Heading
        className="title"
        as="h1"
        type="slab"
        size={isMobile ? 'm' : 'l'}
        dangerouslySetInnerHTML={{ __html: translations.main.hero.title }}
      />

      <Global
        styles={() => css`
          ${backgroundCssSmart('.hero-wrap', language === 'ru' ? heroImagesRu : heroImagesEn)}
        `}
      />
    </Grid>
  </section>
)

Hero.propTypes = {
  className: string,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Hero)`
      ${styles}
    `),
  ),
)
