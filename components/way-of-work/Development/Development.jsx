import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Text from '../../ui-kit/core-design/Text'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import styles from './Development.styles'

import { review, scrumban } from '../../../data/way-of-work/development'

const Development = ({ className, id, l10n: { translations } }) => {
  return (
    <section className={className} id={id} data-testid="WayOfWork:block:development">
      <Grid>
        <Heading.H2
          type="slab"
          size="m"
          dangerouslySetInnerHTML={{ __html: translations.wayOfWork.development.title }}
          className="heading"
        />

        <PictureSmart
          className="scrumbanImg"
          requireImages={scrumban.img}
          alt={scrumban.imgAlt(translations)}
          loading="lazy"
        />

        <Heading.H3
          type="regular"
          size="l"
          dangerouslySetInnerHTML={{ __html: scrumban.title(translations) }}
          className="scrumbanTitle"
        />

        <SubHeading
          type="slab"
          dangerouslySetInnerHTML={{
            __html: scrumban.description(translations),
          }}
          className="scrumbanSubHeading"
        />

        <div className="scrumbanTextWrap">
          <Text
            className="scrumbanText"
            type="strong"
            size="m"
            dangerouslySetInnerHTML={{ __html: scrumban.text(translations) }}
          />

          <Text
            className="scrumbanTextTwo"
            type="strong"
            size="m"
            dangerouslySetInnerHTML={{ __html: scrumban.textTwo(translations) }}
          />
        </div>

        <PictureSmart
          className="reviewImg"
          requireImages={review.img}
          alt={review.imgAlt(translations)}
          loading="lazy"
        />

        <Heading.H3
          type="regular"
          size="l"
          dangerouslySetInnerHTML={{ __html: review.title(translations) }}
          className="reviewTitle"
        />

        <SubHeading
          type="slab"
          dangerouslySetInnerHTML={{
            __html: review.description(translations),
          }}
          className="reviewSubHeading"
        />

        <Text
          className="reviewText"
          type="strong"
          size="m"
          dangerouslySetInnerHTML={{ __html: review.text(translations) }}
        />
      </Grid>
    </section>
  )
}

Development.propTypes = {
  className: string,
  id: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Development)`
    ${styles}
  `),
)
