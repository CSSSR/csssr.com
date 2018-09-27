import React, { PureComponent } from 'react'
import { Form as ReactFinalForm } from 'react-final-form'
import ContactForm from './ContactForm'
import contactFormValidationRules from '../utils/contactFormValidationRules'

const onSubmit = values => {
  console.log(values)
  if (window.dataLayer) {
    window.dataLayer.push({ event: 'form_success' })
  }
}

export default class Form extends PureComponent {

  renderForm = props => <ContactForm {...props} />

  render() {
    return (
      <ReactFinalForm
        onSubmit={onSubmit}
        validate={contactFormValidationRules}
        render={this.renderForm}
      />
    )
  }
}
