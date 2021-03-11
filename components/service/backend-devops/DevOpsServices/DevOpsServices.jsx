import React from 'react'
import { object, string } from 'prop-types'
import styled from '@emotion/styled'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

import Grid from '../../../ui-kit/core-design/Grid'
import SubHeading from '../../../ui-kit/core-design/SubHeading'
import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import Solution from './Solution'
import styles from './DevOpsServices.styles'

import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../../utils/deviceProvider'
import { L10nConsumer } from '../../../../utils/l10nProvider'

const DevOpsServices = ({
  className,
  id,
  content: { heading, subtitle, description, images, imgAlt, solutions },
  l10n: { translations },
}) => {
  return (
    <>
      <Grid
        className={className}
        as="section"
        id={id}
        data-testid="BackendAndDevops:block:services"
      >
        <Heading
          as="h2"
          type="slab"
          size="m"
          dangerouslySetInnerHTML={{ __html: heading(translations) }}
          className="title"
        />

        <SubHeading
          as="p"
          type="slab"
          dangerouslySetInnerHTML={{ __html: subtitle(translations) }}
          className="subtitle"
        />

        <Text
          type="regular"
          size="m"
          dangerouslySetInnerHTML={{ __html: description(translations) }}
          className="description"
        />

        <PictureSmart
          requireImages={images}
          alt={imgAlt(translations)}
          className="img"
          loading="lazy"
        />
      </Grid>

      <Solution content={solutions} />
    </>
  )
}

DevOpsServices.propTypes = {
  className: string,
  id: string,
  content: object,
  solutions: object,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(DevOpsServices)`
      ${styles}
    `),
  ),
)
