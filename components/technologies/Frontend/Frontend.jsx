import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styles from './Frontend.styles'

import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Text from '../../ui-kit/core-design/Text'
import Grid from '../../ui-kit/core-design/Grid'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import { angularImages, reactImages, vueImages } from '../../../data/technologies/frontend'

const Frontend = ({ className, l10n: { translations } }) => (
  <Grid as="section" className={className} data-testid="Technologies:block:frontend">
    <PictureSmart
      className={cn('picture', 'picture_react')}
      requireImages={reactImages}
      alt={translations.technologies.imgAlt.react}
      loading="lazy"
    />

    <Heading className={cn('title', 'title_react')} as="h2" type="slab" size="m">
      React
    </Heading>

    <SubHeading
      className={cn('text', 'text_react')}
      as="p"
      type="slab"
      dangerouslySetInnerHTML={{ __html: translations.technologies.frontend.react }}
    />

    <PictureSmart
      className={cn('picture', 'picture_vue')}
      requireImages={vueImages}
      alt={translations.technologies.imgAlt.vue}
      loading="lazy"
    />

    <Heading className={cn('title', 'title_vue')} as="h2" type="regular" size="m">
      Vue
    </Heading>

    <Text
      className={cn('text', 'text_vue')}
      as="p"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{ __html: translations.technologies.frontend.vue }}
    />

    <PictureSmart
      className={cn('picture', 'picture_angular')}
      requireImages={angularImages}
      alt={translations.technologies.imgAlt.angular}
      loading="lazy"
    />

    <Heading className={cn('title', 'title_angular')} as="h2" type="regular" size="m">
      Angular 2+
    </Heading>

    <Text
      className={cn('text', 'text_angular')}
      as="p"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{ __html: translations.technologies.frontend.angular }}
    />
  </Grid>
)

Frontend.propTypes = {
  className: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Frontend)`
    ${styles}
  `),
)
