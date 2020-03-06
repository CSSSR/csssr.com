import React from 'react'
import { string } from 'prop-types'
import Layout from '../Layout'
import Head from '../Head'
import withI18next from '../../utils/withI18next'
import Greeting from './Greeting'
import About from './About'
import Workflow from './Workflow'
import Calculator from './Calculator'
import Features from './Features'
import Form from './Form'

const ExpressPage = ({ t }) => (
  <Layout>
    <Head
      title={t('express:meta.title')}
      description={t('express:greeting.description')}
      ogImage={{
        url: require('../../static/images/express/ogImage.jpg'),
        width: 2400,
        height: 1260,
      }}
    />

    <Greeting />
    <About />
    <Workflow />
    <Calculator />
    <Features />
    <Form />
  </Layout>
)

ExpressPage.propTypes = {
  className: string,
}

export default withI18next(['express'])(ExpressPage)
