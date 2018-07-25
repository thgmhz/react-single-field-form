import React from 'react'
import styles from './ProgressBar.css'

const ProgressBar = ({
  isCurrent,
  currentInput,
  totalInputs,
  customStyles,
}) => {
  const barWidth = ((totalInputs / 100) * currentInput)
  const counter = `${currentInput + 1} / ${totalInputs}`

  return (
    <div className={styles.progressBar}>
      <div
        className={styles.barWrapper}
        style={{ ...customStyles }}
      >
        <div
          className={styles.bar}
          style={{
            width: barWidth,
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

ProgressBar.defaultProps = {
  style: {},
}

export default ProgressBar
