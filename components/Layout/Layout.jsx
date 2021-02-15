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
  const [isCookiesPopupVisible, setIsCookiesPopupVisible] = useState(false)
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

    //Вследствие того, что на разных разрешениях и страницах положение футера в IntersectionObserver отличается, приходится вручную прописывать высоту отступа блока с кнопкой. После проведения рисёрча в задаче COM-3202, данная реализация будет заменена.
    let footerTopMargin = '0px'
    switch (true) {
      case isCookiesPopupVisible && getIdea() && isMobile:
        footerTopMargin = '-100px'
        break
      case isCookiesPopupVisible && getIdea() && !isMobile && !isTablet:
        footerTopMargin = '0px'
        break
      case getIdea() && isMobile:
        footerTopMargin = '0px'
        break
      case getIdea() && !isMobile && !isTablet:
        footerTopMargin = '300px'
        break
      default:
        footerTopMargin = '200px'
    }

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
