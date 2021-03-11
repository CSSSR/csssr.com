import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './SocialLinks.styles'

import { socials } from '../../../data/footerLinks'
import { L10nConsumer } from '../../../utils/l10nProvider'

const SocialLinks = ({ className, l10n: { language } }) => (
  <ul className={className}>
    {socials.map(({ id, href, icon: Icon }) => {
      if (language !== 'ru') {
        if (id === 'soundcloud' || id === 'telegram' || id === 'twitter' || id === 'vk') {
          return
        }
      }
      return (
        <li key={id}>
          <a href={href} target="_blank" rel="noopener nofollow" data-testid={`Footer:link:${id}`}>
            <Icon />
          </a>
        </li>
      )
    })}
  </ul>
)

SocialLinks.propTypes = {
  className: string,
}

export default L10nConsumer(styled(SocialLinks)`
  ${styles}
`)
