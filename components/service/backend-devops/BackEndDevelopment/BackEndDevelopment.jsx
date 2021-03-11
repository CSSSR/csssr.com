import React from 'react'
import { object, string } from 'prop-types'
import styled from '@emotion/styled'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styles from './BackEndDevelopment.styles'
import Grid from '../../../ui-kit/core-design/Grid'
import SubHeading from '../../../ui-kit/core-design/SubHeading'
import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import List from '../../../ui-kit/core-design/List'
import ListItem from '../../../ui-kit/core-design/ListItem'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../../utils/deviceProvider'
import { L10nConsumer } from '../../../../utils/l10nProvider'

const BackEndDevelopment = ({
  className,
  id,
  content: {
    heading,
    description,
    images,
    imgAlt,
    whatWeDo: { do_title, do_description, list },
  },
  l10n: { translations },
}) => {
  return (
    <Grid
      className={className}
      as="section"
      id={id}
      data-testid="BackendAndDevops:block:development"
    >
      <Heading
        as="h2"
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: heading(translations) }}
        className="heading"
      />
      <SubHeading
        as="p"
        type="slab"
        dangerouslySetInnerHTML={{ __html: description(translations) }}
        className="text"
      />
      <PictureSmart
        requireImages={images}
        alt={imgAlt(translations)}
        className="image"
        loading="lazy"
      />
      <div className="left-block">
        <Heading
          as="h2"
          type="regular"
          size="l"
          dangerouslySetInnerHTML={{ __html: do_title(translations) }}
          className="heading-do"
        />
        <Text
          size="m"
          type="strong"
          dangerouslySetInnerHTML={{ __html: do_description(translations) }}
          className="text-do"
        />
      </div>
      <List className="list">
        {list.map((item, index) => (
          <ListItem className="list-item" key={index}>
            <Heading
              as="h3"
              type="regular"
              className="item-title"
              dangerouslySetInnerHTML={{ __html: item.title(translations) }}
              size="m"
            />

            <Text
              size="m"
              type="regular"
              dangerouslySetInnerHTML={{ __html: item.description(translations) }}
              className="item-text"
            />
          </ListItem>
        ))}
      </List>
    </Grid>
  )
}

BackEndDevelopment.propTypes = {
  className: string,
  id: string,
  content: object,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(BackEndDevelopment)`
      ${styles}
    `),
  ),
)
