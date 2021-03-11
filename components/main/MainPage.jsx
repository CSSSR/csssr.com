import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import * as Sentry from '@sentry/node'

import Layout from '../Layout'
import Bubble from '../Bubble'
import Hero from './Hero'
import Services from './Services'
import OurFeatures from './OurFeatures'
import AboutUs from './AboutUs'
import Projects from './Projects'
import Vacancies from './Vacancies'
import Cases from './Cases'
import Head from '../Head'
import csssrSpaceOrigin from '../../utils/csssrSpaceOrigin'

class MainPage extends PureComponent {
  static async getInitialProps(ctx) {
    const l10n = ctx.res ? ctx.res.locals.l10n : window.__NEXT_DATA__.props.pageProps.l10n
    let vacancies

    try {
      const res = await fetch(
        `${csssrSpaceOrigin}/api/public/vacancies/active?locale=${l10n.locale}`,
      )
      vacancies = await res.json()
    } catch (error) {
      vacancies = []

      Sentry.captureException(error)
    }

    return { vacancies }
  }

  render() {
    const {
      vacancies,
      l10n: { translations },
    } = this.props

    const pageName = 'main'
    return (
      <Layout pageName={pageName}>
        <Head
          title={translations.main.meta.title}
          templateTitle=""
          description={translations.main.meta.description}
        />
        <Hero />
        <Services />
        <Cases />
        <OurFeatures />
        <AboutUs />
        <Projects />
        <Vacancies vacancies={vacancies} />
        <Bubble pageName={pageName} />
      </Layout>
    )
  }
}

MainPage.propTypes = {
  className: string,
}

export default MainPage
