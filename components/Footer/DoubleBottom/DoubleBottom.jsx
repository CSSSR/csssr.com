import React, { useState, useEffect } from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './DoubleBottom.styles'

import Addresses from './Addresses'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'

const continents = require.context('../../../public/images/footer/continents?csssr-images')

const pins = [
  {
    id: 'singapore',
  },
  {
    id: 'russia',
  },
  {
    id: 'russia_2',
  },
  {
    id: 'estonia',
  },
]

const DoubleBottom = ({ className, l10n: { translations }, footerRef }) => {
  const [hoveredAddress, setHoveredAddress] = useState(null)
  const [isVisible, setVisibility] = useState(false)

  useEffect(() => {
    const listener = () => {
      const { top, bottom, height } = footerRef.current.getBoundingClientRect()

      if (top + height < window.innerHeight && bottom >= 0) {
        if (!isVisible) setVisibility(true)
      } else {
        if (isVisible) setVisibility(false)
      }
    }
    window.addEventListener('scroll', listener)
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('scroll', listener)
      window.removeEventListener('resize', listener)
    }
  }, [footerRef, isVisible, setVisibility])

  return (
    <div
      className={cn(className, { is_visible: isVisible })}
      data-testid="Footer:block:DoubleBottom"
    >
      <Addresses setHoveredAddress={setHoveredAddress} />
      <div className={'map-wrapper'}>
        <div className={'map'} data-testid="Footer:block.map">
          <PictureSmart
            className="picture"
            requireImages={continents}
            alt={translations.common.footer.imgAlt.continents}
            loading="lazy"
          />

          {pins.map(({ id }, index) => (
            <span
              key={`${id}_${index}`}
              className={cn(`pin pin_${id}`, {
                pin_hovered: id === hoveredAddress,
              })}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

DoubleBottom.propTypes = {
  className: string,
}

export default DeviceConsumer(
  L10nConsumer(styled(DoubleBottom)`
    ${styles}
  `),
)
