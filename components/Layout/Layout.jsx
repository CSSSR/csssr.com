import React, { Fragment, useState, useEffect, useRef } from 'react'
import DevTools from '../DevTools'
import { withRouter } from 'next/router'
import { Global } from '@emotion/react'
import { dynamic } from './Layout.styles'
import cn from 'classnames'
import Header from '../Header'
import Footer from '../Footer'
// import DiscountBanner from '../DiscountBanner'

import { L10nConsumer } from '../../utils/l10nProvider'
import { DeviceConsumer } from '../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import CookiesPopup from '../CookiesPopup'

const Layout = ({
  children,
  isIe11,
  pageName,
  l10n: { language },
  isMobile,
  isTablet,
  withFooter = true,
}) => {
  const dynamicTag = isIe11 ? 'div' : 'main'
  const pathsNoButton = ['jobs']
  const isButtonVisible = !pathsNoButton.some((string) => asPath.indexOf(string) + 1)
  // const [isHidden, setHidden] = useState(true)
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const itemRef = useRef()

  const getIdea = () => {
    if (typeof window !== 'undefined') {
      return document.getElementById('haveAnIdea')
    }
  }

  useEffect(() => {
    const callback = function ([entry]) {
      if (entry.intersectionRatio > 0 && !isFooterVisible) {
        setIsFooterVisible(true)
      } else setIsFooterVisible(false)
    }

    const footerTopMargin =
      getIdea() && isMobile ? '100px' : getIdea() && !isMobile && !isTablet ? '300px' : '200px'

    const options = {
      root: null,
      rootMargin: footerTopMargin,
      threshold: [0],
    }
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(callback, options)
      observer.observe(itemRef.current)

      return () => {
        observer.disconnect()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Fragment>
      <Header isButtonVisible={isButtonVisible} pageName={pageName} />
      {/* {language === 'en' && (
        <DiscountBanner
          className="discount-banner"
          pageName={pageName}
          isHidden={isHidden}
          setHidden={setHidden}
        />
      )} */}

      {React.createElement(
        dynamicTag,
        {
          id: 'main',
          className: cn('main', {
            main_en: language === 'en',
            // with_padding: !isHidden,
            bubble_static: isFooterVisible,
            bubble_animation: getIdea(),
          }),
          'data-testid': 'Main:block',
        },
        children,
      )}
      <div style={{ visibility: 'none' }} ref={itemRef} />
      {withFooter && <Footer />}
      <CookiesPopup />
      <DevTools />

      <Global styles={dynamic} />
    </Fragment>
  )
}

export default L10nConsumer(DeviceConsumer(withRouter(MsBrowserConsumer(Layout))))
