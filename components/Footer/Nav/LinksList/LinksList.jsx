import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './LinksList.styles'

import Link from '../../../ui-kit/core-design/Link'

import { L10nConsumer } from '../../../../utils/l10nProvider'

const linkRegExp = /^(ftp|http|https):\/\/[^ "]+$/
const LinksList = ({
  className,
  linksGroupName,
  links,
  l10n: { translations, language, locale },
}) => (
  <ul className={className}>
    {links.map(({ id, href, useLocale }) => {
      if (language === 'ru' && id === 'design') {
        return
      }

      return (
        <li key={id}>
          {linkRegExp.test(href) ? (
            <Link
              href={`${href}/${useLocale ? language : ''}`}
              className="link"
              type="list"
              size="s"
              target="_blank"
              rel="noopener nofollow"
              dangerouslySetInnerHTML={{ __html: translations.common.footer[linksGroupName][id] }}
              data-testid={`Footer:link:${id}`}
            />
          ) : (
            <Link
              href={`/${useLocale ? locale : language}/${href}`}
              className="link"
              type="list"
              size="s"
              dangerouslySetInnerHTML={{ __html: translations.common.footer[linksGroupName][id] }}
              data-testid={`Footer:link:${id}`}
              isNextLink
            />
          )}
        </li>
      )
    })}
  </ul>
)

LinksList.propTypes = {
  className: string,
  linksGroupName: string,
  links: arrayOf(
    shape({
      id: string,
      href: string,
    }),
  ),
}

export default L10nConsumer(styled(LinksList)`
  ${styles}
`)
