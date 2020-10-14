import React from 'react'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'
import Head from '../Head'
import Hero from './Hero'
import DevCases from './DevCases'
import Solutions from './Solutions'
import Idea from '../Idea'

import heroContent from '../../data/projects/hero'
import casesContent from '../../data/projects/devCases'
import designCasesContent from '../../data/projects/designCases'
import DesignCases from './DesignCases'

const ProjectsPage = ({ l10n: { language, translations } }) => {
  const pageName = 'projects'
  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.projects.meta.title}
        description={translations.projects.meta.description}
      />

      <Hero content={heroContent} />
      <DevCases content={casesContent} />
      {language !== 'ru' && <DesignCases content={designCasesContent} />}
      {language !== 'ru' && <Solutions />}
      <Idea pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(ProjectsPage)
