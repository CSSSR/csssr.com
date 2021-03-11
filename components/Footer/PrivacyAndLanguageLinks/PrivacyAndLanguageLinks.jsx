import React from 'react'
import { string } from 'prop-types'
import { withRouter } from 'next/router'
import styled from '@emotion/styled'

import styles from './PrivacyAndLanguageLinks.styles'
import Link from '../../ui-kit/core-design/Link'
import Text from '../../ui-kit/core-design/Text'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { PagesListConsumer } from '../../../utils/pagesListProvider'
import getPagePathnameInLanguage from '../../../common/get-page-pathname-in-language'
import { ReactComponent as AllianceIcon } from '../../../static/icons/footer/alliance.svg'

const PrivacyAndLanguageLinks = ({
  className,
  l10n: { language, translations },
  pagesList,
  router: { pathname },
}) => {
  const languageToRedirect = language === 'ru' ? 'en' : 'ru'

  const otherLanguagePathname = getPagePathnameInLanguage(pathname, languageToRedirect, pagesList)

  return (
    <ul className={className}>
      <li>
        <Link
          className="link language-link"
          href={otherLanguagePathname}
          data-testid="Footer:link.language-link"
        >
          <Text
            className="link-text language"
            dangerouslySetInnerHTML={{ __html: languageToRedirect }}
            type="perforator"
            size="s"
          />
        </Link>
      </li>

      <li>
        <Link
          className="link internal-link"
          href={`/${language}/privacy-policy`}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="Footer:link:privacyPolicy"
        >
          <Text
            className="link-text privacy-policy"
            dangerouslySetInnerHTML={{ __html: translations.common.footer.privacy }}
            type="perforator"
            size="s"
          />
        </Link>

        {language === 'ru' && (
          <a
            className="link alliance"
            href="https://frontend.digital"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="Footer:link.allianceDigital"
          >
            <Text
              className="link-text alliance-text"
              dangerouslySetInnerHTML={{ __html: translations.common.footer.alliance.text }}
              type="perforator"
              size="s"
            />
            <AllianceIcon className="alliance-icon" />
            <Text
              className="link-text alliance-link"
              dangerouslySetInnerHTML={{ __html: translations.common.footer.alliance.link }}
              type="perforator"
              size="s"
            />
          </a>
        )}

        {language === 'en' && (
          <Link
            className="link policy-link internal-link"
            href={`/${language}/cookies-policy`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="Footer:link:cookiesPolicy"
          >
            <Text
              className="link-text cookies-policy"
              dangerouslySetInnerHTML={{ __html: translations.common.footer.cookies }}
              type="perforator"
              size="s"
            />
          </Link>
        )}
      </li>
    </ul>
  )
}
PrivacyAndLanguageLinks.propTypes = {
  className: string,
}

export default L10nConsumer(
  withRouter(
    PagesListConsumer(
      styled(PrivacyAndLanguageLinks)`
        ${styles}
      `,
    ),
  ),
)
