import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Bubble.styles'
import Button from '../ui-kit/core-design/Button'
import ContactModal from '../ContactModal'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import { L10nConsumer } from '../../utils/l10nProvider'
import { DeviceConsumer } from '../../utils/deviceProvider'
import bubbleContent from '../../data/projects/bubble'

const Bubble = ({ className, l10n: { translations }, pageName }) => {
  const [isContactModalVisible, toggleContactModalVisibility] = useState(false)

  return (
    <>
      <div className={cn(`${className} ${pageName}`)} data-testid="projects:block.bubbleButton">
        <div className="button-wrapper">
          <Button
            data-testid={`projects:button.contactUs`}
            onClick={() => toggleContactModalVisibility(true)}
            className="bubble-button"
            dangerouslySetInnerHTML={{ __html: bubbleContent.buttonText(translations) }}
          />
        </div>
      </div>

      {typeof window !== 'undefined' &&
        isContactModalVisible &&
        ReactDOM.createPortal(
          <ContactModal onClose={() => toggleContactModalVisibility(false)} pageName={pageName} />,
          document.getElementById('main'),
        )}
    </>
  )
}

Bubble.propTypes = {
  pageName: string,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Bubble)`
      ${styles}
    `),
  ),
)
