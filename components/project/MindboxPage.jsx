import React from 'react'
import Idea from '../Idea'
import AboutProject from './AboutProject'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'

import Head from '../Head'
import Bubble from '../Bubble'
import Hero from './Hero'
import Team from './Team'
import TechStack from './TechStack'

import hero from '../../data/project/mindbox/hero'
import team from '../../data/project/mindbox/team'
import techStack from '../../data/project/mindbox/techStack'
import aboutProjectImages from '../../data/project/aboutProject'

const MindboxPage = ({ l10n: { translations } }) => {
  const pageName = 'project'
  const projectId = 'mindbox'
  const aboutProjectParagraphsScheme = [null, [0, 1, 2, 3, 4]]

  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.project.mindbox.meta.title}
        description={translations.project.mindbox.meta.description}
      />

      <Hero id="hero" content={hero} projectId={projectId} />
      <Team id="team" content={team} projectId={projectId} />
      <TechStack id="teckStack" content={techStack} />
      <AboutProject
        projectId={projectId}
        images={aboutProjectImages}
        paragraphsScheme={aboutProjectParagraphsScheme}
      />
      <Idea />
      <Bubble pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(MindboxPage)
