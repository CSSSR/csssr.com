import React, { PureComponent } from 'react'
import Head from '../../components/Head'
import Form from '../../components/dev/Form'
import Hire from '../../components/dev/Hire'
import Feature1 from '../../components/dev/Feature1'
import Competences from '../../components/dev/Competences'
import Feature2 from '../../components/dev/Feature2'
import Clients from '../../components/dev/Clients'
import Portfolio from '../../components/dev/Portfolio'
import Layout from '../../components/Layout'
import ButtonSelect from '../../components/ui-kit/ButtonSelect/ButtonSelect'
import { devSocialLinks } from '../../data/jobs/footerLinks'
import withI18next from '../../utils/withI18next'
import shuffleArray from '../../utils/shuffleArray'
import portfolio from '../../data/dev/portfolio'


class Dev extends PureComponent {
  static async getInitialProps() {
    const portfolioWithShuffledProjects = portfolio.map(projectGroup =>
      ({
        ...projectGroup,
        projects: shuffleArray(projectGroup.projects),
      })
    )

    const shuffledPortfolio = shuffleArray(portfolioWithShuffledProjects)

    return { shuffledPortfolio }
  }

  state = {
    isMobile: false,
  }

  componentDidMount() {
    this.mobileMediaQuery = window.matchMedia('(max-width: 767px)')
    this.mobileMediaQuery.addListener(this.handleMediaMatch)
    this.handleMediaMatch(this.mobileMediaQuery)
  }

  componentWillUnmount() {
    this.mobileMediaQuery.removeListener(this.handleMediaMatch)
  }

  handleMediaMatch = ({ matches }) =>
    this.setState({
      isMobile: matches,
    })

  render() {
    const { t, shuffledPortfolio } = this.props
    const { isMobile } = this.state

    return (
      <Layout
        headerProps={{ logoHref: '/en', isLogoLink: true, isBurgerVisible: true }}
        footerProps={{ socialLinks: devSocialLinks }}
      >

        <Head
          title={t('dev:meta.title')}
          description={t('dev:meta.description')}
          ogImage={{
            url: '/static/images/dev/1920/dev@2x.png',
            width: 3840,
            height: 1280,
          }}/>
        <Hire />
        <Feature1
          image={{ namespace: 'dev', key: 'geometry', alt: t('dev:imgAlt.geometry') }}
        />
        <Competences />
        <Feature2
          title={t('dev:time.title')}
          text={t('dev:time.text')}
          image={{ namespace: 'dev', key: 'time', alt: t('dev:imgAlt.time') }}
        />
        <Clients isMobile={isMobile} />
        <Portfolio portfolio={shuffledPortfolio} isMobile={isMobile}/>
        <Feature2
          title={t('dev:perfect.title')}
          text={t('dev:perfect.text')}
          image={{ namespace: 'dev', key: 'perfect', alt: t('dev:imgAlt.perfect') }}
        />
        <Form />
        <ButtonSelect
          isMobile={isMobile}
          showButtonOnNode='feature1'
          hideButtonOnNode='hire-us'
          buttonText={t('dev:hire.buttonText')}
        />
        <style jsx>{`
          :global(#header-background) {
            z-index: 1;
          }
        `}</style>
      </Layout>
    )
  }
}

export default withI18next(['dev'])(Dev)
