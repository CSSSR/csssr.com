import React, { PureComponent, Fragment } from 'react'
import Link from 'next/link'
import FormRow from './FormRow'
import Section from '../job/Section'
import CandidateInfoSection from './CandidateInfoSection'
import AnimatedButton from '../ui-kit/AnimatedButton'

const divideSections = sections => {
  const firstQuestIndex = sections.findIndex(section => ['quest', 'questBox'].includes(section.type))
  return [
    sections.slice(0, firstQuestIndex),
    sections.slice(firstQuestIndex),
  ]
}

class CandidateForm extends PureComponent {
  state = {
    formSubmitStatus: null,
  }

  componentWillReceiveProps({ submitting, submitFailed, submitSucceeded, dirtySinceLastSubmit }) {
    if (
      this.props.submitting !== submitting ||
      this.props.submitFailed !== submitFailed ||
      this.props.submitSucceeded !== submitSucceeded ||
      this.props.dirtySinceLastSubmit !== dirtySinceLastSubmit
    ) {
      if (submitting) {
        this.setState({ formSubmitStatus: 'submitting' })
      } else if (submitFailed && !dirtySinceLastSubmit) {
        this.setState({ formSubmitStatus: 'fail' })
      } else if (submitSucceeded) {
        this.setState({ formSubmitStatus: 'success' })
      } else {
        this.setState({ formSubmitStatus: null })
      }
    }
  }

  handleStateClear = () => {
    this.setState({ formSubmitStatus: null })
  }

  handleSubmit = e => {
    const { handleSubmit, form: { reset } } = this.props

    return handleSubmit(e).then(() => {
      if (!this.props.hasSubmitErrors) {
        reset()
      }
    })
  }

  renderVacancyImageAndLinks = () => {
    const { vacancies } = this.props

    return (
      <Fragment>
        <img className='picture' src='https://via.placeholder.com/400' />

        <ul>
          {vacancies.map(vacancy =>
            <li key={vacancy.id}>
              <Link
                prefetch
                href={{ pathname: '/ru/job', query: { jobPathName: vacancy.pathName } }}
                as={`/ru/jobs/${vacancy.pathName}`}
              >
                <a className='font_link-list_16'>
                  {vacancy.name}
                </a>
              </Link>
            </li>
          )}
        </ul><style jsx>{`
        picture {
          width: 100%;
        }

        img {
          width: 100%;
        }

        ul {
          margin-top: 3.6875rem;
          margin-left: auto;
          margin-right: auto;
          width: 12rem;
        }

        li:not(:last-child) {
          margin-bottom: 1rem;
        }
      `}</style>
      </Fragment>
    )
  }

  render() {
    const {
      submitting,
      hasValidationErrors,
      hasSubmitErrors,
      dirtySinceLastSubmit,
      connection,
      vacancy,
    } = this.props

    const isSubmitButtonDisabled =
      submitting ||
      hasValidationErrors ||
      (hasSubmitErrors && !dirtySinceLastSubmit)

    const [ beforeQuestSections, otherSections ] = divideSections(vacancy.sections)

    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormRow
          rightSideContent={this.renderVacancyImageAndLinks()}
          rightSideWidth='wide'
        >
          <h1 className='font_h1-regular'>
            {vacancy.name }
            <span className='font_subhead-regular'>Дистанционно, и на фуллтайм</span>
          </h1>

          <p className='font_p24-strong' dangerouslySetInnerHTML={{ __html: vacancy.description }} />
          {beforeQuestSections.map((section, index) => <Section key={index} {...section} />)}
        </FormRow>

        {otherSections.map((section, index) => <Section key={index} {...section} asRow />)}

        <CandidateInfoSection
          connection={connection}
          vacancy={vacancy}
          onFileFieldChange={this.props.form.change} /* eslint-disable-line */
        />

        <FormRow>
          <div className='button'>
            <AnimatedButton
              type='submit'
              disabled={isSubmitButtonDisabled}
              status={this.state.formSubmitStatus}
              onAnimationEnd={this.handleStateClear}
            >
              Отправить
            </AnimatedButton>
          </div>
        </FormRow>

        <style jsx>{`
          form {
            margin-right: auto;
            margin-left: auto;
            padding-top: 13.5625rem;
            padding-bottom: 31.5rem;
            align-items: center;
            border: none;
          }

          h1 {
            margin-top: -0.0625rem;
          }

          h1 span {
            margin-top: 0.875rem;
            display: block;
          }

          h1 + p {
            margin-top: 1.3125rem;
          }

          .button {
            margin-top: 3.5625rem;
            margin-left: auto;
            margin-right: auto;
            width: 12rem;
          }
        `}</style>
      </form>
    )
  }
}

export default CandidateForm
