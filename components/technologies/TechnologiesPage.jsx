import React from 'react'
import Layout from '../Layout'
import Head from '../Head'
// import Form from '../ContactFormWrapper'
import Bubble from '../Bubble'
import Hero from './Hero'
import Frontend from './Frontend'
import Autotests from './Autotests'
import Backend from './Backend'
import { L10nConsumer } from '../../utils/l10nProvider'

const TechnologiesPage = ({ l10n: { translations } }) => {
  const pageName = 'technologies'

  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.technologies.meta.title}
        description={translations.technologies.meta.description}
      />
      <Hero />
      <Frontend />
      <Autotests />
      <Backend />
      {/* <Form pageName={pageName} /> */}
      <Bubble pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(TechnologiesPage)
