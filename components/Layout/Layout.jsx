import React, { Fragment, useState, useEffect, useRef } from 'react'
import DevTools from '../DevTools'
import { withRouter } from 'next/router'
import { Global } from '@emotion/react'
import { dynamic } from './Layout.styles'
import cn from 'classnames'
import Header from '../Header'
import Footer from '../Footer'
import DiscountBanner from '../DiscountBanner'

import { L10nConsumer } from '../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../utils/deviceProvider'
import CookiesPopup from '../CookiesPopup'

const Layout = ({
  children,
  isMobile,
  isTablet,
  isIe11,
  pageName,
  l10n: { language },
  withFooter = true,
}) => {
  const dynamicTag = isIe11 ? 'div' : 'main'
  const [isHidden, setHidden] = useState(true)
  const [isCookiesPopupVisible, setIsCookiesPopupVisible] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const itemRef = useRef()
  const isWindowContext = typeof window !== 'undefined'

  const getIdea = () => {
    if (isWindowContext) {
      if (document.getElementById('haveAnIdea')) {
        return true
      }
      return
    }
  }

  useEffect(() => {
    let footerTopMargin = '0px'

    switch (true) {
      case isMobile && isCookiesPopupVisible:
        footerTopMargin = '0px 0px -200px 0px'
        break
      case isTablet && getIdea():
        footerTopMargin = '200px'
        break
      case !isMobile && !isTablet && getIdea():
        footerTopMargin = '300px'
        break
      default:
        footerTopMargin = '0px'
    }

    const options = {
      root: null,
      rootMargin: footerTopMargin,
      threshold: [0],
    }

    const callback = function ([entry]) {
      if (entry.intersectionRatio > 0 && !isFooterVisible) {
        setIsFooterVisible(true)
      } else setIsFooterVisible(false)
    }

    if (withFooter) {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(callback, options)
        observer.observe(itemRef.current)

        return () => {
          observer.disconnect()
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, isTablet, isCookiesPopupVisible])

  return (
    <Fragment>
      <Header pageName={pageName} />
      {language === 'en' && (
        <DiscountBanner
          className="discount-banner"
          pageName={pageName}
          isHidden={isHidden}
          setHidden={setHidden}
        />
      )}

      {React.createElement(
        dynamicTag,
        {
          id: 'main',
          className: cn('main', {
            main_en: language === 'en',
            with_padding: !isHidden,
            bubble_biggerBottomPosition: isCookiesPopupVisible,
            bubble_static: isFooterVisible,
            bubble_initial: !isFooterVisible,
            bubble_animation: getIdea(),
          }),
          'data-testid': 'Main:block',
        },
        children,
      )}
      {withFooter && (
        <div ref={itemRef}>
          <Footer />
        </div>
      )}
      <CookiesPopup setIsCookiesPopupVisible={setIsCookiesPopupVisible} />
      <DevTools />

      <Global styles={dynamic} />
    </Fragment>
  )
}

export default L10nConsumer(DeviceConsumer(withRouter(MsBrowserConsumer(Layout))))
