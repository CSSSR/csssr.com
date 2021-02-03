import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Bubble.styles'
import Button from '../ui-kit/core-design/Button'
import ContactModal from '../ContactModal'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import { L10nConsumer } from '../../utils/l10nProvider'
import { DeviceConsumer } from '../../utils/deviceProvider'
import ideaContent from '../../data/projects/idea'

const Bubble = ({ className, pageName, l10n: { translations } }) => {
  const [isContactModalVisible, toggleContactModalVisibility] = useState(false)

  return (
    <>
      <div className={className} data-testid="projects:block.bubbleButton">
        <div className="button-wrapper">
          <Button
            data-testid={`projects:button.contactUs`}
            onClick={() => toggleContactModalVisibility(true)}
            className="bubble-button"
            dangerouslySetInnerHTML={{ __html: ideaContent.button(translations) }}
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
