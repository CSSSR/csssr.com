import React from 'react'
import Layout from '../Layout'
import Bubble from '../Bubble'
import { L10nConsumer } from '../../utils/l10nProvider'
import Head from '../Head'
import Hero from './Hero'
import DesignCases from './DesignCases'
import DevBlock from './DevBlock'

import heroContent from '../../data/design/hero'
import designCasesContent from '../../data/design/designCases'

const DesignPage = ({ l10n: { translations } }) => {
  const pageName = 'design'

  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.design.meta.title}
        description={translations.design.meta.description}
      />

      <Hero content={heroContent} />
      <DesignCases content={designCasesContent} />
      <DevBlock />
      <Bubble pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(DesignPage)
