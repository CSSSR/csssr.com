import React from 'react'
import { string } from 'prop-types'
import { L10nConsumer } from '../../../utils/l10nProvider'
import styled from '@emotion/styled'
import styles from './Greeting.styles'
import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import greeting from '../../../data/core-values/greeting'

const { heading, images, imgAlt } = greeting

const Greeting = ({ className, id, l10n: { translations } }) => (
  <section className={className} id={id} data-testid="CoreValues:block:greeting">
    <Grid className="grid-heading">
      <Heading.H1
        type="slab"
        size="l"
        dangerouslySetInnerHTML={{ __html: heading(translations) }}
        className="heading"
      />
    </Grid>

    <div className="picture-container">
      <PictureSmart requireImages={images} alt={imgAlt(translations)} className="image" />
    </div>
  </section>
)

Greeting.propTypes = {
  className: string,
  id: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Greeting)`
    ${styles}
  `),
)
