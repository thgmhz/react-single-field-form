import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './Textarea.css'

class Textarea extends Component {
  componentDidMount () {
    this.setInputFocus()
  }

  componentDidUpdate () {
    this.setInputFocus()
  }

  setInputFocus () {
    const { isVisible } = this.props

    if (isVisible) this.inputRef.focus()
  }

  render () {
    const {
      name,
      labelText,
      isVisible,
      onKeyPress,
    } = this.props

    const inputClasses = classnames('Input-wrapper', {
      visible: isVisible,
    })

    return (
      <div className={inputClasses}>
        <span>
          <label htmlFor={name}>
            {labelText}
          </label>
        </span>
        <textarea
          ref={(input) => { this.inputRef = input }}
          onKeyPress={onKeyPress}
        />
      </div>
    )
  }
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
  labelText: PropTypes.string,
  onKeyPress: PropTypes.func.isRequired,
}

Textarea.defaultProps = {
  labelText: '',
  isVisible: true,
}

export default Textarea
