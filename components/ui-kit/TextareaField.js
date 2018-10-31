import React, { PureComponent } from 'react'
import { string, oneOf, bool } from 'prop-types'
import cn from 'classnames'
import TextareaFieldLightStyles from './styles/TextareaFieldLight'
import TextareaFieldRegularStyles from './styles/TextareaFieldRegular'

export default class TextareaField extends PureComponent {
  static propTypes = {
    tag: string,
    id: string,
    theme: oneOf(['regular', 'light']),
    state: oneOf(['error', null]),
    placeholder: string,
    label: string,
    autoFocus: bool,
    type: string,
    disabled: bool,
  }

  static defaultProps = {
    state: null,
    theme: 'light',
  }

  handleChange = event => {
    const { value } = event.target
    this.props.input.onChange(value)
  }

  render() {
    const {
      id,
      state,
      placeholder,
      label,
      autoFocus,
      type,
      theme,
      disabled,
      input: {
        name,
        value,
        onBlur,
        onFocus,
      },
      meta,
    } = this.props

    const styles = theme === 'light' ? TextareaFieldLightStyles : TextareaFieldRegularStyles

    return (
      <div className={cn('font_inputted-text-regular', {
        error: state === 'error',
        [`textfield_${theme}`]: theme,
        textfield_filled: value,
      })}>
        <textarea
          id={id}
          className='font_inputted-text-regular'
          name={name}
          placeholder={placeholder}
          onChange={this.handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          tabIndex={disabled ? -1 : 0}
          autoFocus={autoFocus}
          type={type}
          disabled={disabled}
          value={value}
        />
        {label && <label
          className={value && meta.error && meta.touched ? 'font_input-small-error-label' : 'font_input-small-label'}
          htmlFor={id}
        >
          {label}
        </label>}<style jsx>{styles}</style>
      </div>
    )
  }
}
