import React from 'react'
import classnames from 'classnames'
import styles from './Input.css'

const Input = ({ isCurrent }) => {
  const wrapperClasses = classnames(styles.wrapper, {
    [styles.current]: isCurrent,
  })

  return (
    <div className={wrapperClasses}>    
      <input type="text" />
    </div>
  )
}

export default Input
