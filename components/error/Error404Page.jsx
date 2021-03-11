import React, { Fragment } from 'react'
import Link from 'next/link'
import * as Sentry from '@sentry/node'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import cn from 'classnames'

import styles from './ErrorPage.styles'
import Grid from '../ui-kit/core-design/Grid'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import DevTools from '../DevTools'
import Head from '../Head'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

import { ReactComponent as LogoIcon } from '../../static/icons/csssr_logo.svg'
import { ReactComponent as NotFound } from '../../static/icons/notFound.svg'

import navItems from '../../data/error/navItems'

import globalStyles from '../Layout/Layout.styles'
import { L10nConsumer } from '../../utils/l10nProvider'

const error404 = require.context('../../public/images/error/404?csssr-images')

class Error404Page extends React.Component {
  renderNav = ({ title, id, links }) => {
    const {
      l10n: { language, translations, locale },
    } = this.props

    const linkRegExp = /^(ftp|http|https):\/\/[^ "]+$/

    if (id === 'solutions' && language === 'ru') return

    return (
      <Fragment key={id}>
        <h3
          className="font_burger-menu"
          dangerouslySetInnerHTML={{ __html: title(translations) }}
          data-testid={`ErrorPage:menu:title.${id}`}
        />

        {links && (
          <ul className="menu">
            {links.map(({ id, title, href, useLocale }) => {
              if (id === 'design' && language === 'ru') return

              return (
                <li key={id}>
                  {linkRegExp.test(href) ? (
                    <a
                      data-testid={`ErrorPage:menu:link.${id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menu-item"
                      href={`${href}/${useLocale ? language : ''}`}
                      dangerouslySetInnerHTML={{ __html: title(translations) }}
                    />
                  ) : (
                    <Link href={`/${useLocale ? locale : language}/${href}`}>
                      <a
                        data-testid={`ErrorPage:menu:link.${id}`}
                        className="menu-item"
                        dangerouslySetInnerHTML={{ __html: title(translations) }}
                      />
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </Fragment>
    )
  }

  render() {
    if (!this.props.l10n || !this.props.l10n.language) {
      Sentry.withScope((scope) => {
        scope.setExtra('l10n', this.props.l10n)
        Sentry.captureMessage(
          'Что-то не так с определением языка, смотри url и дополнительные параметры',
        )
      })
    }

    const {
      className,
      l10n: { language, translations },
    } = this.props

    const rootUrl = `/${language}`

    return (
      <div data-testid="ErrorPage">
        <Global styles={globalStyles} />
        <DevTools />

        <Head
          title={translations.error.meta.title}
          description={translations.error.meta.description}
        >
          <meta name="robots" content="noindex" />
        </Head>

        <Grid as="header" className={cn(className, `header_404`)}></Grid>

        <Grid as="main" className={cn(className, `error-code_404`)}>
          <Grid as="div" className="fixed">
            <Link href={rootUrl}>
              <a className="logo" data-testid="ErrorPage:link:logo">
                <LogoIcon width="100%" height="100%" />
              </a>
            </Link>
            <h1
              className="page-title font_h1-slab"
              dangerouslySetInnerHTML={{ __html: translations.error.errors.notFound.title }}
            />

            <div className="picture-container">
              <PictureSmart className="picture" requireImages={error404} />

              <div className={'code-wrapper'}>
                <NotFound width="auto" height="100%" />
              </div>
            </div>
          </Grid>

          <h2
            className="list-title font_subhead-slab"
            dangerouslySetInnerHTML={{
              __html: translations.error.errors.notFound.subtitle,
            }}
          />
          <Fragment>
            <div className="arrow-wrapper" />
            <div className="navList">{navItems.map(this.renderNav)}</div>
          </Fragment>
        </Grid>
      </div>
    )
  }
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Error404Page)`
    ${styles}
  `),
)
