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
import { ReactComponent as ServerError } from '../../static/icons/serverError.svg'

import globalStyles from '../Layout/Layout.styles'
import { L10nConsumer } from '../../utils/l10nProvider'

const possibleStatusCodes = [500]

const defaultStatusCode = 500

const errorNameByStatusCode = {
  500: 'serverError',
}

const images = {
  500: require.context('../../public/images/error/500?csssr-images'),
}

const codeIconByStatusCode = {
  500: <ServerError width="100%" height="100%" />,
}

class ErrorPage extends React.Component {
  render() {
    const {
      className,
      l10n: { language, translations },
    } = this.props

    const statusCode =
      possibleStatusCodes.indexOf(this.props.statusCode) !== -1
        ? this.props.statusCode
        : defaultStatusCode

    const rootUrl = `/${language}`

    if (!language) {
      Sentry.withScope((scope) => {
        scope.setExtra('language', language)
        Sentry.captureMessage(
          'Опять что-то не так с определением языка, смотри url и дополнительные параметры',
        )
      })
    }

    return (
      <Fragment>
        <Global styles={globalStyles} />
        <DevTools />

        <Head
          title={translations.error.meta.title}
          description={translations.error.meta.description}
        >
          <meta name="robots" content="noindex" />
        </Head>

        <Grid as="header" className={className}>
          <Link href={rootUrl}>
            <a className="logo" data-testid="ErrorPage:link:logo">
              <LogoIcon width="100%" height="100%" />
            </a>
          </Link>
        </Grid>

        <Grid as="main" className={cn(className, `error-code_${statusCode}`)}>
          <h1
            className="font_h1-slab"
            dangerouslySetInnerHTML={{
              __html: translations.error.errors[errorNameByStatusCode[statusCode]].title,
            }}
          />

          <div className="picture-container">
            <PictureSmart className="picture" requireImages={images[statusCode]} alt={statusCode} />
          </div>

          <div className={'code-wrapper'}>{codeIconByStatusCode[statusCode]}</div>

          <h2
            className="font_subhead-slab"
            dangerouslySetInnerHTML={{
              __html: [
                translations.error.errors[errorNameByStatusCode[statusCode]].subtitle,
                statusCode === 500
                  ? '<a style="color: #345eff" href="mailto:launch@csssr.com" data-testid="ErrorPage:link:email">launch@csssr.com</a>'
                  : null,
              ].join(''),
            }}
          />
        </Grid>
      </Fragment>
    )
  }
}

export default L10nConsumer(
  MsBrowserConsumer(styled(ErrorPage)`
    ${styles}
  `),
)
