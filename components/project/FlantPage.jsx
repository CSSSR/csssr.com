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
import Quote from './Quote'

import hero from '../../data/project/flant/hero'
import team from '../../data/project/flant/team'
import techStack from '../../data/project/flant/techStack'
import quoteImages from '../../data/project/flant/quote'
import aboutProjectImages from '../../data/project/aboutProject'

const FlantPage = ({ l10n: { translations } }) => {
  const pageName = 'project'
  const projectId = 'flant'
  const aboutProjectParagraphsScheme = [null, [0, 1]]

  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.project.flant.meta.title}
        description={translations.project.flant.meta.description}
      />

      <Hero id="hero" content={hero} projectId={projectId} />
      <Team id="team" content={team} projectId={projectId} />
      <TechStack id="teckStack" content={techStack} />
      <AboutProject
        projectId={projectId}
        images={aboutProjectImages}
        paragraphsScheme={aboutProjectParagraphsScheme}
      />
      <Quote projectId={projectId} images={quoteImages} />
      <Idea />
      <Bubble pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(FlantPage)
