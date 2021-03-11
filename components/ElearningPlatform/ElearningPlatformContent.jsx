import React, { PureComponent } from 'react'
import Fade from 'react-reveal/Fade'
import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styles from './ElearningPlatformContent.styles'

import DesignButton from './DesignButton'
import FeatureButton from './FeatureButton'
import ContactButton from '../ContactButton'

import {
  designImages,
  featureImages,
  featureButtons,
} from '../../data/solutions/elearning-platform'

const greetingImages = require.context(
  '../../public/images/solutions/elearning-platform/greeting?csssr-images',
)
const assistantImages = require.context(
  '../../public/images/solutions/elearning-platform/assistant?csssr-images',
)
const gamificationImages = require.context(
  '../../public/images/solutions/elearning-platform/gamification?csssr-images',
)

const teamImages = require.context(
  '../../public/images/solutions/elearning-platform/team?csssr-images',
)

class ElearningPlatformContent extends PureComponent {
  constructor(props) {
    super(props)
    this.sectionRef = React.createRef()
  }

  state = {
    activeDesignImage: 'base',
    activeFeatureImage: 'payment',
  }

  render() {
    const { className, pageName } = this.props

    const activeDesignImage = designImages[this.state.activeDesignImage]

    // const [isContactModalVisible, toggleContactModalVisibility] = useState(false)

    // const handleButtonClick = (event) => {
    //     event.preventDefault()

    //     disablePageScroll(document.body)
    //     toggleContactModalVisibility(true)
    // }

    // const handleHideContactModal = () => {
    //     enablePageScroll(document.body)
    //     toggleContactModalVisibility(false)
    // }

    return (
      <article className={className} data-testid="ElearningPlatform:block">
        <Global
          styles={css`
            body,
            #main {
              background-color: #ffffff;
            }
          `}
        />

        <div className="greeting">
          <div className="grid">
            <p className="font-p-5 greeting-perforator">Start Your Online Education Business</p>
            <h1 className="font-heading-1">Modular Learning Management System</h1>
            <p className="font-p-1 greeting-description">
              Build your solution from the modules, add anything you need with our development team.
            </p>

            <div className="picture-container">
              <PictureSmart
                requireImages={greetingImages}
                className="greeting-image"
                alt="By using a modular learning management system you can build your solution from the modules."
              />
            </div>
          </div>
        </div>

        <div className="modules">
          <div className="grid">
            <h2 className="font-heading-2 modules-heading">Magnificent Modules</h2>

            <PictureSmart
              requireImages={assistantImages}
              className="module-image module-image-left"
              alt="We’ve built an assistant based on Google Dialogflow."
              loading="lazy"
            />

            <div className="module-title module-title-right">
              <h3 className="font-heading-3">Intelligent assistant</h3>
              <p className="font-heading-5">Innovative built-in support and integrations</p>
            </div>

            <p className="font-p-2 module-subdescription-right subdescription-first">
              We&rsquo;ve built an&nbsp;assistant based on&nbsp;
              <span className="font-p-bold">Google Dialogflow</span>. It&nbsp;gives&nbsp;us
              limitless possibilities to&nbsp;integrate our LMS with other apps enabling users
              to&nbsp;communicate with the platform the way they are used&nbsp;to.
            </p>
            <p className="font-p-2 module-subdescription-right subdescription-next">
              The assistant can be&nbsp;used in&nbsp;all phases from helping customers
              to&nbsp;choose a&nbsp;course to&nbsp;buy on&nbsp;your website to&nbsp;sending tasks
              through Slack or&nbsp;any other messengers.
            </p>

            <div className="module-title module-title-left">
              <h3 className="font-heading-3">Build-in Gamification</h3>
              <p className="font-heading-5">
                Enhance users motivation with the feature everybody loves
              </p>
            </div>

            <PictureSmart
              requireImages={gamificationImages}
              className="module-image module-image-right"
              alt="Boost users motivation up with an achievements and rewards system."
              loading="lazy"
            />

            <p className="font-p-2 module-subdescription-left subdescription-first subdescription-first-tablet">
              Boost users motivation up&nbsp;with an&nbsp;achievements and rewards system.
              It&nbsp;could be&nbsp;customized to&nbsp;any level you want from a&nbsp;basic one
              to&nbsp;an&nbsp;advanced RPG like integrated with{' '}
              <span className="font-p-bold">skill-system, quests and bonuses</span>.
            </p>
          </div>
        </div>

        <div className="features">
          <div className="grid">
            <h2 className="font-heading-2 features-heading">Core Modules</h2>

            <div className="features-lines features-line-management">
              <img
                src={require('../../static/elearning-platform/icons/management.svg').default}
                alt="line"
                loading="lazy"
              />
            </div>

            <div className="features-description features-description-first">
              <h3 className="font-heading-3">Management</h3>
              <p className="font-p-2">All of the core tools for managing courses and tasks.</p>
            </div>

            <ul className="features-list-first features-list">
              <li>
                <p className="font-p-4">Course and task management systems</p>
              </li>
              <li>
                <p className="font-p-4">Publishing</p>
              </li>
              <li>
                <p className="font-p-4">Scheduled and automated deliveries</p>
              </li>
            </ul>

            <div className="features-lines features-line-administration">
              <img
                src={require('../../static/elearning-platform/icons/administration.svg').default}
                alt="line"
                loading="lazy"
              />
            </div>

            <div className="features-description features-description-second">
              <h3 className="font-heading-3">Administration</h3>
              <p className="font-p-2">A set of instruments for tutors.</p>
            </div>

            <ul className="features-list-second features-list">
              <li>
                <p className="font-p-4">Task assessment</p>
              </li>
              <li>
                <p className="font-p-4">Rights and access management</p>
              </li>
              <li>
                <p className="font-p-4">Reporting system</p>
              </li>
              <li>
                <p className="font-p-4">Statistics and analytics</p>
              </li>
            </ul>

            <div className="features-lines features-line-learning">
              <img
                src={require('../../static/elearning-platform/icons/learning.svg').default}
                alt="line"
                loading="lazy"
              />
            </div>

            <div className="features-description features-description-third">
              <h3 className="font-heading-3">Learning</h3>
              <p className="font-p-2">The main part of the platform is available for students.</p>
            </div>

            <ul className="features-list-third features-list">
              <li>
                <p className="font-p-4">Interactive tasks and lessons</p>
              </li>
              <li>
                <p className="font-p-4">Personal dashboard</p>
              </li>
              <li>
                <p className="font-p-4">Progression system</p>
              </li>
              <li>
                <p className="font-p-4">Discussion system</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="design">
          <div className="grid">
            <div className="design-content">
              <h2 className="font-heading-2 design-title">Custom Design</h2>

              <p className="font-p-2 design-desription design-desription-second-first">
                We&nbsp;have a&nbsp;design team that will customize LMS to&nbsp;match your brand
                identity. You can change everything you need. See how it&nbsp;works by&nbsp;clicking
                the icons below.
              </p>

              <div className="design-buttons">
                <div className="design-buttons-row">
                  <DesignButton
                    onMouseEnter={() => this.setState({ activeDesignImage: 'font' })}
                    className="design-button"
                    text="Font"
                    testId="ElearningPlatform:button:customization.font"
                    icon={require('../../static/elearning-platform/icons/font.svg').default}
                  />
                  <DesignButton
                    onMouseEnter={() => this.setState({ activeDesignImage: 'graphic' })}
                    className="design-button"
                    text="Graphic"
                    testId="ElearningPlatform:button:customization.graphic"
                    icon={require('../../static/elearning-platform/icons/graphic.svg').default}
                  />
                </div>

                <div className="design-buttons-row">
                  <DesignButton
                    onMouseEnter={() => this.setState({ activeDesignImage: 'theme' })}
                    className="design-button"
                    text="Theme"
                    testId="ElearningPlatform:button:customization.theme"
                    icon={require('../../static/elearning-platform/icons/theme.svg').default}
                  />
                  <DesignButton
                    onMouseEnter={() => this.setState({ activeDesignImage: 'color' })}
                    className="design-button"
                    text="Color"
                    testId="ElearningPlatform:button:customization.color"
                    icon={require('../../static/elearning-platform/icons/color.svg').default}
                  />
                </div>
              </div>
            </div>

            <div className="design-image">
              <Fade right={true} duration={200} distance="40px" key={this.state.activeDesignImage}>
                <PictureSmart
                  requireImages={activeDesignImage}
                  alt="We have a design team that will customize the LMS to match your brand identity."
                  loading="lazy"
                />
              </Fade>
            </div>
          </div>
        </div>

        <div className="banner">
          <div className="grid">
            <h3 className="font-heading-3 banner-title">Need more info?</h3>
            <ContactButton
              className="banner-button font-p-5"
              pageName={pageName}
              kind="secondary"
              data-testid="ElearningPlatform:button:contactUs"
              dangerouslySetInnerHTML={{ __html: 'REQUEST A DEMO' }}
            />
          </div>
        </div>

        <div className="team">
          <div className="grid">
            <p className="font-p-1 team-subheading">Add anything you need with our</p>
            <h2 className="font-heading-1 team-title">Agile Development Team</h2>
          </div>
          <div className="team-image-wrapper">
            <div className="grid">
              <PictureSmart
                className="team-image"
                requireImages={teamImages}
                alt="We’ll provide you with a development team based on the project desired functionality and timeline."
                loading="lazy"
              />
            </div>
          </div>
          <div className="grid">
            <p className="font-p-2 team-description">
              We&rsquo;ll provide you with a&nbsp;development team based on&nbsp;desired
              functionality and timeline of&nbsp;the project. During the years we&rsquo;ve
              established impeccable internal{' '}
              <a
                className="font-p-link"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="ElearningPlatform:link:wayOfWork"
                href="https://csssr.com/en/way-of-work"
              >
                processes
              </a>
              . Our developers work with modern{' '}
              <a
                className="font-p-link"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="ElearningPlatform:link:techStack"
                href="https://csssr.com/en/tech-stack"
              >
                technologies
              </a>{' '}
              to&nbsp;achieve excellent results.
            </p>

            <div className="team-specialists">
              <p className="team-number">150+</p>
              <p className="team-label">specialists</p>
            </div>

            <div className="team-projects">
              <p className="team-number">500+</p>
              <p className="team-label">projects</p>
            </div>
          </div>
        </div>

        <div className="advanced-features" ref={this.sectionRef}>
          <div className="grid">
            <h3 className="font-heading-5 advanced-features-title">Advanced Feature Ideas</h3>

            <PictureSmart
              requireImages={featureImages[this.state.activeFeatureImage].images}
              className="advanced-feature-image"
              alt="By using advanced features ideas you can add any payment provider you like."
              loading="lazy"
            />

            <div className="advanced-feature-description">
              <h4 className="font-heading-4">
                {featureImages[this.state.activeFeatureImage].heading}
              </h4>
              <p className="font-p-2">{featureImages[this.state.activeFeatureImage].description}</p>
            </div>
          </div>
          <div className="advanced-feature-buttons">
            {featureButtons.map(({ id, images, text, description, imageAlt }) => (
              <FeatureButton
                key={id}
                images={images}
                text={text}
                d={description}
                onClick={() => this.sectionRef.current.scrollIntoView()}
                onMouseOver={() => this.setState({ activeFeatureImage: id })}
                isActive={this.state.activeFeatureImage === id}
                imageAlt={imageAlt}
                testId={`ElearningPlatform:button:feature.${id}`}
              />
            ))}
          </div>
        </div>
      </article>
    )
  }
}

export default styled(ElearningPlatformContent)`
  ${styles}
`
