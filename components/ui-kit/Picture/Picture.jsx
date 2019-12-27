//TODO заменить key на name
import React from 'react'
import styled from '@emotion/styled'
import { string, object } from 'prop-types'
import styles from './Picture.styles'
import PictureForAllResolutions from '../PictureForAllResolutions'

const Picture = ({ images, ...props }) => {
  return (
    <PictureForAllResolutions
      images={{
        'desktop.all': images,
        'desktop.m': images,
        'desktop.s': images,
        'tablet.all': images,
        'mobile.all': images,
      }}
      {...props}
    />
  )
}

/**
 * TODO: дописать propTypes
 */
Picture.propTypes = {
  className: string,
  testid: string,
  images: object.isRequired,
  fallback: object.isRequired,
  alt: string.isRequired,
  theme: object.isRequired,
}

export default styled(Picture)`
  ${styles.base}
`
