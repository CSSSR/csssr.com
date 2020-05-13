import React from 'react'
import styled from '@emotion/styled'
import styles from './Form.styles'
import { Form as ReactFinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import createDecorator from 'final-form-focus'
import { L10nConsumer } from '../../../utils/l10nProvider'
import fetch from 'isomorphic-unfetch'
import ContactForm from '../../ContactForm'
import contactFormValidationRules from '../../../utils/validators/contactFormValidationRules'
import getGaCid from '../../../utils/client/getGaCid'
import testEmail from '../../../utils/testEmail'

const ContactFormForDev = (props) => (
  <ContactForm
    imageName="letter"
    pageName="dev"
    headerId="hire-us"
    fields={['name', 'phone', 'email', 'message']}
    feedbackEmail="sales@csssr.io"
    {...props}
  />
)

const onSubmit = (translations, language) => async (values) => {
  values.gacid = getGaCid()
  values.language = language
  let res

  const isTestEmail = values.email === testEmail

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

const focusOnErrors = createDecorator()

const Form = ({
  l10n: { translations, language },
  className,
  pageName = 'outsourcingFrontEnd',
}) => (
  <ReactFinalForm
    onSubmit={onSubmit(translations, language)}
    validate={contactFormValidationRules(translations)}
    decorators={[focusOnErrors]}
    component={ContactFormForDev}
    pageName={pageName}
    className={className}
  />
)

export default L10nConsumer(
  styled(Form)`
    ${styles}
  `,
)
export { onSubmit }