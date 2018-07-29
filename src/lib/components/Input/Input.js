import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './Input.css'

class Input extends Component {
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
        <input
          id={name}
          ref={(input) => { this.inputRef = input }}
          type="text"
          name={name}
          className="field"
          onKeyPress={onKeyPress}
        />
      </div>
    )
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  isVisible: PropTypes.bool,
  onKeyPress: PropTypes.func.isRequired,
}

Input.defaultProps = {
  labelText: '',
  isVisible: true,
}

export default Input
