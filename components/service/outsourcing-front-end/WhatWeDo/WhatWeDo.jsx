import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './WhatWeDo.styles'
import { L10nConsumer } from '../../../../utils/l10nProvider'

import List from './List'
import ContactUs from './ContactUs'
import Heading from '../../../ui-kit/core-design/Heading'

const WhatWeDo = ({ className, pageName, l10n: { translations } }) => (
  <section className={className} data-testid="Outsourcing:block:whatWeDo">
    <Heading
      className="title"
      as="h2"
      dangerouslySetInnerHTML={{ __html: translations.outsourcingFrontEnd.whatWeDo.title }}
      type="slab"
      size="m"
    />
    <List />
    <ContactUs pageName={pageName} />
  </section>
)

WhatWeDo.propTypes = {
  className: string,
  pageName: string,
}

export default L10nConsumer(styled(WhatWeDo)`
  ${styles}
`)
