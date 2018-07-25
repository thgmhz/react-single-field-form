import React from 'react'
import classnames from 'classnames'
import styles from './Input.css'

const Input = ({
  labelText,
  isCurrent,
}) => {
  const wrapperClasses = classnames(styles.wrapper, {
    [styles.current]: isCurrent,
  })

  return (
    <div className={wrapperClasses}>
      <span className={styles.spanLabel}>
        <label className={styles.label}>{labelText}</label>
      </span>
      <input type="text" className={styles.input} />
    </div>
  )
}

export default Input
