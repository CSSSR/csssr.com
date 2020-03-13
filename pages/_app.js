import React from 'react'
import Router from 'next/router'
import App from 'next/app'
import { I18nextProvider } from 'react-i18next'
import * as Sentry from '@sentry/node'
import { ThemeProvider } from 'emotion-theming'
import { customTheme } from '../themes/customTheme'
import initialI18nInstance from '../common/i18n'
import '../utils/sentry'
import detectMsBrowserByUserAgent, { detectIe11 } from '../utils/detectMsBrowserByUserAgent'
import { detectMobileByUserAgent, detectTabletByUserAgent } from '../utils/detectDeviceByUserAgent'
import MsBrowserProvider from '../utils/msBrowserProvider'
import DeviceProvider from '../utils/deviceProvider'
import PagesListProvider from '../utils/pagesListProvider'
import allNamespaces from '../common/all-namespaces'

const getI18nInitialProps = ctx => {
  let i18nInitialProps = {}

  if (ctx.req) {
    if (!ctx.req.i18n) {
      return {}
    }

    ctx.req.i18n.toJSON = () => null // do not serialize i18next instance and send to client

    const initialI18nStore = {}
    ctx.req.i18n.languages.forEach(language => {
      initialI18nStore[language] = {}
      allNamespaces.forEach(ns => {
        initialI18nStore[language][ns] =
          (ctx.req.i18n.services.resourceStore.data[language] || {})[ns] || {}
      })
    })

    i18nInitialProps = {
      i18n: ctx.req.i18n, // use the instance on req - fixed language on request (avoid issues in race conditions with lngs of different users)
      initialI18nStore,
      initialLanguage: ctx.req.i18n.language,
    }
  }

  return i18nInitialProps
}

export default class MyApp extends App {
  // This reports errors before rendering, when fetching initial props
  static async getInitialProps(appContext) {
    const { Component, ctx } = appContext

    const pagesList = ctx.res ? ctx.res.locals.pagesList : window.__NEXT_DATA__.props.pagesList
    const userAgent = ctx.req ? ctx.req.headers['user-agent'] : window.navigator.userAgent

    let pageProps = getI18nInitialProps(ctx)

    try {
      if (Component.getInitialProps) {
        const componentProps = await Component.getInitialProps(ctx)

        pageProps = {
          ...pageProps,
          ...componentProps,
        }
      }
    } catch (error) {
      Sentry.withScope(scope => {
        const { req, res, errorInfo, query, pathname } = ctx

        if (error.statusCode) {
          scope.setExtra('statusCode', error.statusCode)
        }

        if (res && res.statusCode) {
          scope.setExtra('statusCode', res.statusCode)
        }

        if (process.browser) {
          scope.setTag('ssr', false)
          scope.setExtra('query', query)
          scope.setExtra('pathname', pathname)
        } else {
          scope.setTag('ssr', true)
          scope.setExtra('url', req.url)
          scope.setExtra('method', req.method)
          scope.setExtra('headers', req.headers)
          scope.setExtra('params', req.params)
          scope.setExtra('query', req.query)
        }

        if (errorInfo) {
          scope.setExtra('componentStack', errorInfo.componentStack)
        }

        Sentry.captureException(error)
      })

      throw error
    }

    pageProps.userAgent = userAgent
    pageProps.isMobile = detectMobileByUserAgent(userAgent)
    pageProps.isTablet = detectTabletByUserAgent(userAgent)

    return {
      pageProps,
      pagesList,
    }
  }

  state = {
    isMobile: this.props.pageProps.isMobile,
    isTablet: this.props.pageProps.isTablet,
  }

  // This reports errors thrown while rendering components
  componentDidCatch(error, errorInfo) {
    Sentry.captureException(error, { extra: errorInfo })
    super.componentDidCatch(error, errorInfo)
  }

  componentDidMount() {
    this.mobileMediaQuery = window.matchMedia('(max-width: 767px)')
    this.mobileMediaQuery.addListener(this.handleMobileMediaMatch)
    this.handleMobileMediaMatch(this.mobileMediaQuery)

    this.tabletMediaQuery = window.matchMedia('(max-width: 1279px)')
    this.tabletMediaQuery.addListener(this.handleTableMediaMatch)
    this.handleTableMediaMatch(this.tabletMediaQuery)

    window.addEventListener('keydown', function(event) {
      if (event.which === 9) {
        document.body.classList.add('outline')
      }
    })

    window.addEventListener('click', function() {
      document.body.classList.remove('outline')
    })

    Router.events.on('routeChangeComplete', this.handleRouteChange)

    /**
     * Определяем кастомный vh для правильного отображения Header на мобилках
     * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
     */
    this.getVhSize()

    window.addEventListener('resize', this.getVhSize)
  }

  componentWillUnmount() {
    this.mobileMediaQuery.removeListener(this.handleMobileMediaMatch)
    this.tabletMediaQuery.removeListener(this.handleTableMediaMatch)
    window.removeListener('resize', this.getVhSize)

    Router.events.off('routeChangeComplete', this.handleRouteChange)
  }

  getVhSize = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  handleMobileMediaMatch = ({ matches }) =>
    this.setState({
      isMobile: matches,
    })

  handleTableMediaMatch = ({ matches }) =>
    this.setState({
      isTablet: matches,
    })

  handleRouteChange = () => {
    if (window.dataLayer) {
      // setTimeout для того чтобы страница успела отрендериться и поменялся title
      setTimeout(() => window.dataLayer.push({ event: 'route_change_complete' }))
    }
  }

  render() {
    const { Component, pageProps, pagesList } = this.props
    const { i18n, initialI18nStore, initialLanguage } = pageProps || {}
    const isMsBrowser = detectMsBrowserByUserAgent(pageProps.userAgent)
    const isIe11Browser = detectIe11(pageProps.userAgent)

    return (
      <I18nextProvider
        i18n={i18n || initialI18nInstance}
        initialI18nStore={initialI18nStore}
        initialLanguage={initialLanguage}
      >
        <MsBrowserProvider isIe11={isIe11Browser} isMsBrowser={isMsBrowser}>
          <DeviceProvider isMobile={this.state.isMobile} isTablet={this.state.isTablet}>
            <ThemeProvider theme={customTheme}>
              <PagesListProvider pagesList={pagesList}>
                {/* У Component isMobile прокидывается явно для обратной совместимости  */}
                {/* TODO: перевести все компоненты на isMobile из контекста */}
                <Component
                  {...pageProps}
                  isMobile={this.state.isMobile}
                  isMsBrowser={isMsBrowser}
                />
              </PagesListProvider>
            </ThemeProvider>
          </DeviceProvider>
        </MsBrowserProvider>
      </I18nextProvider>
    )
  }
}
