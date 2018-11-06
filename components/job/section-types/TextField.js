import React, { Fragment } from 'react'
import { string, number, bool } from 'prop-types'
import css from 'styled-jsx/css'
import { Field } from 'react-final-form'
import TextareaField from '../../ui-kit/TextareaField'
import {
  composeValidators,
  maxLength as maxLengthValidator,
  required as requiredValidator,
} from '../../../utils/validators'

const { className, styles } = css.resolve`
  div {
    margin-top: 2.5rem;
  }
`

const JobSectionTextField = ({ title, maxLength, required, inputIndex }) => {
  const validate = composeValidators(
    required && requiredValidator,
    maxLengthValidator(maxLength)
  )
  return <Fragment>
    <Field
      className={className}
      name={`quests[${inputIndex}].text`}
      maxLength={maxLength}
      validate={validate}
      component={TextareaField}
      label={title}
      theme='regular'
    />
    <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: `${required && '* '}${title}` }} />
    <style jsx>{`
      p {
        margin-top: 0.5rem;
      }
    `}</style>
    {styles}
  </Fragment>
}

JobSectionTextField.propTypes = {
  index: number,
  title: string,
  maxLength: number,
  required: bool,
}

export default JobSectionTextField