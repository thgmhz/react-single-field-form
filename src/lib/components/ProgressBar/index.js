import React from 'react'
import styles from './ProgressBar.css'

const ProgressBar = ({ isCurrent }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bar}></div>
    </div>
  )
}

export default ProgressBar
