import React from 'react'
import { object, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Hero.styles'
import Grid from '../../ui-kit/core-design/Grid'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Heading from '../../ui-kit/core-design/Heading'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'

const Hero = ({
  className,
  content: { heading, text, imagesEn, imagesRu, imgAlt },
  l10n: { translations, language },
}) => {
  return (
    <Grid className={className} as="section" data-testid="Projects:block:hero">
      <Heading.H1
        type="slab"
        size="l"
        dangerouslySetInnerHTML={{ __html: heading(translations) }}
        className="heading"
      />

      <SubHeading
        type="regular"
        size="m"
        dangerouslySetInnerHTML={{ __html: text(translations) }}
        className="text"
      />

      <div className="picture-wrapper">
        <PictureSmart
          className="logos"
          requireImages={language === 'ru' ? imagesRu : imagesEn}
          alt={imgAlt(translations)}
          testid="contactUs:picture:bookACall.avatar"
        />
      </div>
    </Grid>
  )
}

Hero.propTypes = {
  className: string,
  pageName: string,
  id: string,
  content: object,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Hero)`
      ${styles}
    `),
  ),
)
