import React from 'react'
import { string, bool } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './TextFieldNew.styles'

const TextFieldNew = ({
  className,
  id,
  label,
  testId,
  tabIndex,
  autoFocus,
  disabled,
  input: { name, type, value, onBlur, onChange, onFocus },
  meta: { error, invalid, submitError, submitFailed },
  required,
  ...rest
}) => {
  let showError = invalid && submitFailed
  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <div className={className}>
      <input
        className={cn('input field-input', { _error: showError, _filled: value })}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        tabIndex={tabIndex}
        autoFocus={autoFocus}
        type={type}
        disabled={disabled}
        data-testid={testId}
        required={required}
        aria-required={required}
        {...rest}
      />

      {label && (
        <label
          className={cn('label', { _active: value })}
          htmlFor={id}
          dangerouslySetInnerHTML={{ __html: (showError && (error || submitError)) || label }}
        />
      )}
    </div>
  )
}

TextFieldNew.propTypes = {
  className: string,
  label: string,
  testId: string.isRequired,
  name: string,
  id: string,
  isError: bool,
  required: bool,
}

export default styled(TextFieldNew)`
  ${styles}
`
