import React, { Fragment } from 'react'
import classnames from 'classnames'
import './Input.css'

const Form = ({ children }) => {
  const childrenWithProps = React.Children.map(children, (child, index) => {
    let isCurrent = false
    
    if (index === 1) {
      isCurrent = true
    }

    return React.cloneElement(child, { 
      isCurrent
    })
  })

  return (
    <Fragment>
      <form>
        { childrenWithProps }
      </form>      
    </Fragment>
  )
}

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

export { 
  Form,
  Input,
}
