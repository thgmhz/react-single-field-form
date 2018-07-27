import React, { Component } from 'react'
import styles from './ProgressBar.css'

class ProgressBar extends Component {
  render () {
    const {
      currentField,
      totalFields,
      customStyles,
    } = this.props

    const barWidth = ((currentField / totalFields) * 100)
    const counter = `${currentField} / ${totalFields}`
    
    return (
      <div className={styles.progressBar}>
        <div
          className={styles.barWrapper}
          style={{ ...customStyles }}
        >
          <div
            className={styles.bar}
            style={{
              width: `${barWidth}%`,
              ...customStyles.bar,
            }}
          ></div>      
        </div>
        <div
          className={styles.counter}
          style={customStyles.counter}
        >
          {counter}
        </div>
      </div>
    )
  }
}

ProgressBar.defaultProps = {
  customStyles: {},
  totalFields: 0,
  currentField: 0,
}

export default ProgressBar
