import React, { Fragment } from 'react'
import { bool, func, string } from 'prop-types'
import ContactForm from '../../ContactForm'
import StatusMessage from './StatusMessage'
import styles from './Form.styles'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Form = (props) => {
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
        fields={['email', 'phone', 'company', 'message']}
        fieldsIds={fieldsIds}
        status={submitStatus}
        shouldScroll={false}
        shouldShowStatusMessage={false}
        onSubmitResolve={onSubmitResolve}
        hasFailOrSuccessStatus={hasFailOrSuccessStatus}
        css={styles({ hasFailOrSuccessStatus })}
        {...props}
      />

      <StatusMessage
        testId="Form:button.status-message"
        status={submitStatus}
        hasFailOrSuccessStatus={hasFailOrSuccessStatus}
        feedbackEmail="launch@csssr.com"
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

export default MsBrowserConsumer(Form)
