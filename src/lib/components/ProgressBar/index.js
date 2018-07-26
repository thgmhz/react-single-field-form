import React, { Component } from 'react'
import styles from './ProgressBar.css'

class ProgressBar extends Component {
  render () {
    const {
      currentInput,
      totalInputs,
      customStyles,
    } = this.props

    const barWidth = ((currentInput / totalInputs) * 100)
    const counter = `${currentInput} / ${totalInputs}`
    
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
  style: {},
}

export default ProgressBar
