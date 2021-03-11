import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styles from './Backend.styles'

import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Text from '../../ui-kit/core-design/Text'
import Grid from '../../ui-kit/core-design/Grid'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import { dbsImages, kotlinImages, nodeImages } from '../../../data/technologies/backend'

const Backend = ({ className, l10n: { translations, language } }) => (
  <Grid as="section" className={className} data-testid="Technologies:block:backend">
    <PictureSmart
      className={cn('picture', 'picture_dbs')}
      requireImages={dbsImages}
      alt={translations.technologies.imgAlt.dbs}
      loading="lazy"
    />

    <Heading className={cn('title', 'title_dbs')} as="h2" type="slab" size="m">
      {`MongoDB ${language === 'ru' ? 'и' : '&'} PostgreSQL`}
    </Heading>

    <SubHeading
      className={cn('text', 'text_dbs')}
      as="p"
      type="slab"
      dangerouslySetInnerHTML={{ __html: translations.technologies.backend.dbs }}
    />

    <PictureSmart
      className={cn('picture', 'picture_node')}
      requireImages={nodeImages}
      alt={translations.technologies.imgAlt.node}
      loading="lazy"
    />

    <Heading className={cn('title', 'title_node')} as="h2" type="regular" size="m">
      Node.js
    </Heading>

    <Text
      className={cn('text', 'text_node')}
      as="p"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{ __html: translations.technologies.backend.node }}
    />

    <PictureSmart
      className={cn('picture', 'picture_kotlin')}
      requireImages={kotlinImages}
      alt={translations.technologies.imgAlt.kotlin}
      loading="lazy"
    />

    <Heading className={cn('title', 'title_kotlin')} as="h2" type="regular" size="m">
      {language === 'ru' ? 'Бэкенд' : 'Back-end'}
    </Heading>

    <Text
      className={cn('text', 'text_kotlin')}
      as="p"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{ __html: translations.technologies.backend.kotlin }}
    />
  </Grid>
)

Backend.propTypes = {
  className: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Backend)`
    ${styles}
  `),
)
