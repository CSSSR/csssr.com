import React from 'react'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'

import Head from '../Head'
import Greeting from './Greeting'
import OurClients from './OurClients'
import Facts from './Facts'
import CoreValues from './CoreValues'
import Projects from './Projects'
import Idea from '../Idea'
import Bubble from '../Bubble'

import greeting from '../../data/industry/mediaAndMarketing/greeting'
import ourClients from '../../data/industry/mediaAndMarketing/logos'
import coreValues from '../../data/industry/coreValues'
import facts from '../../data/industry/facts'
import { mediaAndMarketingProjects } from '../../data/industry/projects'

const MediaAndMarketingPage = ({ l10n: { translations } }) => {
  const pageName = 'industry'
  const page = 'mediaAndMarketing'
  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.industry.meta.mediaAndMarketing.title}
        description={translations.industry.meta.mediaAndMarketing.description}
      />
      <Greeting id="greeting" content={greeting} pageName={pageName} />
      <OurClients id="ourClients" page={page} content={ourClients} />
      <Facts id="facts" content={facts} />
      <CoreValues id="core-values" content={coreValues} />
      <Projects id="projects" content={mediaAndMarketingProjects} />
      <Idea />
      <Bubble pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(MediaAndMarketingPage)
