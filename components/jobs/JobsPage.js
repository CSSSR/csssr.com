import React, { Fragment, PureComponent } from 'react'
import fetch from 'isomorphic-unfetch'
import Head from '../../components/Head'
import withI18next from '../../utils/withI18next'
import Layout from '../../components/Layout'
import Vacancies from '../../components/jobs/Vacancies'
import csssrSpaceOrigin from '../../utils/csssrSpaceOrigin'
import i18n from '../../common/i18n'

class JobsPage extends PureComponent {
  static async getInitialProps({ req }) {
    const locale = req ? req.language : i18n.language
    const res = await fetch(`${csssrSpaceOrigin}/api/public/vacancies/active?locale=${locale}`)
    const vacancies = await res.json()

    return { vacancies }
  }


  render() {
    const { t, vacancies, lng } = this.props
    return (
      <Fragment>
        <Layout
          headerProps={{ isBurgerVisible: true, menuName: t('common:menu.jobs'), sectionName: t('common:sectionName.jobs') }}
          footerProps={{ noFooter: true }}
        >
          <Head
            title={t('jobs:meta.title')}
            templateTitle={`${lng === 'ru' ? ' | Вакансии CSSSR' : ' | CSSSR'}`}
            description={t('jobs:meta.description')}
            ogImage={{
              url: require('../../static/images/jobs/1920/cover@2x.jpg'),
              width: 1266,
              height: 2000,
            }}/>
          <Vacancies vacancies={vacancies} />
        </Layout>
        <style jsx>{`
          @media (max-width: 767px) {
            :global(#header-background) {
              z-index: -2;
            }
          }
        `}</style>
      </Fragment>
    )
  }
}

export default withI18next(['jobs'])(JobsPage)