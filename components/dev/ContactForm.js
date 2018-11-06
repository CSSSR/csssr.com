import React, { PureComponent } from 'react'
import css from 'styled-jsx/css'
import { Field } from 'react-final-form'
import { translate } from 'react-i18next'
import Checkbox from '../ui-kit/Checkbox'
import TextField from '../ui-kit/TextField'
import TextareaField from '../ui-kit/TextareaField'
import AnimatedButton from '../ui-kit/AnimatedButton'
import PrivacyPolicyCheckbox from '../PrivacyPolicyCheckbox'
import Picture from './Picture'

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

  @media (min-width: 368px) and (max-width: 1279px) {
    picture {
      margin-top: -6.5rem;
      height: 480px;
    }

    @media (max-width: 1023px) {
      picture {
        height: 30rem;
      }
    }
  }
`

class ContactForm extends PureComponent {
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

  render() {
    const {
      submitting,
      hasValidationErrors,
      hasSubmitErrors,
      dirtySinceLastSubmit,
      t,
    } = this.props

    const isSubmitButtonDisabled =
      submitting ||
      hasValidationErrors ||
      (hasSubmitErrors && !dirtySinceLastSubmit)

    return (
      <form className='grid-container' onSubmit={this.handleSubmit}>
        <h2 id='hire-us' className='font_h2-slab headline' dangerouslySetInnerHTML={{ __html: t('dev:form.title') }} />
        <div className='field'>
          <Field
            id='name'
            name='name'
            component={TextField}
            type='text'
            placeholder={t('dev:form.namePlaceholder')}
            label={t('dev:form.nameLabel')}
          />
        </div>
        <div className='field'>
          <Field
            id='phone'
            name='phone'
            component={TextField}
            type='text'
            placeholder={t('dev:form.phonePlaceholder')}
            label={t('dev:form.phoneLabel')}
          />
        </div>
        <div className='field'>
          <Field
            id='email'
            name='email'
            component={TextField}
            type='email'
            placeholder={t('dev:form.emailPlaceholder')}
            label={t('dev:form.emailLabel')}
          />
        </div>
        <div className='field field_type_textarea'>
          <Field
            id='message'
            name='message'
            component={TextareaField}
            placeholder={t('dev:form.messagePlaceholder')}
            label={t('dev:form.messageLabel')}
          />
        </div>

        <div className='field field_type_checkbox'>
          <PrivacyPolicyCheckbox />
        </div>

        <div className='field field_type_noMargin'>
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


        <div className='button'>
          <AnimatedButton
            type='submit'
            disabled={isSubmitButtonDisabled}
            status={this.state.formSubmitStatus}
            onAnimationEnd={this.handleStateClear}
          >
            {t('dev:form.submitText')}
          </AnimatedButton>
        </div>

        <Picture
          className={picture.className}
          image={{ namespace: 'dev', key: 'letter', alt: t('dev:imgAlt.letter') }} /><style jsx>{`
          form {
            position: relative;
            margin-right: auto;
            margin-left: auto;
            padding-top: 8.5rem;
            padding-bottom: 31.5rem;
            width: 1792px;
            align-items: center;
            border: none;
          }

          .headline {
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

          .field_type_noMargin {
            margin: 0;
          }

          .button {
            margin-top: 4rem;
            grid-column: 6 / span 2;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            form {
              width: 1328px;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            form {
              width: 1232px;
            }
          }

          @media (min-width: 368px) and (max-width: 1279px) {
            form {
              padding-top: 6.1875rem;
              padding-bottom: 31.5rem;
              background-position: 50% calc(100% - 8.45rem);
              width: 944px;
            }

            .headline {
              margin-bottom: 2.3125rem;
            }

            .field {
              grid-column: 4 / span 6;
              margin-bottom: 1.875rem;
            }

            .field_type_textarea {
              margin-bottom: 3.75rem;
            }

            @media (max-width: 1023px) {
              form {
                width: 59rem;
              }
            }
          }
        `}</style>
        {picture.styles}
      </form>
    )
  }
}

export default translate()(ContactForm)