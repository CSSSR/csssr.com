import React from 'react'
import { object, string } from 'prop-types'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import styles from './TechStack.styles'
import Grid from '../../../ui-kit/core-design/Grid'
import Text from '../../../ui-kit/core-design/Text'
import Heading from '../../../ui-kit/core-design/Heading'
import SubHeading from '../../../ui-kit/core-design/SubHeading'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../../utils/deviceProvider'
import { L10nConsumer } from '../../../../utils/l10nProvider'

const TechStack = ({
  className,
  id,
  content: {
    heading,
    description,
    mongoDb,
    java,
    experts,
    link,
    javaImages,
    mongoDbImages,
    javaImgAlt,
    mongoDbImgAlt,
  },
  l10n: { translations },
}) => {
  return (
    <Grid className={className} as="section" id={id} data-testid="BackendAndDevops:block:techstack">
      <div className="title-block">
        <Heading
          as="h2"
          type="regular"
          size="l"
          dangerouslySetInnerHTML={{ __html: heading(translations) }}
          className="heading"
        />
        <SubHeading
          as="p"
          type="slab"
          dangerouslySetInnerHTML={{ __html: description(translations) }}
          className="text"
        />
      </div>
      <div className="java-block">
        <PictureSmart
          requireImages={javaImages}
          alt={javaImgAlt(translations)}
          className="java-image"
          loading="lazy"
        />
        <Text
          type="strong"
          size="m"
          dangerouslySetInnerHTML={{ __html: java(translations) }}
          className="java-text"
        />
      </div>
      <Text
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: experts(translations) }}
        className="experts-text"
      />
      <Text
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: link(translations) }}
        className="link-text"
      />
      <div className="mongodb-block">
        <PictureSmart
          requireImages={mongoDbImages}
          alt={mongoDbImgAlt(translations)}
          className="mongodb-image"
          loading="lazy"
        />
        <Text
          type="strong"
          size="m"
          dangerouslySetInnerHTML={{ __html: mongoDb(translations) }}
          className="mongodb-text"
        />
      </div>
    </Grid>
  )
}

TechStack.propTypes = {
  className: string,
  id: string,
  content: object,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(TechStack)`
      ${styles}
    `),
  ),
)
