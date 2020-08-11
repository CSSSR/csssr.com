import React from 'react'
import cn from 'classnames'
import { string } from 'prop-types'
import { Global } from '@emotion/core'

import Tabs from './Tabs'
import Address from './Address'

import styled from '@emotion/styled'
import styles, { backgroundImagesStyles } from './Map.styles'
import BookACall from '../BookACall'

import { MapConsumer } from '../../../../utils/mapContext'
import { DeviceConsumer } from '../../../../utils/deviceProvider'

const Map = ({ className, activeAddressId, isMobile }) => {
  return (
    <aside className={className} id="map">
      <Global styles={backgroundImagesStyles} />

      <Tabs />
      {isMobile && <BookACall className="book-a-call" />}
      <Address />
      <span className={cn('map', `map-${activeAddressId}`)} />
    </aside>
  )
}

Map.propTypes = {
  className: string,
}

export default DeviceConsumer(
  MapConsumer(styled(Map)`
    ${styles}
  `),
)