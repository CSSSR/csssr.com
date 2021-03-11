import React, { PureComponent } from 'react'
import { equals } from 'ramda'
import cn from 'classnames'
import { FormSpy } from 'react-final-form'
import styled from '@emotion/styled'
import styles from './CandidateForm.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
import FormRow from '../FormRow'
import Section from '../Section'
import VacancyImageAndLinks from './VacancyImageAndLinks'
import { faqImageStyles } from './VacancyImageAndLinks/VacancyImageAndLinks.styles'
import CandidateInfoSection from '../CandidateInfoSection'
import AnimatedButton from '../../ui-kit/core-design/AnimatedButton'
import Text from '../../ui-kit/core-design/Text'
import FormStateMessage from '../../ui-kit/FormStateMessage/FormStateMessage'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const picturesMap = {
  'project-manager-ru': 'Project_manager',
  'project-manager': 'Project_manager',
  'project-product-manager': 'Project_manager',
  'middle-js-developer': 'Developer_2',
  'senior-js-developer': 'JS_senior',
  'qa-engineer': 'QA_1',
  'ui-ux-designer': 'Designer',
  'pixel-perfectionist': 'Developer_1',
  'head-of-web-development-team': 'Manager',
  'senior-apparel-developer': 'Clothes',
  'product-manager': 'Product_manager',
  'devops-engineer': 'Developer_2',
  'sales-assistant': 'Assistant',
  'office-manager': 'Documents_2',
  'account-manager-ru': 'Account_manager_1',
  'account-manager-en': 'Account_manager_1',
  'global-business-director': 'Account_manager_2',
  'legal-expert': 'Documents_1',
  'hr-manager': 'Recruiter',
  'java-developer': 'Backend_developer_1',
  'junior-project-manager': 'Project_manager',
  'account-manager-ee': 'Account_manager_1',
  'smm-manager': 'SMM',
  'account-manager': 'Documents_1',
  'system-analyst': 'Systems_analyst',
  'senior-fullstack-developer': 'JS_senior',
  'senior-team-lead-js-developer': 'JS_senior',
  'product-designer': 'Designer',
  'react-yoda': 'Copywriter_rus',
  copywriter: 'Copywriter_eng',
  'senior-java-developer': 'Backend_developer_1',
  'copywriter-en': 'Copywriter_eng',
  'copywriter-ru': 'Copywriter_rus',
  photographer: 'Photographer',
  'brand-ambassador': 'Brand-ambassador',
  'backend-qa-engineer': 'QA_2',
  'deputy-chief-accountant': 'Documents_2',
}

import { faqSmallImages } from '../../../data/jobs/images'

const divideSections = (sections) => {
  const firstQuestIndex = sections.findIndex(
    (section) => ['quest', 'questBox'].indexOf(section.type) !== -1,
  )

  return [sections.slice(0, firstQuestIndex), sections.slice(firstQuestIndex)]
}

class CandidateForm extends PureComponent {
  messageRef = React.createRef()

  state = {
    // такой же элемент стейта есть в ContactForm
    submittedToServer: false,
    isMobile: false,
  }

