import React from 'react'
import Layout from '../../Layout'
import Head from '../../Head'
import Bubble from '../../Bubble'
import Hero from './Hero'
import AboutFrontend from './AboutFrontend'
import Benefits from './Benefits'
import WhatWeDo from './WhatWeDo'
import TechnologyStack from './TechnologyStack'
import OurAdvantages from './OurAdvantages'
import Industries from './Industries'

import { L10nConsumer } from '../../../utils/l10nProvider'

const pageName = 'outsourcingFrontEnd'
const OutsourcingFrontEndPage = ({ l10n: { translations } }) => (
  <Layout pageName={pageName}>
    <Head
      title={translations.outsourcingFrontEnd.meta.title}
      description={translations.outsourcingFrontEnd.meta.description}
    />
    <Hero pageName={pageName} />
    <AboutFrontend />
    <Benefits />
    <WhatWeDo pageName={pageName} />
    <TechnologyStack />
    <OurAdvantages />
    <Industries />
    <Bubble pageName={pageName} />
  </Layout>
)

export default L10nConsumer(OutsourcingFrontEndPage)
