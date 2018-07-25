import React, { Component, Fragment } from 'react'
import styles from './Form.css'

class Form extends Component {
  state = {
    currentInput: 0,
    totalInputs: 0,
  }

  childsWhoAreInputs = ['Input']

  componentWillMount () {
    const { children } = this.props

    const inputs = children.filter(child => 
      this.childsWhoAreInputs.includes(child.type.name)
    )

    this.setState({ totalInputs: inputs.length })
  }

  buildChildrens = (child, index) => {
    const { currentInput, totalInputs } = this.state

    const isCurrent = index === currentInput
      ? true
      : false

    return React.cloneElement(child, {
      isCurrent,
      totalInputs,
      currentInput,
    })
  }

  render () {
    const { children } = this.props    
    const childrenWithProps = React.Children.map(children, this.buildChildrens)

    return (
      <Fragment>
        <form className={styles.wrapper}>
          {childrenWithProps}
        </form>
      </Fragment>
    )
  }
}

export default Form
