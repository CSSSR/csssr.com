import React from 'react'
import { bool, number, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './TextField.styles'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { Field } from 'react-final-form'
import TextareaField from '../../../ui-kit/TextareaField/TextareaField'
import {
  composeValidators,
  maxLength as maxLengthValidator,
  required as requiredValidator,
} from '../../../../utils/validators'

const JobSectionTextField = ({
  className,
  title,
  maxLength,
  required,
  inputIndex,
  l10n: { translations, language },
}) => {
  const validate = composeValidators(
    required && requiredValidator(translations),
    maxLengthValidator(maxLength, translations, language),
  )
  return (
    <Field
      className={className}
      name={`quests[${inputIndex}].text`}
      maxLength={maxLength}
      validate={validate}
      component={TextareaField}
      label={title}
      kind="regular"
      required={required}
      testId="Jobs:field:input"
    />
  )
}

JobSectionTextField.propTypes = {
  index: number,
  title: string,
  maxLength: number,
  required: bool,
}

export default styled(L10nConsumer(JobSectionTextField))`
  ${styles}
`
