import React, { Fragment, PureComponent } from 'react'
import { arrayOf, bool, func, string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './ContactForm.styles'
import { Field, FormSpy } from 'react-final-form'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { L10nConsumer } from '../../utils/l10nProvider'
import { equals } from 'ramda'
import Checkbox from '../ui-kit/Checkbox'
import TextFieldNew from '../ui-kit/TextFieldNew'
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
    onSubmitResolve: func,
    closeModal: func,
  }

  static defaultProps = {
    formName: 'contact',
    shouldScroll: true,
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

  handleTryToFillFormAgain = (e) => {
    e.preventDefault()
    const { onSubmitResolve } = this.props

    this.setState({ submittedToServer: false })
    onSubmitResolve('pending')
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
      l10n: { translations, language },
      formName,
      fieldsIds,
      hasFailOrSuccessStatus,
    } = this.props

    const getTabIndex = `${hasFailOrSuccessStatus ? '-1' : '0'}`

    const fieldByName = {
      email: (
        <div className="field">
          <Field
            id={(fieldsIds && fieldsIds.email) || 'email'}
            name="email"
            component={TextFieldNew}
            type="email"
            placeholder={translations.contactForm.emailPlaceholder}
            label={translations.contactForm.emailLabel}
            testId={`${formName}:field:callbackForm.email`}
            tabIndex={getTabIndex}
            autoFocus={formName === 'contact-modal'}
            translations={translations}
            required
          />
        </div>
      ),
      phone: (
        <div className="field">
          <Field
            id={(fieldsIds && fieldsIds.phone) || 'phone'}
            name="phone"
            component={TextFieldNew}
            type="tel"
            placeholder={translations.contactForm.phonePlaceholder}
            label={translations.contactForm.phoneLabel}
            testId={`${formName}:field:callbackForm.phone`}
            tabIndex={getTabIndex}
            translations={translations}
          />
        </div>
      ),
      company: (
        <div className="field">
          <Field
            id={(fieldsIds && fieldsIds.company) || 'company'}
            name="company"
            component={TextFieldNew}
            type="text"
            placeholder={translations.contactForm.companyPlaceholder}
            label={translations.contactForm.companyLabel}
            testId={`${formName}:field:callbackForm.company`}
            tabIndex={getTabIndex}
            translations={translations}
            required={language === 'ru'}
          />
        </div>
      ),
      message: (
        <div className={cn('field', 'field_type_textarea')}>
          <Field
            id={(fieldsIds && fieldsIds.message) || 'message'}
            name="message"
            component={TextareaField}
            rows="1"
            placeholder={translations.contactForm.messagePlaceholder}
            testId={`${formName}:field:callbackForm.message`}
            tabIndex={getTabIndex}
            translations={translations}
            required
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
            {translations.common.checkBoxesText.candidateNewsletterText}
          </Field>
        </div>
      ),
    }

    return <Fragment key={fieldName}>{fieldByName[fieldName]}</Fragment>
  }

  render() {
    const {
      className,
      submitError,
      l10n: { translations, language },
      pageName,
      formName,
      headerId,
      fields,
      closeModal,
    } = this.props

    const status = this.props.status || this.getStatus()
    const isWindowContext = typeof window !== 'undefined'
    const isScreenNarrow = isWindowContext && window.innerHeight >= 700
    const successImages = require.context('../../public/images/forms/successModal?csssr-images')

    return (
      <form
        className={cn(className, {
          biggerSize: isScreenNarrow,
        })}
        onSubmit={this.handleSubmit}
        name={formName}
        noValidate
      >
        <FormSpy onChange={this.handleAnyValuesChange} subscription={{ values: true }} />

        <h2
          id={headerId}
          className="heading"
          dangerouslySetInnerHTML={{
            __html: translations[pageName].formTitle || translations.contactForm.title,
          }}
        />

        <Tags />

        <fieldset className="fieldset">{fields.map(this.renderField)}</fieldset>

        {this.renderField('newsletter')}

        <span className="privacyPolicy">
          {translations.common.checkBoxesText.privacyPolicyText}
          <a
            href={`/${language}/privacy-policy`}
            target="_blank"
            rel="noopener"
            className="privacyPolicyLink"
            data-testid={`${formName}:link:callbackForm.privacyPolicy`}
          >
            {translations.common.checkBoxesText.privacyPolicyLinkText}
          </a>
        </span>

        <div
          className={cn('buttonWrapper', {
            shortWidth: status === 'fail' || status === 'success' || status === 'submitting',
          })}
          ref={this.messageRef}
        >
          <AnimatedButton
            className="submitButton"
            type="submit"
            disabled={status === 'submitting' || status === 'fail'}
            status={status}
            testId={`${formName}:button.callbackForm.submit`}
          >
            <Text type="perforator" size="m" className="submitButtonContent" as="span">
              {translations.contactForm.submitText}
            </Text>
          </AnimatedButton>

          {status === 'fail' && (
            <FormStateMessage
              formName={formName}
              errorText={submitError}
              onTryAgain={this.handleTryToFillFormAgain}
              feedbackEmail="join@csssr.com"
            />
          )}
        </div>

        {this.getStatus() === 'success' && (
          <div className="successModal">
            <h2 className="modalHeading">Успех!</h2>
            <p className="modalMessage">Скоро мы с вами свяжемся.</p>
            <PictureSmart
              className="modalPicture"
              requireImages={successImages}
              alt="Success"
              testId="ContactModal:successmodal.img"
            />
            <button
              className="closeButton"
              type="button"
              aria-label="closeButton"
              onClick={closeModal}
              data-testid="ContactModal:button:closeButton"
            />
          </div>
        )}
      </form>
    )
  }
}

export default L10nConsumer(
  MsBrowserConsumer(styled(ContactForm)`
    ${styles}
  `),
)
