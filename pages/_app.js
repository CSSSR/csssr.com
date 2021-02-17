import React from 'react'
import Router from 'next/router'
import App from 'next/app'
import * as Sentry from '@sentry/node'
import { ThemeProvider } from '@emotion/react'
import { customTheme } from '../themes/customTheme'
import '../utils/sentry'
import detectMsBrowserByUserAgent, { detectIe11 } from '../utils/detectMsBrowserByUserAgent'
import { detectMobileByUserAgent, detectTabletByUserAgent } from '../utils/detectDeviceByUserAgent'
import MsBrowserProvider from '../utils/msBrowserProvider'
import AbContext from '../utils/abContext'
import DeviceProvider from '../utils/deviceProvider'
import PagesListProvider from '../utils/pagesListProvider'
import L10nProvider from '../utils/l10nProvider'
import { parseUserAgent } from 'detect-browser'
import { checkIsInvalidDevice } from '../utils/isInvalidBrowser'
import Modal from '../components/ui-kit/Modal'
import BrowserModalContent from '../components/BrowserModalContent'
import { Global } from '@emotion/react'
import styles, { ie11Styles } from '../components/Layout/Layout.styles'

export default class MyApp extends App {
  // This reports errors before rendering, when fetching initial props
  static async getInitialProps(appContext) {
    const { ctx } = appContext

    try {
      const { Component } = appContext

      const pagesList = ctx.req
        ? ctx.req.app.locals.pagesList
        : window.__NEXT_DATA__.props.pageProps.pagesList
      const l10n = ctx.res ? ctx.res.locals.l10n : window.__NEXT_DATA__.props.pageProps.l10n
      const ab = ctx.res ? ctx.res.locals.ab : window.__NEXT_DATA__.props.pageProps.ab
      const userAgent = ctx.req ? ctx.req.headers['user-agent'] : window.navigator.userAgent

      let pageProps = {}

      if (Component.getInitialProps) {
        const componentProps = await Component.getInitialProps(ctx)

        const deviceData = parseUserAgent(userAgent)
        const isInvalidDevice =
          deviceData && checkIsInvalidDevice(deviceData.name, deviceData.version)

        pageProps = {
          ...pageProps,
          ...componentProps,
          isInvalidDevice,
        }
      }

      pageProps.userAgent = userAgent
      pageProps.isMobile = detectMobileByUserAgent(userAgent)
      pageProps.isTablet = detectTabletByUserAgent(userAgent)
      pageProps.pagesList = pagesList
      pageProps.l10n = l10n
      pageProps.ab = ab

      return { pageProps }
    } catch (error) {
      Sentry.withScope((scope) => {
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
  }

  static getDerivedStateFromError() {
    // В componentDidCatch отправляем в Sentry ошибку и показываем alert
    // Считаем ошибки обработанными и не ломаем страницу
    return {}
  }

  state = {
    isMobile: this.props.pageProps.isMobile,
    isTablet: this.props.pageProps.isTablet,
    isModalClosed: false,
  }

  // This reports errors thrown while rendering components
  componentDidCatch(error, errorInfo) {
    Sentry.captureException(error, { extra: errorInfo })
    const ruLanguage = /^ru/.test(this.props.pageProps.initialLanguage)
    window.alert(
      ruLanguage
        ? 'Произошла непредвиденная ошибка. Детали ошибки отправлены нашим разработчикам.'
        : 'An unexpected error has occurred. Error details have been sent to our developers.',
    )
  }

  componentDidMount() {
    this.mobileMediaQuery = window.matchMedia('(max-width: 767px)')
    this.mobileMediaQuery.addListener(this.handleMobileMediaMatch)
    this.handleMobileMediaMatch(this.mobileMediaQuery)

    this.tabletMediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 1279px)')
    this.tabletMediaQuery.addListener(this.handleTableMediaMatch)
    this.handleTableMediaMatch(this.tabletMediaQuery)

    window.addEventListener('keydown', function (event) {
      if (event.which === 9) {
        document.body.classList.add('outline')
      }
    })

    window.addEventListener('mousedown', function () {
      document.body.classList.remove('outline')
    })

    Router.events.on('routeChangeStart', this.handleRouteChangeStart)

    Router.events.on('routeChangeComplete', this.handleRouteChangeComplete)

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
    window.removeEventListener('resize', this.getVhSize)

    Router.events.off('routeChangeStart', this.handleRouteChangeStart)
    Router.events.off('routeChangeComplete', this.handleRouteChangeComplete)
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

  handleRouteChangeStart = () => {
    document.documentElement.classList.add('disable-smooth-scroll')
  }

  handleRouteChangeComplete = () => {
    if (window.dataLayer) {
      // setTimeout для того чтобы страница успела отрендериться и поменялся title
      setTimeout(() => window.dataLayer.push({ event: 'route_change_complete' }))
    }

    setTimeout(() => {
      document.documentElement.classList.remove('disable-smooth-scroll')
    })
  }

  handleCloseModal = () => {
    this.setState({ isModalClosed: true })
  }

  render() {
    const { isModalClosed } = this.state
    const { Component, pageProps } = this.props
    const isMsBrowser = detectMsBrowserByUserAgent(pageProps.userAgent)
    const isIe11Browser = detectIe11(pageProps.userAgent)

    // SSR calculate only
    const isInvalidDevice = !!pageProps.isInvalidDevice && !isModalClosed
    return (
      <>
        <Global styles={styles} />
        {isIe11Browser && <Global styles={ie11Styles} />}
        <AbContext.Provider value={pageProps.ab}>
          <L10nProvider l10n={pageProps.l10n}>
            <MsBrowserProvider isIe11={isIe11Browser} isMsBrowser={isMsBrowser}>
              <DeviceProvider isMobile={this.state.isMobile} isTablet={this.state.isTablet}>
                <ThemeProvider theme={customTheme}>
                  <PagesListProvider pagesList={pageProps.pagesList}>
                    {/* У Component isMobile прокидывается явно для обратной совместимости  */}
                    {/* TODO: перевести все компоненты на isMobile из контекста */}
                    <Component
                      {...pageProps}
                      isMobile={this.state.isMobile}
                      isMsBrowser={isMsBrowser}
                    />

                    {isInvalidDevice && (
                      <Modal withFixWidth onClose={this.handleCloseModal}>
                        <BrowserModalContent />
                      </Modal>
                    )}
                  </PagesListProvider>
                </ThemeProvider>
              </DeviceProvider>
            </MsBrowserProvider>
          </L10nProvider>
        </AbContext.Provider>
      </>
    )
  }
}
