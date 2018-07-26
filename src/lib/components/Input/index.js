import React, { Component } from 'react'
import classnames from 'classnames'
import styles from './Input.css'

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

    const inputClasses = classnames(styles.input, {
      [styles.visible]: isVisible,
    })

    return (
      <div className={inputClasses}>
        <span className={styles.span}>
          <label className={styles.label}>{labelText}</label>
        </span>
        <input
          ref={(input) => this.inputRef = input}
          type="text"
          name={name}
          className={styles.field}
          onKeyPress={onKeyPress}
          />
      </div>
    )
  }
}

export default Input
