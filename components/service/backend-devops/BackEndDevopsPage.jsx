import React from 'react'

import Layout from '../../Layout'
import Head from '../../Head'
import Bubble from '../../Bubble'
import Hero from './Hero'
import BackEndDevelopment from './BackEndDevelopment/BackEndDevelopment'
import TechStack from './TechStack/TechStack'
import DevOpsServices from './DevOpsServices'

import hero from '../../../data/service/backend-and-devops/hero'
import backend_dev from '../../../data/service/backend-and-devops/backend-development'
import tech_stack from '../../../data/service/backend-and-devops/tech-stack'
import devopsServices from '../../../data/service/backend-and-devops/devops-services'
import { L10nConsumer } from '../../../utils/l10nProvider'
import Form from '../../ContactFormWrapper/ContactFormWrapper'

const pageName = 'backEndAndDevops'
const BackEndDevopsPage = ({ l10n: { translations } }) => {
  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.backEndAndDevops.meta.title}
        description={translations.backEndAndDevops.meta.description}
      />
      <Hero pageName={pageName} id="hero" content={hero} />
      <BackEndDevelopment id="backend-development" content={backend_dev} />
      <TechStack id="tech-stack" content={tech_stack} />
      <DevOpsServices id="devops-services" content={devopsServices} />
      <Form pageName={pageName} />
      <Bubble pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(BackEndDevopsPage)
