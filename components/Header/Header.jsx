import React, { Fragment, useEffect, useState } from 'react'
import { bool, string } from 'prop-types'
import ReactDOM from 'react-dom'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import cn from 'classnames'
import { clearQueueScrollLocks, disablePageScroll, enablePageScroll } from 'scroll-lock'
import styles from './Header.styles'

import Menu from './Menu'
import Links from './Links'
import Button from '../ui-kit/core-design/Button'
import ButtonLink from '../ui-kit/core-design/ButtonLink'
import ContactModal from '../ContactModal'
import { ReactComponent as Logo } from '../../static/icons/csssr_logo.svg'
import { ReactComponent as Burger } from '../../static/icons/header/burger.svg'
import { ReactComponent as Cross } from '../../static/icons/header/close.svg'

import { L10nConsumer } from '../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../utils/deviceProvider'

const Header = ({
  className,
  isIe11,
  isMobile,
  pageName,
  isButtonVisible = true,
  l10n: { translations, language },
}) => {
  const [isDropdownOpened, toggleDropdown] = useState(false)
  const [isContactModalVisible, toggleContactModalVisibility] = useState(false)

  useEffect(() => {
    if (isMobile) {
      if (isDropdownOpened || isContactModalVisible) {
        clearQueueScrollLocks()
        disablePageScroll(document.body)
      } else {
        enablePageScroll(document.body)
      }
    }
  })

  const handleButtonClick = () => {
    disablePageScroll(document.body)

    if (isMobile) {
      toggleDropdown(false)
    }

    toggleContactModalVisibility(true)
  }

  const handleHideContactModal = () => {
    enablePageScroll(document.body)
    toggleContactModalVisibility(false)
  }

  const Icon = isDropdownOpened ? Cross : Burger
  const CommonHeaderContent = () => (
    <Fragment>
      <Menu />
      <Links />
      {isButtonVisible &&
        (isIe11 ? (
          <ButtonLink
            data-testid="Header:link:contactUs"
            href="#hire-us"
            kind="primary"
            className="button_action"
            dangerouslySetInnerHTML={{ __html: translations.common.header.action }}
          />
        ) : (
          <Button
            data-testid="Header:button:contactUs"
            onClick={handleButtonClick}
            className="button_action"
            dangerouslySetInnerHTML={{ __html: translations.common.header.action }}
          />
        ))}
    </Fragment>
  )

  return (
    <header data-testid="Header:block" className={className}>
      <NextLink href={`/${language}`}>
        <a className="logo-wrapper" data-testid="Header:link.logo">
          <Logo className="logo" />
        </a>
      </NextLink>

      {isMobile ? (
        <Fragment>
          <button
            className="burger"
            onClick={() => toggleDropdown(!isDropdownOpened)}
            data-testid="Header:button:burger"
          >
            <Icon />
          </button>

          <div
            className={cn('dropdown', {
              dropdown_closed: !isDropdownOpened,
            })}
            data-scroll-lock-scrollable
          >
            <CommonHeaderContent />
          </div>
        </Fragment>
      ) : (
        <CommonHeaderContent />
      )}

      {typeof window !== 'undefined' &&
        isContactModalVisible &&
        ReactDOM.createPortal(
          <ContactModal onClose={handleHideContactModal} pageName={pageName} />,
          document.getElementById('main'),
        )}
    </header>
  )
}

Header.propTypes = {
  className: string,
  isIe11: bool,
  isMobile: bool,
  isButtonVisible: bool,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Header)`
      ${styles}
    `),
  ),
)
