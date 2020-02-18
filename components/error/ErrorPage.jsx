import React, { Fragment } from 'react'
import Link from 'next/link'
import * as Sentry from '@sentry/node'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles, { pictureStyles } from './ErrorPage.styles'
import Grid from '../ui-kit/core-design/Grid'
import DevTools from '../DevTools'
import Head from '../Head'
import PictureForAllResolutions from '../PictureForAllResolutions'
import LogoIcon from '../../static/icons/csssr_logo.svg'
import LineFromTopToBottomIcon from '../../static/icons/lineFromTopToBottom.svg'
import NotFound from '../../static/icons/notFound.svg'
import ServerError from '../../static/icons/serverError.svg'
/**
 * Прописать NavItems как в Header когда мы его начнем делать
 */
import navItems from '../../data/error/navItems'
import globalStyles from '../Layout/Layout.styles'

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
  //   renderNav = ({ sectionTitle, href }) => (
  //     <li key={sectionTitle}>
  //       <a
  //         href={href}
  //         className="font_burger-menu"
  //         dangerouslySetInnerHTML={{ __html: this.props.t(`${sectionTitle}`) }}
  //       />
  //     </li>
  //   )

  render() {
    const { className, t, lng: lngCodeFromI18n, statusCode = 500, i18n } = this.props
    const lng = i18n.services.languageUtils.getLanguagePartFromCode(lngCodeFromI18n)
    const rootUrl = `/${lng}`

    if (!navItems[lng]) {
      Sentry.withScope(scope => {
        scope.setExtra('lngCodeFromI18n', lngCodeFromI18n)
        scope.setExtra('lng', lng)
        Sentry.captureMessage(
          'Опять что-то не так с определением языка, смотри url и дополнительные параметры',
        )
      })
    }

    return (
      <Fragment>
        <Global styles={globalStyles.base} />
        <Global styles={globalStyles.font_faces} />
        <Global styles={globalStyles.fonts} />
        <DevTools />

        <Head title={t('error:meta.title')} description={t('error:meta.description')} />

        <Grid as="header" className={className}>
          <Link href={rootUrl}>
            <a>
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
            css={pictureStyles}
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

              {/**
               * Прописать NavItems как в Header когда мы его начнем делать
               */}
              {/* <ul>{navItems[lng].map(this.renderNav)}</ul> */}
            </Fragment>
          )}
        </Grid>
      </Fragment>
    )
  }
}

export default styled(ErrorPage)`
  ${styles}
`