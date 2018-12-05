import React, { Fragment, PureComponent } from 'react'
import fetch from 'isomorphic-unfetch'
import Head from '../../components/Head'
import withI18next from '../../utils/withI18next'
import Layout from '../../components/Layout'
import Vacancies from '../../components/jobs/Vacancies'
import hrOrigin from '../../utils/hrOrigin'

class Jobs extends PureComponent {
  static async getInitialProps() {
    const res = await fetch(`${hrOrigin}/api/public/vacancies/active`)
    const vacancies = await res.json()

    return { vacancies }
  }

  render() {
    const { t, vacancies } = this.props
    return (
      <Fragment>
        <Layout
          headerProps={{
            logoHref: '/ru/jobs#',
            logoAlt: 'CSSSR jobs logo',
            logoSup: '.jobs',
            isLogoLink: true,
            isBurgerVisible: true,
          }}
          footerProps={{ noFooter: true }}
        >
          <Head title={t('jobs:meta.title')} description={t('jobs:meta.description')} />
          <Vacancies vacancies={vacancies} />
        </Layout>
      </Fragment>
    )
  }
}

export default withI18next(['jobs'])(Jobs)
