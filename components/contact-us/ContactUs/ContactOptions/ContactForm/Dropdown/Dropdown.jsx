import React, { useState } from 'react'
import { string } from 'prop-types'
import cn from 'classnames'

import styled from '@emotion/styled'
import styles from './Dropdown.styles'

import { TypeInquiryConsumer } from '../../../../../../utils/typeInquiryContext'
import { L10nConsumer } from '../../../../../../utils/l10nProvider'

import items from '../../../../../../data/contact-us/typeInquiry'

const Dropdown = ({ className, inquiryTypeId, setInquiryTypeId, l10n: { translations } }) => {
  const [isOpen, toggleIsOpen] = useState(false)

  const handleClick = (event) => {
    event.preventDefault()
    toggleIsOpen((prevState) => !prevState)
  }

  const selectItem = (id) => (event) => {
    event.preventDefault()
    setInquiryTypeId(id)
    toggleIsOpen(false)
  }

  const { value } = items.filter((item) => item.id === inquiryTypeId)[0]

  return (
    <div className={cn(className, { _active: isOpen })} data-testid="Contacts:block:dropdown">
      <button
        type="button"
        onClick={handleClick}
        className={cn('button', { _active: isOpen })}
        data-testid="Contacts:button:dropdown.toggle"
      >
        {value(translations)}
      </button>

      <div className={cn('label', { _active: isOpen })}>
        {translations.contactUs.form.typeInquiry.label}
      </div>

      {isOpen && (
        <div className="popup">
          {items.map(({ id, value }) => (
            <button
              className="popup-item"
              type="button"
              key={id}
              disabled={id === inquiryTypeId}
              onClick={selectItem(id)}
              data-testid={`Contacts:button:dropdown.option.${id}`}
            >
              {value(translations)}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

Dropdown.propTypes = {
  className: string,
  testId: string,
}

export default L10nConsumer(
  TypeInquiryConsumer(styled(Dropdown)`
    ${styles}
  `),
)
