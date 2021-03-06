import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles, { backgroundImagesStyles } from './Idea.styles'
import { Global } from '@emotion/react'
import Grid from '../ui-kit/core-design/Grid'
import Heading from '../ui-kit/core-design/Heading'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import { L10nConsumer } from '../../utils/l10nProvider'
import { DeviceConsumer } from '../../utils/deviceProvider'
import ideaContent from '../../data/projects/idea'

const Idea = ({ className, l10n: { translations } }) => {
  return (
    <Grid className={className} as="section" data-testid="projects:block.idea">
      <div id="haveAnIdea" className="heading-wrapper">
        <div className="heading-text">
          <Heading.H2
            type="slab"
            size="m"
            dangerouslySetInnerHTML={{ __html: ideaContent.heading(translations) }}
            className="heading"
          />
        </div>
      </div>
      <Global styles={backgroundImagesStyles} />
    </Grid>
  )
}

Idea.propTypes = {
  className: string,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Idea)`
      ${styles}
    `),
  ),
)
