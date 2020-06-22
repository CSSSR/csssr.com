import React, { Fragment, useContext, useEffect } from 'react'
import NextHead from 'next/head'
import { withRouter } from 'next/router'
import { node, number, shape, string } from 'prop-types'
import { L10nConsumer } from '../utils/l10nProvider'
import unescapeHtmlEntities from '../utils/unescapeHtmlEntities'
import StructuredData from './StructuredData'
import { Ie11BrowserContext } from '../utils/msBrowserProvider'
import { PagesListConsumer } from '../utils/pagesListProvider'

// Можно здесь честно указать origin, а не захардкодить
const origin = 'https://csssr.com'

const Head = (props) => {
  const [, , , pathname] = props.router.pathname.match(/^\/(.*?)(\/(.*))?$/)

  let localePageCounter = 0
  props.pagesList.map((page) => {
    if (page.pathname === pathname) localePageCounter += 1
  })

  const isIe11 = useContext(Ie11BrowserContext)

  // При роутинге в ie11 picturefill не подгружает правильные размеры изображений.
  // Явный вызов плагина при каждом рендере исправляет баг
  useEffect(() => {
    if (isIe11) {
      // eslint-disable-next-line no-undef
      picturefill()
    }
  })

  return (
    <NextHead>
      <link
        rel="preload"
        href={require(`../static/fonts/Roboto_Slab_normal_300_${props.l10n.language}.woff2`)}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={require(`../static/fonts/Roboto_normal_100_${props.l10n.language}.woff2`)}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={require(`../static/fonts/Roboto_normal_900_${props.l10n.language}.woff2`)}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      {(!pathname ||
        (localePageCounter > 1 && ['job', 'jobs', 'jobs-faq'].indexOf(pathname) === -1)) && (
        <Fragment>
          <link
            rel="alternate"
            hrefLang="x-default"
            href={!pathname ? 'https://csssr.com/en' : `https://csssr.com/en/${pathname}`}
          />
          <link
            rel="alternate"
            hrefLang="ru"
            href={!pathname ? 'https://csssr.com/ru' : `https://csssr.com/ru/${pathname}`}
          />
          <link
            rel="alternate"
            hrefLang="en"
            href={!pathname ? 'https://csssr.com/en' : `https://csssr.com/en/${pathname}`}
          />
        </Fragment>
      )}
      {pathname === 'jobs' && (
        <Fragment>
          <link rel="alternate" hrefLang="x-default" href={`https://csssr.com/en-us/${pathname}`} />
          <link rel="alternate" hrefLang="ru-ru" href={`https://csssr.com/ru-ru/${pathname}`} />
          <link rel="alternate" hrefLang="ru-ee" href={`https://csssr.com/ru-ee/${pathname}`} />
          <link rel="alternate" hrefLang="en-ee" href={`https://csssr.com/en-ee/${pathname}`} />
          <link rel="alternate" hrefLang="en-sg" href={`https://csssr.com/en-sg/${pathname}`} />
          <link rel="alternate" hrefLang="en-us" href={`https://csssr.com/en-us/${pathname}`} />
        </Fragment>
      )}
      <script
        dangerouslySetInnerHTML={{
          __html: `
        // https://stackoverflow.com/a/27232658
        // https://github.com/bfred-it/supports-webp/blob/master/index.js
        function canUseWebP() {
            const canvas = document.createElement('canvas')
            canvas.width = canvas.height = 1;
            return canvas.toDataURL &&
              canvas.toDataURL('image/webp') &&
              canvas.toDataURL('image/webp').indexOf('image/webp') === 5
        }
        if (canUseWebP()) {
            document.documentElement.classList.add('webp')
        }
      `,
        }}
      />
      {isIe11 && (
        <Fragment>
          <script
            crossOrigin="anonymous"
            src="https://polyfill.io/v3/polyfill.min.js?features=es6%2Ces7%2Cfetch%2CSymbol.asyncIterator"
          />
          <script
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.3/picturefill.min.js"
          />
        </Fragment>
      )}

      <meta charSet="utf-8" />
      <title>{`${props.title}${props.templateTitle}`}</title>
      {props.description && (
        <meta name="description" content={unescapeHtmlEntities(props.description)} />
      )}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {!props.customFavicons && (
        <Fragment>
          <link
            rel="shortcut icon"
            href="/static/icons/favicon/favicon.ico"
            type="image/vnd.microsoft.icon"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/icons/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/icons/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/icons/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/icons/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/icons/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta name="msapplication-config" content="/static/icons/favicon/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
        </Fragment>
      )}

      <meta property="og:title" content={props.title || ''} />
      <meta property="og:url" content={`${origin}${props.router.asPath}`} />
      <meta property="og:type" content="website" />
      {props.description && (
        <meta property="og:description" content={unescapeHtmlEntities(props.description)} />
      )}
      <meta name="twitter:site" content={`${origin}${props.router.asPath}`} />
      <meta name="twitter:card" content="summary_large_image" />
      {props.ogImage && (
        <Fragment>
          <meta name="twitter:image" content={`${origin}${props.ogImage.url}`} />
          <meta property="og:image" content={`${origin}${props.ogImage.url}`} />
          <meta property="og:image:width" content={props.ogImage.width} />
          <meta property="og:image:height" content={props.ogImage.height} />
        </Fragment>
      )}
      <meta property="fb:app_id" content="416195255787519" />
      {props.structuredData}
      {props.children}
    </NextHead>
  )
}

Head.propTypes = {
  title: string,
  templateTitle: string,
  description: string,
  ogImage: shape({
    url: string,
    width: number,
    height: number,
  }),
  structuredData: node,
}

Head.defaultProps = {
  structuredData: <StructuredData />,
  templateTitle: ' | CSSSR',
  ogImage: {
    url: require('../static/images/ogImage.png'),
    width: 3840,
    height: 1280,
  },
}

export default withRouter(PagesListConsumer(L10nConsumer(Head)))
