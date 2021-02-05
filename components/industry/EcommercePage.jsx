import React from 'react'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'

import Head from '../Head'
import Bubble from '../Bubble'
import Idea from '../Idea'
import Greeting from './Greeting'
import OurClients from './OurClients'
import Facts from './Facts'
import CoreValues from './CoreValues'
import Projects from './Projects'

import greeting from '../../data/industry/ecommerce/greeting'
import ourClients from '../../data/industry/ecommerce/logos'
import coreValues from '../../data/industry/coreValues'
import facts from '../../data/industry/facts'
import { eCommerceProjects } from '../../data/industry/projects'

const EcommercePage = ({ l10n: { translations } }) => {
  const pageName = 'industry'
  const page = 'ecommerce'
  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.industry.meta.ecommerce.title}
        description={translations.industry.meta.ecommerce.description}
      />
      <Greeting id="greeting" content={greeting} pageName={pageName} />
      <OurClients id="ourClients" page={page} content={ourClients} />
      <Facts id="facts" content={facts} />
      <CoreValues id="core-values" content={coreValues} />
      <Projects id="projects" content={eCommerceProjects} />
      <Idea />
      <Bubble pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(EcommercePage)
