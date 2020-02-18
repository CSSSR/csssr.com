import React, { Fragment } from 'react'
import { string, bool, func } from 'prop-types'
import ContactForm from '../../ContactForm'
import StatusMessage from './StatusMessage'
import styles from './Form.styles'

const Form = props => {
  const {
    pageName,
    formName,
    fieldsIds,
    submitStatus,
    hasFailOrSuccessStatus,
    onSubmitResolve,
    submitError,
    onStatusButtonClick,
  } = props

  return (
    <Fragment>
      <ContactForm
        formName={formName}
        pageName={pageName}
        headerId="hire-us-modal"
        fields={['name', 'phone', 'email', 'message']}
        fieldsIds={fieldsIds}
        status={submitStatus}
        shouldScroll={false}
        shouldShowStatusMessage={false}
        onSubmitResolve={onSubmitResolve}
        hasFailOrSuccessStatus={hasFailOrSuccessStatus}
        css={styles(hasFailOrSuccessStatus)}
        {...props}
      />

      <StatusMessage
        status={submitStatus}
        hasFailOrSuccessStatus={hasFailOrSuccessStatus}
        feedbackEmail="sales@csssr.io"
        errorText={submitError}
        onClick={onStatusButtonClick}
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

export default Form