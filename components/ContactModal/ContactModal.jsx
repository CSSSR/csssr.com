import React, { PureComponent } from 'react'
import { func, string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import { Form as ReactFinalForm } from 'react-final-form'
import createDecorator, { getFormInputs } from 'final-form-focus'
import { FORM_ERROR } from 'final-form'
import getGaCid from '../../utils/client/getGaCid'
import { L10nConsumer } from '../../utils/l10nProvider'
import contactFormValidationRules from '../../utils/validators/contactFormValidationRules'
import { DeviceConsumer } from '../../utils/deviceProvider'
import testEmails from '../../utils/testEmails'
import Form from './Form'
import OutsideClickHandler from 'react-outside-click-handler'
import FocusLock from 'react-focus-lock'
import styles from './ContactModal.styles'

const formName = 'contact-modal'
const focusOnErrors = createDecorator(getFormInputs(formName))
const fieldsIds = {
  name: 'ConctactModalForm_name',
  phone: 'ConctactModalForm_phone',
  email: 'ConctactModalForm_email',
  message: 'ConctactModalForm_message',
  newsletter: 'ConctactModalForm_newsletter',
}

class ContactModal extends PureComponent {
  state = {
    submitStatus: '',
  }

  modalWrapperRef = React.createRef()

  handleSubmit = (translations, language) => async (values) => {
    this.setState({ submitStatus: '' })

    values.pageName = this.props.pageName
    values.gacid = getGaCid()
    values.language = language

    let res
    try {
      res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
    } catch {
      if (window.dataLayer && !isTestEmail) {
        window.dataLayer.push({ event: 'form_fail' })
      }

      return { [FORM_ERROR]: translations.common.form.errors.general }
    }

    const isTestEmail = testEmails.includes(values.email)
    if (res.status === 201) {
      if (window.dataLayer && !isTestEmail) {
        window.dataLayer.push({ event: 'form_success' })
      }
    } else {
      let error
      try {
        const response = await res.json()
        error = response.error
      } catch {
        error = translations.common.form.errors.general
      }

      if (window.dataLayer && !isTestEmail) {
        window.dataLayer.push({ event: 'form_fail' })
      }

      return { [FORM_ERROR]: error }
    }
  }

  handleSubmitResolve = (submitStatus) => {
    this.setState({ submitStatus })
  }

  handleStatusButtonClick = () => {
    const { submitStatus } = this.state

    if (submitStatus === 'fail') {
      this.setState({ submitStatus: 'pending' })
    }

    if (submitStatus === 'success') {
      this.props.onClose()
    }
  }

  outsideClickHandler = (e) => {
    if (e.target.classList.contains('contact-modal-container')) {
      this.props.onClose()
    }
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      this.props.onClose()
    }
  }

  render() {
    const {
      className,
      isMobile,
      feedbackEmail,
      l10n: { translations, language },
      pageName,
      onClose,
    } = this.props
    const { submitStatus } = this.state
    const hasFailOrSuccessStatus = submitStatus === 'success' || submitStatus === 'fail'

    if (hasFailOrSuccessStatus && isMobile) {
      this.modalWrapperRef.current.scrollTo({ top: 0 })
    }

    return (
      <div
        className={cn(`${className} contact-modal-container`)}
        onKeyDown={(e) => this.handleKeyDown(e)}
      >
        <FocusLock>
          <OutsideClickHandler onOutsideClick={this.outsideClickHandler}>
            <div
              data-scroll-lock-scrollable
              className={cn('modal-wrapper', {
                'normal-height': hasFailOrSuccessStatus,
              })}
              ref={this.modalWrapperRef}
              data-testid="ContactModal:block"
            >
              <ReactFinalForm
                component={Form}
                pageName={pageName}
                formName={formName}
                decorators={[focusOnErrors]}
                feedbackEmail={feedbackEmail}
                submitStatus={submitStatus}
                hasFailOrSuccessStatus={hasFailOrSuccessStatus}
                onSubmit={this.handleSubmit(translations, language)}
                onSubmitResolve={this.handleSubmitResolve}
                onStatusButtonClick={this.handleStatusButtonClick}
                fieldsIds={fieldsIds}
                validate={contactFormValidationRules(translations)}
              />

              <button
                aria-label="close modal"
                onClick={onClose}
                data-testid="modalForm:button:closeModal"
              />
            </div>
          </OutsideClickHandler>
        </FocusLock>
      </div>
    )
  }
}

Form.propTypes = {
  pageName: string,
  onClose: func,
}

export default DeviceConsumer(styled(L10nConsumer(ContactModal))`
  ${styles}
`)
