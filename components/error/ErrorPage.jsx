import React, { Fragment } from 'react'
import Link from 'next/link'
import * as Sentry from '@sentry/node'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import cn from 'classnames'

import styles from './ErrorPage.styles'
import Grid from '../ui-kit/core-design/Grid'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import DevTools from '../DevTools'
import Head from '../Head'
import PictureForAllResolutions from '../PictureForAllResolutions'

import LogoIcon from '../../static/icons/csssr_logo.svg'
import LineFromTopToBottomIcon from '../../static/icons/lineFromTopToBottom.svg'
import NotFound from '../../static/icons/notFound.svg'
import ServerError from '../../static/icons/serverError.svg'

import navItems from '../../data/error/navItems'

import globalStyles from '../Layout/Layout.styles'

const possibleStatusCodes = [404, 500]

const defaultStatusCode = 500

const titleLocalesByStatusCode = {
  404: 'error:errors.notFound.title',
  500: 'error:errors.serverError.title',
}

const subtitleLocalesByStatusCode = {
  404: 'error:errors.notFound.subtitle',
  500: 'error:errors.serverError.subtitle',
}

const codeIconByStatusCode = {
  404: <NotFound width="auto" height="100%" />,
  500: <ServerError width="auto" height="100%" />,
}

class ErrorPage extends React.Component {
  renderNav = ({ lng, items: { title, id, links } }) => {
    const linkRegExp = /^(ftp|http|https):\/\/[^ "]+$/

    if (id === 'products' && lng === 'ru') return
    return (
      <span key={id}>
        <h3
          className="font_burger-menu"
          dangerouslySetInnerHTML={{ __html: this.props.t(title) }}
        />

        {links && (
          <ul className="menu">
            {links.map(({ id, title, href }) => {
              if (id === 'express' && lng === 'ru') return

              return (
                <li key={id}>
                  {linkRegExp.test(href) ? (
                    <Link href={href}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="menu-item"
                        dangerouslySetInnerHTML={{ __html: this.props.t(title) }}
                      />
                    </Link>
                  ) : (
                    <Link href={`/${lng}/${href}`}>
                      <a
                        className="menu-item"
                        dangerouslySetInnerHTML={{ __html: this.props.t(title) }}
                      />
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </span>
    )
  }

  render() {
    const { className, t, lng: lngCodeFromI18n, i18n } = this.props

    const statusCode = possibleStatusCodes.includes(this.props.statusCode)
      ? this.props.statusCode
      : defaultStatusCode

    const lng = i18n.services.languageUtils.getLanguagePartFromCode(lngCodeFromI18n)
    const rootUrl = `/${lng}`

    if (!lng) {
      Sentry.withScope((scope) => {
        scope.setExtra('lngCodeFromI18n', lngCodeFromI18n)
        scope.setExtra('lng', lng)
        Sentry.captureMessage(
          'Опять что-то не так с определением языка, смотри url и дополнительные параметры',
        )
      })
    }

    return (
      <Fragment>
        <Global styles={globalStyles} />
        <DevTools />

        <Head title={t('error:meta.title')} description={t('error:meta.description')}>
          <meta name="robots" content="noindex" />
        </Head>

        <Grid as="header" className={className}>
          <Link href={rootUrl}>
            <a className="logo">
              <LogoIcon width="100%" height="100%" />
            </a>
          </Link>
        </Grid>

        <Grid as="main" className={cn(className, `error-code_${statusCode}`)}>
          <h1
            className="font_h1-slab"
            dangerouslySetInnerHTML={{ __html: t(`${titleLocalesByStatusCode[statusCode]}`) }}
          />

          <PictureForAllResolutions
            className="picture"
            image={{ namespace: 'error', key: `${statusCode}`, alt: `${statusCode}` }}
          />

          <div className={'code-wrapper'}>{codeIconByStatusCode[statusCode]}</div>

          <h2
            className="font_subhead-slab"
            dangerouslySetInnerHTML={{
              __html: [
                t(`${subtitleLocalesByStatusCode[statusCode]}`),
                statusCode === 500
                  ? '<a style="color: #345eff" href="mailto:sales@csssr.io">sales@csssr.io</a>'
                  : null,
              ].join(''),
            }}
          />
          {statusCode === 404 && (
            <Fragment>
              <div className="arrow-wrapper">
                <LineFromTopToBottomIcon width="100%" height="100%" />
              </div>

              <div className="navList">
                {navItems.map((items) => this.renderNav({ lng, items }))}
              </div>
            </Fragment>
          )}
        </Grid>
      </Fragment>
    )
  }
}

export default MsBrowserConsumer(styled(ErrorPage)`
  ${styles}
`)
