import React from 'react'
import { object, string } from 'prop-types'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'

import styles from './Greeting.styles'
import ContactButton from '../../ContactButton'
import Grid from '../../ui-kit/core-design/Grid'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'

import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'

const Greeting = ({
  className,
  pageName,
  id,
  content: { heading, text, button, images, imgAlt },
  isMobile,
  isTablet,
  l10n: { translations },
}) => {
  const textType = isMobile || isTablet ? 'regular' : 'strong'

  return (
    <Grid className={className} as="section" id={id} data-testid="Industry:block:greeting">
      <Heading.H1
        type="slab"
        size="l"
        dangerouslySetInnerHTML={{ __html: heading(translations) }}
        className="heading"
      />

      <Text
        type={textType}
        size="m"
        dangerouslySetInnerHTML={{ __html: text(translations) }}
        className="text"
      />

      <div className="picture-container">
        <PictureSmart requireImages={images} alt={imgAlt(translations)} className="image" />
      </div>

      <ContactButton
        className="button"
        pageName={pageName}
        dangerouslySetInnerHTML={{ __html: button(translations) }}
        testId="Industry:button.contactUs"
      />
    </Grid>
  )
}

Greeting.propTypes = {
  className: string,
  pageName: string,
  id: string,
  content: object,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Greeting)`
      ${styles}
    `),
  ),
)
