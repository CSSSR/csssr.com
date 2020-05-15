import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
import { any, bool, string } from 'prop-types'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import Button from './ui-kit/core-design/Button'
import ButtonLink from './ui-kit/core-design/ButtonLink'
import ContactModal from './ContactModal'
import { MsBrowserConsumer } from '../utils/msBrowserProvider'

const ContactButton = ({
  className,
  pageName = 'main',
  dangerouslySetInnerHTML,
  kind = 'primary',
  isIe11,
}) => {
  const [isContactModalVisible, toggleContactModalVisibility] = useState(false)

  const handleButtonClick = () => {
    disablePageScroll(document.body)
    toggleContactModalVisibility(true)
  }
  const handleHideContactModal = () => {
    enablePageScroll(document.body)
    toggleContactModalVisibility(false)
  }

  return (
    <Fragment>
      {isIe11 ? (
        <ButtonLink
          href="#hire-us"
          kind={kind}
          className={className}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        />
      ) : (
        <Button
          className={className}
          kind={kind}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
          onClick={handleButtonClick}
        />
      )}

      {typeof window !== 'undefined' &&
        isContactModalVisible &&
        ReactDOM.createPortal(
          <ContactModal onClose={handleHideContactModal} pageName={pageName} />,
          document.getElementById('main'),
        )}
    </Fragment>
  )
}

ContactButton.propTypes = {
  className: string,
  pageName: string,
  dangerouslySetInnerHTML: any,
  isIe11: bool,
}

export default MsBrowserConsumer(ContactButton)
