import React from 'react'
import classnames from 'classnames'
import './Input.css'

const Input = ({ isCurrent }) => {
  const wrapperClasses = classnames('Input-wrapper', {
    'current': isCurrent,
  })

  return (
    <div className={wrapperClasses}>    
      <input type="text" />
    </div>
  )
}

export default Input
