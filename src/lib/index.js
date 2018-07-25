import React, { Fragment } from 'react'
import Input from './components/Input'

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

export { 
  Form,
  Input,
}
