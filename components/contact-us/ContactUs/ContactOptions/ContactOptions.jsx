import React from 'react'
import { string, object } from 'prop-types'

import ContactForm from './ContactForm'
import BookACall from '../BookACall'
import Heading from '../../../ui-kit/core-design/Heading'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../../utils/deviceProvider'

import styled from '@emotion/styled'
import styles from './ContactOptions.styles'

const ContactOptions = ({ className, l10n: { translations }, isMobile }) => (
  <section className={className}>
    <div className="form-wrap">
      <Heading
        as="h1"
        className="heading"
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: translations.contactUs.form.title }}
      />

      <h2 className="subheading">{translations.contactUs.form.subtitle}</h2>

      <div className="form-wrapper">
        <ContactForm />

        <div className="separator">
          <span className="separator-text">{translations.contactUs.form.separator}</span>
        </div>

        {!isMobile && <BookACall className="book-a-call" />}
      </div>
    </div>
  </section>
)

ContactOptions.propTypes = {
  className: string,
  l10n: object,
}

export default DeviceConsumer(
  L10nConsumer(styled(ContactOptions)`
    ${styles}
  `),
)
