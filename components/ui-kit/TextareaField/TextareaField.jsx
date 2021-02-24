import React, { PureComponent } from 'react'
import { bool, oneOf, string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './TextareaField.styles'

class TextareaField extends PureComponent {
  static propTypes = {
    tag: string,
    id: string,
    kind: oneOf(['regular', 'light']),
    className: string,
    rows: string,
    placeholder: string,
    label: string,
    autoFocus: bool,
    type: string,
    disabled: bool,
    testId: string,
  }

  static defaultProps = {
    kind: 'light',
  }

  handleChange = (event) => {
    const { value } = event.target
    this.props.input.onChange(value)
  }

  render() {
    const {
      id,
      placeholder,
      rows,
      label,
      autoFocus,
      type,
      kind,
      disabled,
      className,
      maxLength,
      testId,
      tabIndex,
      input: { name, value, onBlur, onFocus },
      meta: { error, invalid, submitFailed },
      required,
    } = this.props

    const showError = invalid && submitFailed

    return (
      <div
        className={cn('font_inputted-text-regular', className, {
          error: showError,
          [`textarea_${kind}`]: kind,
        })}
      >
        <textarea
          id={id}
          className={cn('font_inputted-text-regular', { textarea_filled: value })}
          name={name}
          placeholder={placeholder}
          onChange={this.handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          autoFocus={autoFocus}
          type={type}
          rows={rows}
          disabled={disabled}
          value={value}
          maxLength={maxLength}
          aria-label={label}
          data-testid={testId}
          tabIndex={tabIndex}
          required={required}
          aria-required={required}
        />
        {showError && <span className="font_input-small-error-label error">{error}</span>}
        {label && (
          <label
            className={showError ? 'font_input-small-error-label' : 'font_input-small-label'}
            dangerouslySetInnerHTML={{ __html: label }}
            htmlFor={id}
          />
        )}
      </div>
    )
  }
}

export default styled(TextareaField)`
  ${styles}
`
