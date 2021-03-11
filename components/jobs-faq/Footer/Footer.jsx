import * as React from 'react'
import styled from '@emotion/styled'
import styles, { backgroundImagesStyles } from './Footer.styles'
import cn from 'classnames'
import { bool, string } from 'prop-types'
import { Global } from '@emotion/react'
import Grid from '../../ui-kit/core-design/Grid'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const superman = require.context('../../../public/images/jobs-faq/superman?csssr-images')

const OriginFooter = ({ className }) => (
  <div className={cn(className, 'image-wrapper')} data-testid="Faq:block:footer">
    <Grid>
      <PictureSmart
        className="image"
        requireImages={superman}
        alt="Cупермен фронтендер"
        loading="lazy"
      />
    </Grid>

    <Global styles={backgroundImagesStyles()} />
  </div>
)

OriginFooter.propTypes = {
  className: string,
  isIe11: bool,
}

const Footer = MsBrowserConsumer(styled(OriginFooter)`
  ${styles.base}
  ${styles.ie11}
`)

export { Footer }
export default Footer
