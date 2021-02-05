import React from 'react'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'

import Head from '../Head'
import Idea from '../Idea'
import Bubble from '../Bubble'
import Greeting from './Greeting'
import OurClients from './OurClients'
import Facts from './Facts'
import CoreValues from './CoreValues'
import Projects from './Projects'

import greeting from '../../data/industry/informationTechnology/greeting'
import ourClients from '../../data/industry/informationTechnology/logos'
import coreValues from '../../data/industry/coreValues'
import facts from '../../data/industry/facts'
import { informationTechnologyProjects } from '../../data/industry/projects'

const InformationTechnologyPage = ({ l10n: { translations } }) => {
  const pageName = 'industry'
  const page = 'informationTechnology'
  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.industry.meta.informationTechnology.title}
        description={translations.industry.meta.informationTechnology.description}
      />
      <Greeting id="greeting" content={greeting} pageName={pageName} />
      <OurClients id="ourClients" page={page} content={ourClients} />
      <Facts id="facts" content={facts} />
      <CoreValues id="core-values" content={coreValues} />
      <Projects id="projects" content={informationTechnologyProjects} />
      <Idea />
      <Bubble pageName={pageName} />
    </Layout>
  )
}

InformationTechnologyPage.propTypes = {}

export default L10nConsumer(InformationTechnologyPage)
