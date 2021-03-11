import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styles from './Hero.styles'

import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Text from '../../ui-kit/core-design/Text'
import Grid from '../../ui-kit/core-design/Grid'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import { javascriptImages, typescriptImages } from '../../../data/technologies/hero'

const Hero = ({ className, l10n: { translations } }) => (
  <article className={className} data-testid="Technologies:block:hero">
    <Grid as="div" className="grid">
      <Heading
        className="title"
        as="h1"
        dangerouslySetInnerHTML={{ __html: translations.technologies.hero.title }}
        type="slab"
        size="l"
      />

      <Text
        className="description"
        as="p"
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: translations.technologies.hero.description }}
      />

      <div className="picture-container">
        <PictureSmart
          className={cn('picture', 'picture_javascript')}
          requireImages={javascriptImages}
          alt={translations.technologies.imgAlt.javascript}
        />
      </div>

      <Text
        className="javascript"
        as="p"
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: translations.technologies.hero.javascript }}
      />

      <PictureSmart
        className={cn('picture', 'picture_typescript')}
        requireImages={typescriptImages}
        alt={translations.technologies.imgAlt.typescript}
      />

      <SubHeading
        className="typescript"
        as="p"
        type="slab"
        dangerouslySetInnerHTML={{ __html: translations.technologies.hero.typescript }}
      />
    </Grid>
  </article>
)

Hero.propTypes = {
  className: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Hero)`
    ${styles}
  `),
)
