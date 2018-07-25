import React, { Fragment } from 'react'
import './Form.css'

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
      <form class="Form-wrapper">
        {childrenWithProps}
      </form>
    </Fragment>
  )
}

export default Form
