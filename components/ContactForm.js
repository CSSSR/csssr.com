import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import css from 'styled-jsx/css'
import { Field } from 'react-final-form'
import { translate } from 'react-i18next'
import { equals } from 'ramda'
import Checkbox from './ui-kit/Checkbox'
import TextField from './ui-kit/TextField'
import TextareaField from './ui-kit/TextareaField'
import AnimatedButton from './ui-kit/AnimatedButton'
import FormStateMessage from './ui-kit/FormStateMessage'
import PrivacyPolicyCheckbox from './PrivacyPolicyCheckbox'

const picture = css.resolve`
  picture {
    position: absolute;
    bottom: 10.75rem;
    left: 50%;
    z-index: -1;
    width: 340px;
    height: 220px;
    transform: translateX(-50%);
  }

  img {
    width: 100%;
  }

 @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      margin-top: -6.5rem;
    }

    @media (max-width: 1023px) {
      picture {
        width: 21.25rem;
        height: 13.75rem;
      }
    }
  }

  @media (max-width: 767px) {
    picture {
      bottom: 3.75rem;
      width: 6.5rem;
      height: 4.25rem;
    }
  }
`

class ContactForm extends PureComponent {
  messageRef = React.createRef()
  static proptypes = {
    pageName: string,
    imageName: string,
  }

  state = {
    formSubmitStatus: null,
  }

  componentWillReceiveProps({ submitting, submitFailed, submitSucceeded, dirtySinceLastSubmit, values }) {
    const { formSubmitStatus } = this.state

    if (
      this.props.submitting !== submitting ||
      this.props.submitFailed !== submitFailed ||
      this.props.submitSucceeded !== submitSucceeded
    ) {
      if (submitting) {
        this.setState({ formSubmitStatus: 'submitting' })
      } else if (submitFailed && !dirtySinceLastSubmit) {
        this.setState({ formSubmitStatus: 'fail' })
      } else if (submitSucceeded) {
        this.setState({ formSubmitStatus: 'success' })
      }
    }

    if (formSubmitStatus && !equals(values, this.props.values)) {
      this.handleStateClear()
    }
  }

  getMessageStatus = () => {
    const { formSubmitStatus } = this.state
    if (formSubmitStatus === 'submitting') {
      return null
    }

    return formSubmitStatus
  }

  handleScroll = () => {
    const messageNode = this.messageRef.current
    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = messageNode.getBoundingClientRect()
    const offset = elemRect.top - bodyRect.top - 20

    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    })
  }

  handleStateClear = () => {
    this.setState({ formSubmitStatus: null })
  }

  handleSubmit = e => {
    const { handleSubmit, form: { reset } } = this.props
    this.handleScroll()

    return handleSubmit(e).then(() => {
      if (!this.props.hasSubmitErrors) {
        reset()
        this.setState({ formSubmitStatus: 'success' })
      }
    })
  }

  render() {
    const {
      submitting,
      hasValidationErrors,
      // imageName,
      pageName,
      t,
    } = this.props

    const isSubmitButtonDisabled =
      submitting ||
      hasValidationErrors

    return (
      <form className='grid-container' onSubmit={this.handleSubmit}>
        <h2 id='hire-us' className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t(`${pageName}:form.title`) }} />
        <div className='field'>
          <Field
            id='name'
            name='name'
            component={TextField}
            type='text'
            placeholder={t(`${pageName}:form.namePlaceholder`)}
            label={t(`${pageName}:form.nameLabel`)}
            errorShouldBeShown
          />
        </div>
        <div className='field'>
          <Field
            id='phone'
            name='phone'
            component={TextField}
            type='text'
            placeholder={t(`${pageName}:form.phonePlaceholder`)}
            label={t(`${pageName}:form.phoneLabel`)}
          />
        </div>
        <div className='field'>
          <Field
            id='email'
            name='email'
            component={TextField}
            type='email'
            placeholder={t(`${pageName}:form.emailPlaceholder`)}
            label={t(`${pageName}:form.emailLabel`)}
            errorShouldBeShown
          />
        </div>
        <div className='field field_type_textarea'>
          <Field
            id='message'
            name='message'
            component={TextareaField}
            placeholder={t(`${pageName}:form.messagePlaceholder`)}
            label={t(`${pageName}:form.messageLabel`)}
          />
        </div>

        <div className='field field_type_checkbox'>
          <PrivacyPolicyCheckbox />
        </div>

        <div className='field field_type_checkbox'>
          <Field
            id='newsletterCheckbox'
            name='consents'
            type='checkbox'
            value='newsletter'
            component={Checkbox}
          >
            {t('common:checkBoxesText.newsletterText')}
          </Field>
        </div>


        <div className='button' ref={this.messageRef}>
          <AnimatedButton
            type='submit'
            disabled={isSubmitButtonDisabled}
            status={this.state.formSubmitStatus}
          >
            {t(`${pageName}:form.submitText`)}
          </AnimatedButton>
        </div>

        <div className='message'>
          <FormStateMessage
            status={this.getMessageStatus()}
            onReset={this.handleStateClear}
          />
        </div><style jsx>{`
          form {
            position: relative;
            margin-right: auto;
            margin-left: auto;
            padding-top: 8.5rem;
            width: 1792px;
            align-items: center;
            border: none;
          }

          h2 {
            margin-bottom: 6rem;
            grid-column: 4 / span 6;
            text-align: center;
          }

          .field {
            grid-column: 4 / span 6;
            margin-bottom: 2.0625rem;
          }

          .field_type_textarea {
            position: relative;
            margin-top: 1.5rem;
            margin-bottom: 3.5rem;
          }

          .field_type_no-margin {
            margin: 0;
          }

          .field_type_checkbox {
            margin-bottom: 2rem;
          }

          .button {
            margin-top: 1.5rem;
            grid-column: 6 / span 2;
          }

          .message {
            grid-column: 4 / span 6;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            form {
              width: 1328px;
            }

            .field_type_checkbox + .field_type_checkbox {
              margin-bottom: 2.5rem;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            form {
              width: 1232px;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            form {
              padding-top: 6.1875rem;
              background-position: 50% calc(100% - 8.45rem);
              width: 944px;
            }

            h2 {
              margin-bottom: 2.375rem;
            }

            .field {
              grid-column: 4 / span 6;
              margin-bottom: 1.5625rem;
            }

            .field_type_textarea {
              margin-bottom: 3.625rem;
            }

            .field_type_checkbox {
              margin-bottom: 1.5rem;
            }

            @media (max-width: 1023px) {
              form {
                width: 59rem;
              }
            }
          }

          @media (max-width: 767px) {
            form {
              padding-top: 3rem;
              width: 20.5rem;
            }

            h2 {
              margin-bottom: 2.5625rem;
            }

            h2,
            .field {
              grid-column: 1 / span 6;
            }

            .button {
              margin-top: 3.4375rem;
              grid-column: 2 / span 4;
            }

            .message {
              grid-column: 1 / span 6;
            }

            .field_type_textarea {
              margin-top: 1.4375rem;
              margin-bottom: 1.6875rem;
            }

            .field_type_checkbox {
              margin-bottom: 1.1875rem;
            }
          }

        `}</style>
        {picture.styles}
      </form>
    )
  }
}

export default translate()(ContactForm)
