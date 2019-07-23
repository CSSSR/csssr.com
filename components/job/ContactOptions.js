import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import { arrayOf, string, func } from 'prop-types'
import { Field } from 'react-final-form'
import withI18next from '../../utils/withI18next'
import Checkbox from '../ui-kit/Checkbox'
import TextField from '../ui-kit/TextField'
import contactOptions from '../../data/job/contactOptions'

const stylesForCheckbox = css.resolve`
  span {
    margin-bottom: 1rem;
    display: block;
  }
`

const stylesForInput = css.resolve`
  div {
    margin-top: 2rem;
    margin-bottom: 2.9375rem;
  }
`

const ContactOptions = ({ connection = [], t }) =>
  <fieldset>
    <legend className='font_h3-regular'>
      {t('job:additionalContactInfo')}:
    </legend>

    {contactOptions.map(option =>
      <Fragment key={option.id}>
        <Field
          className={stylesForCheckbox.className}
          id={`${option.id}OptionalContactCheckbox`}
          name='connection'
          value={option.id}
          type='checkbox'
          component={Checkbox}
        >
          {option.checkboxText}
        </Field>

        {connection.includes(option.id) &&
          <Field
            className={stylesForInput.className}
            id={`${option.id}OptionalContactField`}
            name={option.id}
            component={TextField}
            type={option.inputType}
            theme='regular'
            label={option.inputText}
          />
        }
      </Fragment>
    )}
    <style jsx>{`
      fieldset {
        grid-column: 10 / span 3;
        grid-row: 1 / span 10;
        white-space: nowrap;
        border: none;
      }

      legend {
        white-space: nowrap;
        margin-bottom: 1rem;
      }
    `}</style>
    {stylesForCheckbox.styles}
    {stylesForInput.styles}
  </fieldset>

ContactOptions.propTypes = {
  connection: arrayOf(string),
  t: func,
}

export default withI18next(['job'])(ContactOptions)
