import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import { Global } from '@emotion/react'

import Text from '../ui-kit/core-design/Text'
import { L10nConsumer } from '../../utils/l10nProvider'
import localStorageAvailable from '../../utils/client/localStorageAvailable'
import styles from './CookiesPopup.styles'
import { dynamic } from './CookiesPopup.styles'

import cookiesLinks from '../../data/сookies-popup/cookiesLinks'

import { ReactComponent as CrossIcon } from '../../static/icons/cross_white.svg'

const crossIcon = <CrossIcon width="100%" height="100%" />

const COOKIES_POLICY_ALERT_HIDDEN = 'hidden'

let popupHeight = 0

const CookiesPopup = ({
  className,
  l10n: { language, translations },
  setIsCookiesPopupVisible,
}) => {
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    const isWindowContext = typeof window !== 'undefined'
    popupHeight = isWindowContext && document.getElementById('cookiesPopup').clientHeight
  }, [])

  useEffect(() => {
    setIsCookiesPopupVisible(!isHidden)
  }, [isHidden, setIsCookiesPopupVisible])

  const handleClick = () => {
    if (localStorageAvailable()) {
      localStorage.setItem('cookies_policy', COOKIES_POLICY_ALERT_HIDDEN)
    }
    setIsHidden(true)
  }

  useEffect(() => {
    if (localStorageAvailable()) {
      const isHidden = localStorage.getItem('cookies_policy') === COOKIES_POLICY_ALERT_HIDDEN
      setIsHidden(isHidden)
    } else {
      setIsHidden(false)
    }
  }, [])

  const links = cookiesLinks[language]
  const dataTestIdsByLinksUrls = {
    '/en/privacy-policy': 'CookiesPopup:link.privacyPolicy',
    '/ru/privacy-policy': 'CookiesPopup:link.privacyPolicy',
    '/en/cookies-policy': 'CookiesPopup:link.cookiesPolicy',
  }
  return (
    <div id="cookiesPopup" className={cn(className, { hide: isHidden })} data-testid="CookiesPopup:block">
      <button className="close" onClick={handleClick} data-testid="CookiesPopup:button.close">
        {crossIcon}
      </button>
      <div className="wrap">
        <Text type="regular" size="m" className="cookies-text">
          <span dangerouslySetInnerHTML={{ __html: translations.common.cookiesPopup.text }} />

          {links.map((url, index) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={dataTestIdsByLinksUrls[url]}
              className="cookies-link"
              dangerouslySetInnerHTML={{
                __html: translations.common.cookiesPopup.link[index],
              }}
            />
          ))}
        </Text>
      </div>

      <Global styles={dynamic} />
    </div>
  )
}

export const getPopupHeight = () => {
  return `${popupHeight}px`
}

export default styled(L10nConsumer(CookiesPopup))`
  ${styles}
`