  // такой же метод есть в ContactForm
  handleScroll = () => {
    const messageNode = this.messageRef.current
    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = messageNode.getBoundingClientRect()
    const offset = elemRect.top - bodyRect.top - 20

    const isMsBrowser = this.props.isMsBrowser
    if (isMsBrowser) {
      document.documentElement.scrollTop = offset
    } else {
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      })
    }
  }

  // такой же метод есть в ContactForm
  handleSubmit = (e) => {
    const {
      handleSubmit,
      form: { reset },
    } = this.props

    const submitResult = handleSubmit(e)

    if (submitResult) {
      this.setState({
        submittedToServer: true,
      })

      this.handleScroll()

      return submitResult.then(() => {
        if (this.props.submitSucceeded) {
          reset()
        }
      })
    }
  }

  // такой же метод есть в ContactForm
  handleAnyValuesChange = ({ values }) => {
    const { initialValues } = this.props
    const wasReset =
      initialValues === undefined ? equals(values, {}) : values !== this.props.initialValues
    if (this.state.submittedToServer && wasReset) {
      this.setState({
        submittedToServer: false,
      })
    }
  }

  // такой же метод есть в ContactForm
  handleTryToFillFormAgain = () => {
    this.setState({ submittedToServer: false })
  }

  // такой же метод есть в ContactForm
  getStatus = () => {
    const { submitting, submitFailed } = this.props
    const { submittedToServer } = this.state

    if (submitting) {
      return 'submitting'
    }

    if (submittedToServer) {
      if (submitFailed) {
        return 'fail'
      }
      return 'success'
    }

    return 'pending'
  }

  componentDidMount() {
    this.mobileMediaQuery = window.matchMedia('(max-width: 767px)')
    this.mobileMediaQuery.addListener(this.handleMediaMatch)
    this.handleMediaMatch(this.mobileMediaQuery)
  }

  // Сбрасываем состояние полей формы, при переходе на новую вакансию
  componentDidUpdate(prevProps) {
    const {
      form: { reset },
      vacancy: { id },
    } = this.props

    prevProps.vacancy.id !== id &&
      setTimeout(() => {
        reset()
      }, 0)
  }

  componentWillUnmount() {
    this.mobileMediaQuery.removeListener(this.handleMediaMatch)
  }

  handleMediaMatch = ({ matches }) =>
    this.setState({
      isMobile: matches,
    })

  renderVacancyImageAndLinks = () => {
    const {
      vacancies,
      vacancy: { name, pathName },
    } = this.props
    const pictureName = picturesMap[this.props.vacancy.pathName]

    return (
      <VacancyImageAndLinks
        vacancies={vacancies}
        pictureName={pictureName}
        name={name}
        pathName={pathName}
      />
    )
  }

  render() {
    const {
      className,
      values: { connection },
      vacancy,
      submitError,
      l10n: { translations, language },
    } = this.props

    const [beforeQuestSections, otherSections] = divideSections(vacancy.sections)
    const pictureName = picturesMap[vacancy.pathName]
    const status = this.getStatus()

    return (
      <form
        className={className}
        onSubmit={this.handleSubmit}
        name="job"
        noValidate
        data-testid="Jobs:block:form"
      >
        <FormSpy onChange={this.handleAnyValuesChange} subscription={{ values: true }} />

        <FormRow rightSideContent={this.renderVacancyImageAndLinks()}>
          <h1
            className={cn('title', {
              'font_h1-regular': true,
              'extra-margin': !pictureName,
            })}
          >
            {vacancy.name}
          </h1>

          {vacancy.employment === 'part-time' ? (
            <span className="font_subhead-regular">{translations.job.remote}</span>
          ) : (
            <span className="font_subhead-regular">{translations.job.remoteAndFullTime}</span>
          )}

          <p
            className="font_p24-strong"
            dangerouslySetInnerHTML={{ __html: vacancy.description }}
          />
          {beforeQuestSections.map((section, index) => (
            <Section key={index} {...section} />
          ))}

          {language === 'ru' && (
            <div className="faq-text-container">
              <PictureSmart
                className="faq-picture visible_on_mobile"
                requireImages={faqSmallImages}
                css={faqImageStyles}
                testid="Jobs:img.faq"
                loading="lazy"
              />
              <p className="faq-text font_p16-regular">
                {translations.job.faq.title}

                <a href="/ru/jobs-faq" className="font_link-list_16" data-testid="Jobs:link.faq">
                  {translations.job.faq.link}
                </a>
              </p>
            </div>
          )}
        </FormRow>

        {otherSections.map((section, index) => (
          <Section key={index} {...section} asRow />
        ))}

        <CandidateInfoSection
          connection={connection}
          vacancy={vacancy}
          isMobile={this.state.isMobile}
          onFileFieldChange={this.props.form.change} /* eslint-disable-line */
        />

        <FormRow>
          <div
            className={cn('button', {
              button_language_en: language === 'en',
            })}
            ref={this.messageRef}
          >
            <AnimatedButton
              type="submit"
              status={status}
              testId="Jobs:form:button.submit"
              failImgTestId="Jobs:form:img.fail"
            >
              <Text type="perforator" size="m" className="button-content" as="span">
                {translations.job.send}
              </Text>
            </AnimatedButton>
          </div>

          <div className="message">
            <FormStateMessage
              status={status}
              errorText={submitError}
              onTryAgain={this.handleTryToFillFormAgain}
              feedbackEmail="join@csssr.com"
              successPictureTestId="Jobs:form:img.result"
              testId="Jobs:form.text.result"
            />
          </div>
        </FormRow>
      </form>
    )
  }
}

export default L10nConsumer(
  MsBrowserConsumer(styled(CandidateForm)`
    ${styles}
  `),
)
