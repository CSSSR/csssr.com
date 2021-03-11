import React from 'react'
import { array, object, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './CoreValues.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import ButtonLink from '../../ui-kit/core-design/ButtonLink'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import CoreValuesItem from '../CoreValuesItem'

const CoreValues = ({
  className,
  id,
  content: { heading, subHeading, coreValuesItems, button },
  l10n: { translations },
}) => (
  <Grid className={className} as="section" id={id} data-testid="Industry:block:coreValues">
    <Heading.H2
      type="slab"
      size="m"
      dangerouslySetInnerHTML={{ __html: heading(translations) }}
      className="heading"
    />

    <SubHeading
      type="slab"
      dangerouslySetInnerHTML={{ __html: subHeading(translations) }}
      className="sub-heading"
    />

    {coreValuesItems.map(({ images, href, imgAlt, title, text, className }) => (
      <CoreValuesItem
        images={images}
        href={href}
        imgAlt={imgAlt}
        title={title}
        text={text}
        itemClassName={className}
        key={title}
      />
    ))}

    <ButtonLink
      href={translations.industry.coreValues.button.href}
      kind="secondary"
      className="button"
      dangerouslySetInnerHTML={{ __html: button.title(translations) }}
      data-testid="Industry:link.coreValues"
    />
  </Grid>
)

CoreValues.propTypes = {
  className: string,
  id: string,
  content: object,
  factItems: array,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(CoreValues)`
    ${styles}
  `),
)
