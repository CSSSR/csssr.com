import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styles from './Process.styles'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

import stages from '../../../../data/service/mvp/stages'

import Item from './Item'
import Heading from '../../../ui-kit/core-design/Heading'
import Grid from '../../../ui-kit/core-design/Grid'

const solarSystem = require.context(
  '../../../../public/images/service/mvp/solar-system?csssr-images',
)

const Process = ({ className, l10n: { translations } }) => (
  <section className={className} data-testid="MVP:block:process">
    <PictureSmart
      className="picture"
      requireImages={solarSystem}
      alt={translations.mvp.imgAlt.solar_system}
      loading="lazy"
    />

    <Grid as="div" className="content">
      <Heading
        as="h2"
        className="title"
        dangerouslySetInnerHTML={{ __html: translations.mvp.process.title }}
        type="slab"
        size="m"
      />

      {stages.map(({ id, link }) => (
        <Item className={cn('stage', `stage_${id}`)} key={id} id={id} link={link} />
      ))}
    </Grid>
  </section>
)

Process.propTypes = {
  className: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Process)`
    ${styles}
  `),
)
