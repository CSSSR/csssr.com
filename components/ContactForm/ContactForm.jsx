import React, { Fragment, PureComponent } from 'react'
import { arrayOf, bool, func, string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import { Field, FormSpy } from 'react-final-form'
import styles from './ContactForm.styles'
import { L10nConsumer } from '../../utils/l10nProvider'
import { equals } from 'ramda'
import Grid from '../ui-kit/core-design/Grid'
import Checkbox from '../ui-kit/Checkbox'
import TextField from '../ui-kit/TextField'
import TextareaField from '../ui-kit/TextareaField'
import AnimatedButton from '../ui-kit/core-design/AnimatedButton'
import Text from '../ui-kit/core-design/Text'
import FormStateMessage from '../ui-kit/FormStateMessage'
import Tags from './Tags'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'

class ContactForm extends PureComponent {
  messageRef = React.createRef()

  static proptypes = {
    className: string,
    formName: string,
    pageName: string,
    headerId: string,
    fields: arrayOf(string),
    shouldScroll: bool,
    shouldShowStatusMessage: bool,
    onSubmitResolve: func,
  }

  static defaultProps = {
    formName: 'contact',
    shouldScroll: true,
    shouldShowStatusMessage: true,
  }

  state = {
    // В final-form есть submitFailed и submitSucceeded,
    // но они учитывают только была ли засабмичена форма на фронте.
    // Мы показываем изображения только при отправке формы на сервер.
    submittedToServer: false,
  }

  handleScroll = () => {
    const messageNode = this.messageRef.current
    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = messageNode.getBoundingClientRect()
    const offset = elemRect.top - bodyRect.top - 20

    if (this.props.isIe11) {
      document.documentElement.scrollTop = offset
    } else {
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      })
    }
  }

  handleSubmit = (e) => {
    const {
      form: { reset },
      handleSubmit,
      submitSucceeded,
      shouldScroll,
      onSubmitResolve,
    } = this.props

    // Может быть undefined если были ошибки валидации
    // или Promise если запрос отправлен
    const submitResult = handleSubmit(e)

    if (submitResult) {
      this.setState({
        submittedToServer: true,
      })

      if (shouldScroll) {
        this.handleScroll()
      }

      return submitResult.then(() => {
        if (onSubmitResolve) {
          onSubmitResolve(this.getStatus())
        }

        if (submitSucceeded) {
          reset()
        }
      })
    }
  }

  handleAnyValuesChange = ({ values }) => {
    // При ресете форма реинициализируется с initialValues
    // или, если они не заданы, с пустым объектом.
    const { initialValues } = this.props
    const wasReset =
      initialValues === undefined ? equals(values, {}) : values === this.props.initialValues

    if (this.state.submittedToServer && !wasReset) {
      this.setState({
        submittedToServer: false,
      })
    }
  }

  handleTryToFillFormAgain = () => {
    this.setState({ submittedToServer: false })
  }

  getStatus = () => {
    const { submitting, submitFailed } = this.props
    // this.props.dirtySinceLastSubmit к сожалению не подходит,
    // потому что не отслеживает первое изменение после сабмита,
    // а сравнивает значения формы во время сабмита с текущими.
    // Поэтому dirtySinceLastSubmit false, когда форму поменяли и вернули значения как на момент сабмита.
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

  renderField = (fieldName) => {
    const {
      l10n: { translations },
      formName,
      fieldsIds,
      hasFailOrSuccessStatus,
    } = this.props

    const getTabIndex = `${hasFailOrSuccessStatus ? '-1' : '0'}`

    const fieldByName = {
      name: (
        <div className="field">
          <Field
            id={(fieldsIds && fieldsIds.name) || 'name'}
            name="name"
            component={TextField}
            type="text"
            placeholder={translations.contactForm.namePlaceholder}
            label={translations.contactForm.nameLabel}
            testId={`${formName}:field:callbackForm.name`}
            autoFocus={formName === 'contact-modal'}
            tabIndex={getTabIndex}
            required
          />
        </div>
      ),
      phone: (
        <div className="field">
          <Field
            id={(fieldsIds && fieldsIds.phone) || 'phone'}
            name="phone"
            component={TextField}
            type="tel"
            placeholder={translations.contactForm.phonePlaceholder}
            label={translations.contactForm.phoneLabel}
            testId={`${formName}:field:callbackForm.phone`}
            tabIndex={getTabIndex}
          />
        </div>
      ),
      email: (
        <div className="field">
          <Field
            id={(fieldsIds && fieldsIds.email) || 'email'}
            name="email"
            component={TextField}
            type="email"
            placeholder={translations.contactForm.emailPlaceholder}
            label={translations.contactForm.emailLabel}
            testId={`${formName}:field:callbackForm.email`}
            tabIndex={getTabIndex}
            required
          />
        </div>
      ),
      message: (
        <div className={cn('field', 'field_type_textarea')}>
          <Field
            id={(fieldsIds && fieldsIds.message) || 'message'}
            name="message"
            component={TextareaField}
            placeholder={translations.contactForm.messagePlaceholder}
            label={translations.contactForm.messageLabel}
            testId={`${formName}:field:callbackForm.message`}
            tabIndex={getTabIndex}
          />
        </div>
      ),
      newsletter: (
        <div className={cn('field', 'field_type_checkbox')}>
          <Field
            id={(fieldsIds && fieldsIds.newsletter) || 'newsletter'}
            name="newsletter"
            type="checkbox"
            component={Checkbox}
            testId={`${formName}:field:callbackForm.newsletter.checkbox`}
            tabIndex={getTabIndex}
          >
            {translations.common.checkBoxesText.newsletterText}
          </Field>
        </div>
      ),
    }

    return <Fragment key={fieldName}>{fieldByName[fieldName]}</Fragment>
  }

  render() {
    const {
      className,
      feedbackEmail,
      submitError,
      l10n: { translations, language },
      pageName,
      formName,
      headerId,
      fields,
      shouldShowStatusMessage,
    } = this.props

    const status = this.props.status || this.getStatus()
    const messageShown = status === 'success' || status === 'fail'

    return (
      <Grid as="form" className={className} onSubmit={this.handleSubmit} name={formName} noValidate>
        <FormSpy onChange={this.handleAnyValuesChange} subscription={{ values: true }} />

        <h2
          id={headerId}
          className="font_h2-slab"
          dangerouslySetInnerHTML={{
            __html: translations[pageName].formTitle || translations.contactForm.title,
          }}
        />

        <Tags />

        {fields.map(this.renderField)}

        {!messageShown && this.renderField('newsletter')}

        {!messageShown && (
          <span className="privacyPolicy font_p16-regular">
            {translations.common.checkBoxesText.privacyPolicyText}
            <a
              href={`/${language}/privacy-policy`}
              target="_blank"
              rel="noopener"
              className="font_link-list_16"
              data-testid={`${formName}:link:callbackForm.privacyPolicy`}
            >
              {translations.common.checkBoxesText.privacyPolicyLinkText}
            </a>
          </span>
        )}

        <div className="button" ref={this.messageRef}>
          <AnimatedButton
            type="submit"
            disabled={status === 'submitting' || status === 'fail'}
            status={status}
            testId={`${formName}:button.callbackForm.submit`}
          >
            <Text type="perforator" size="m" className="button-content" as="span">
              {translations.contactForm.submitText}
            </Text>
          </AnimatedButton>
        </div>

        {shouldShowStatusMessage && (
          <div className="message">
            <FormStateMessage
              status={status}
              errorText={submitError}
              onTryAgain={this.handleTryToFillFormAgain}
              feedbackEmail={feedbackEmail}
              testId={`${formName}:text.status`}
              successPictureTestId={`${formName}:picture.successMessageImg`}
            />
          </div>
        )}
      </Grid>
    )
  }
}

export default L10nConsumer(
  MsBrowserConsumer(styled(ContactForm)`
    ${styles}
  `),
)
