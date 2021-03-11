import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { bool, string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './DiscountBanner.styles'

import Grid from '../ui-kit/core-design/Grid'
import ContactModal from '../ContactModal'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

import bannerData from '../../data/main/discountBanner'

import { ReactComponent as CloseButton } from '../../static/icons/main/cross.svg'

import { L10nConsumer } from '../../utils/l10nProvider'
import localStorageAvailable from '../../utils/client/localStorageAvailable'
import { DeviceConsumer } from '../../utils/deviceProvider'

const DiscountBanner = ({
  className,
  isMobile,
  l10n: { translations },
  pageName,
  isHidden,
  setHidden,
}) => {
  const DISCOUNT_ALERT_HIDDEN = 'hidden'

  const [isContactModalVisible, toggleContactModalVisibility] = useState(false)

  const handleClick = () => {
    if (localStorageAvailable()) {
      localStorage.setItem('discount_banner', DISCOUNT_ALERT_HIDDEN)
    }
    setHidden(true)
  }

  useEffect(() => {
    if (localStorageAvailable()) {
      const isHidden = localStorage.getItem('discount_banner') === DISCOUNT_ALERT_HIDDEN
      setHidden(isHidden)
    } else {
      setHidden(false)
    }
  }, [setHidden])

  return (
    <div
      className={cn(className, {
        _hidden: isHidden,
      })}
      data-testid="DiscountBanner:block"
    >
      <Grid>
        <PictureSmart
          className="image"
          requireImages={bannerData.images}
          alt={bannerData.imgAlt}
          testId="DiscountBanner:picture"
        />

        <div className="banner-info">
          {isMobile ? (
            <span
              dangerouslySetInnerHTML={{ __html: bannerData.titleLink(translations) }}
              className="heading title-link"
              data-testid="DiscountBanner:button:toggle.modal"
              onClick={() => toggleContactModalVisibility(true)}
            />
          ) : (
            <p
              dangerouslySetInnerHTML={{ __html: bannerData.title(translations) }}
              className="heading"
            />
          )}

          <span
            dangerouslySetInnerHTML={{ __html: bannerData.description(translations) }}
            className="description"
          />
        </div>

        <span
          dangerouslySetInnerHTML={{ __html: bannerData.arrowText(translations) }}
          className="arrow-text"
        />

        <CloseButton
          className="close-button"
          onClick={handleClick}
          data-testid="DiscountBanner:button:close"
        />

        {typeof window !== 'undefined' &&
          isContactModalVisible &&
          ReactDOM.createPortal(
            <ContactModal
              onClose={() => toggleContactModalVisibility(false)}
              pageName={pageName}
            />,
            document.getElementById('main'),
          )}
      </Grid>
    </div>
  )
}

DiscountBanner.propTypes = {
  className: string,
  isMobile: bool,
}

export default L10nConsumer(
  DeviceConsumer(
    styled(DiscountBanner)`
      ${styles}
    `,
  ),
)
