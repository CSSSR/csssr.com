import React, { Fragment } from 'react'
import { bool, func, string } from 'prop-types'
import ContactForm from '../../ContactForm'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Form = (props) => {
  const {
    pageName,
    formName,
    fieldsIds,
    submitStatus,
    hasFailOrSuccessStatus,
    onSubmitResolve,
    closeModal,
  } = props

  return (
    <Fragment>
      <ContactForm
        formName={formName}
        pageName={pageName}
        headerId="hire-us-modal"
        fields={['email', 'phone', 'company', 'message']}
        fieldsIds={fieldsIds}
        status={submitStatus}
        shouldScroll={false}
        closeModal={closeModal}
        onSubmitResolve={onSubmitResolve}
        hasFailOrSuccessStatus={hasFailOrSuccessStatus}
        {...props}
      />
    </Fragment>
  )
}

Form.propTypes = {
  submitStatus: string,
  hasFailOrSuccessStatus: bool,
  submitError: string,
  pageName: string,
  onSubmitResolve: func,
  onStatusButtonClick: func,
}

export default MsBrowserConsumer(Form)
