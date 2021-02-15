import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Nav.styles'

import LinksList from './LinksList'
import Heading from '../../ui-kit/core-design/Heading'

import { nav } from '../../../data/footerLinks'
import { L10nConsumer } from '../../../utils/l10nProvider'

const Nav = ({ className, l10n: { translations, language } }) => (
  <nav className={className}>
    {nav.map(({ id, links }) => {
      if (language === 'ru' && id === 'solutions') {
        return
      }

      return (
        <div key={id} className="nav-item">
          <Heading
            as="p"
            className="title"
            type="regular"
            size="s"
            dangerouslySetInnerHTML={{ __html: translations.common.footer[id].title }}
          />

          <LinksList linksGroupName={id} links={links} />
        </div>
      )
    })}
  </nav>
)

Nav.propTypes = {
  className: string,
}

export default L10nConsumer(styled(Nav)`
  ${styles}
`)
