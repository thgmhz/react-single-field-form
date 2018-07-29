import React, { Component } from 'react'
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
    
    isVisible && this.inputRef.focus()
  }

  render () {
    const {
      name,
      labelText,
      isVisible,
      onKeyPress,
    } = this.props

    const inputClasses = classnames('Input-wrapper', {
      'visible': isVisible,
    })

    return (
      <div className={inputClasses}>
        <span>
          <label>{labelText}</label>
        </span>
        <input
          ref={(input) => this.inputRef = input}
          type="text"
          name={name}
          className="field"
          onKeyPress={onKeyPress}
        />
      </div>
    )
  }
}

export default Input
