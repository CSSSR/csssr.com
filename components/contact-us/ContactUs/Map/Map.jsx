import React from 'react'
import cn from 'classnames'
import { string } from 'prop-types'
import { Global } from '@emotion/react'

import Tabs from './Tabs'
import Address from './Address'

import styled from '@emotion/styled'
import styles, { backgroundImagesStyles } from './Map.styles'
import BookACall from '../BookACall'

import { MapConsumer } from '../../../../utils/mapContext'
import { DeviceConsumer } from '../../../../utils/deviceProvider'

const Map = ({ className, activeAddressId, isMobile }) => {
  return (
    <aside className={cn(className, `_${activeAddressId}`)} id="map">
      <Global styles={backgroundImagesStyles} />

      <Tabs />
      {isMobile && <BookACall className="book-a-call" />}
      <Address />
      <span className={cn('map', `map-${activeAddressId}`)} data-testid="Contacts:block:map" />
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
