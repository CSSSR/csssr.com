import React from 'react'
import { arrayOf, string } from 'prop-types'
import { Field } from 'react-final-form'
import styled from '@emotion/styled'
import styles from './ContactOptionsMobile.styles'
import { css } from '@emotion/react'
import { L10nConsumer } from '../../../utils/l10nProvider'
import SelectField from '../../ui-kit/SelectField/SelectField'
import TextField from '../../ui-kit/TextField/TextField'
import getContactOptions from '../../../data/job/getContactOptions'

const ContactOptionsMobile = ({ className, connection, l10n: { translations } }) => {
  const connectionData =
    connection[0] && getContactOptions(translations).find((contact) => contact.id === connection[0])

  return (
    <fieldset className={className} data-testid="Jobs:block:contactOptions">
      <legend className="font_h3-regular">{translations.job.additionalContactInfo}:</legend>

      <Field
        name="connection[0]"
        placeholder={translations.job.additionalContactInfo}
        options={getContactOptions(translations)}
        id="phone"
        component={SelectField}
        testId="Jobs:field:contactOptions.phone"
      />

      {connection[0] && (
        <Field
          css={css`
            div {
              margin-top: 2.5rem;
            }
          `}
          id={`${connectionData.id}OptionalContactField`}
          name={connectionData.id}
          type={connectionData.inputType}
          label={connectionData.inputText}
          component={TextField}
          testId={`Jobs:field:contactOptions.${connectionData.id}`}
          kind="regular"
        />
      )}
    </fieldset>
  )
}

ContactOptionsMobile.propTypes = {
  connection: arrayOf(string),
}

export default styled(L10nConsumer(ContactOptionsMobile))`
  ${styles}
`
