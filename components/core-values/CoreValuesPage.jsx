import React from 'react'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'

import Greeting from './Greeting'
import ValuesSection from './ValuesSection'
import Form from './Form'
import Head from '../Head'

const CoreValues = ({ l10n: { translations } }) => {
  const pageName = 'coreValues'

  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.coreValues.meta.title}
        description={translations.coreValues.meta.description}
      />

      <Greeting />

      <ValuesSection />

      <Form pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(CoreValues)
