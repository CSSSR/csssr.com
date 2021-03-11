import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styles from './TechnologyStack.styles'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

import Heading from '../../../ui-kit/core-design/Heading'
import SubHeading from '../../../ui-kit/core-design/SubHeading'
import Text from '../../../ui-kit/core-design/Text'
import Link from '../../../ui-kit/core-design/Link'
import Grid from '../../../ui-kit/core-design/Grid'

const technologyStackImages = require.context(
  '../../../../public/images/service/outsourcing-front-end/technologyStack?csssr-images',
)

const TechnologyStack = ({ className, l10n: { translations, language } }) => (
  <Grid as="article" className={className} data-testid="Outsourcing:block:techstack">
    <Heading
      className="title"
      as="h2"
      dangerouslySetInnerHTML={{ __html: translations.outsourcingFrontEnd.technologyStack.title }}
      type="slab"
      size="m"
    />

    <SubHeading
      className="subtitle"
      type="slab"
      as="p"
      dangerouslySetInnerHTML={{
        __html: translations.outsourcingFrontEnd.technologyStack.subtitle,
      }}
    />

    <Text
      className="description"
      as="p"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{
        __html: translations.outsourcingFrontEnd.technologyStack.description[0],
      }}
    />

    <Text
      className="description"
      as="p"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{
        __html: translations.outsourcingFrontEnd.technologyStack.description[1],
      }}
    />

    <Link
      className="link"
      href={`/${language}/tech-stack`}
      type="list"
      size="m"
      isNextLink
      dangerouslySetInnerHTML={{ __html: translations.outsourcingFrontEnd.technologyStack.link }}
      data-testid="Outsourcing:link:techstack"
    />

    <PictureSmart
      className="picture"
      requireImages={technologyStackImages}
      alt={translations.outsourcingFrontEnd.imgAlt.technologyStack}
      loading="lazy"
    />
  </Grid>
)

TechnologyStack.propTypes = {
  className: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(TechnologyStack)`
    ${styles}
  `),
)
