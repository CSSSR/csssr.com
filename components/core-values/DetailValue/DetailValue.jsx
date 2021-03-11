import React from 'react'
import { object, string } from 'prop-types'
import cn from 'classnames'
import { L10nConsumer } from '../../../utils/l10nProvider'
import styled from '@emotion/styled'
import styles from './DetailValue.styles'
import Grid from '../../ui-kit/core-design/Grid'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Heading from '../../ui-kit/core-design/Heading'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import Description from '../Description'

const DetailValue = ({
  className,
  content: { id, images, imgAlt, title, subTitle, description },
  l10n: { translations },
}) => (
  <article id={id} data-testid={`CoreValues:block:value.${id}`}>
    <Grid className={cn(className, id)}>
      <div className="picture-container">
        <PictureSmart
          requireImages={images}
          alt={imgAlt(translations)}
          className="image"
          loading="lazy"
        />
      </div>

      <Heading.H2
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: title(translations) }}
        className="heading"
      />

      <SubHeading
        type="slab"
        dangerouslySetInnerHTML={{ __html: subTitle(translations) }}
        className="sub-heading"
      />
    </Grid>

    <Description description={description} parentClassName={id} />
  </article>
)

DetailValue.propTypes = {
  className: string,
  content: object,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(DetailValue)`
    ${styles}
  `),
)
