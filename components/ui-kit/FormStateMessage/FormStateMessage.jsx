import React, { PureComponent } from 'react'
import styled from '@emotion/styled'
import styles from './FormStateMessage.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { string, func } from 'prop-types'

class FormStateMessage extends PureComponent {
  static propTypes = {
    formName: string.isRequired,
    errorText: string,
    feedbackEmail: string.isRequired,
    onTryAgain: func.isRequired,
  }

  render() {
    const {
      className,
      l10n: { translations },
      formName,
      errorText,
      feedbackEmail,
      onTryAgain,
    } = this.props

    return (
      <div className={className} data-testid={`${formName}:statusMessage`}>
        <span className="errorText">{errorText}</span>

        <span className="message">{translations.common.form.message.fail.body.textStart}</span>

        <button
          className="tryAgainButton"
          type="button"
          onClick={onTryAgain}
          data-testid={`${formName}:statusMessage:button:error.tryAgain`}
        >
          {translations.common.form.message.fail.body.textForButton}
        </button>

        <br />

        <span className="requestEmail">
          {translations.common.form.message.fail.body.textBetweenButtonAndLink}
        </span>

        <a
          className="emailLink"
          href={`mailto:${feedbackEmail}`}
          data-testid={`${formName}:statusMessage:link.feedbackEmail`}
        >
          {feedbackEmail}
        </a>
      </div>
    )
  }
}

export default L10nConsumer(
  MsBrowserConsumer(styled(FormStateMessage)`
    ${styles}
  `),
)
