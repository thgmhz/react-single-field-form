import React, { Component } from 'react'
import styles from './Form.css'

const inputFields = ['Input']

const checkIfIsInputField = child => inputFields.includes(child.type.name)

const getTotalInputs = {
  Array: children => children.filter(checkIfIsInputField).length,
  Object: () => 1
}
class Form extends Component {
  constructor (props) {
    super(props)
    
    const { children } = props
    const childrenConstructor = children.constructor.name
    
    if (!children) {
      throw new Error('The "Form" must have children.')
    }

    const totalInputs = getTotalInputs[childrenConstructor](children)

    if (!totalInputs) {
      throw new Error('The "Form" must have input fields.')
    }

    this.state = {
      formData: {},
      totalInputs,
      currentInput: 0,
    }
  }

  onInputKeyPress (e) {
    if (e.key === 'Enter') {
      const { formData, currentInput, totalInputs } = this.state
    
      const inputName = e.target.name
      const inputValue = e.target.value
      const isLastInputField = currentInput >= totalInputs - 1
    
      if (isLastInputField) {
        // submit form
      }

      const newCurrentInput = isLastInputField
        ? totalInputs
        : currentInput + 1

      this.setState({
        currentInput: newCurrentInput,
        formData: {
          ...formData,
          [inputName]: inputValue,
        }
      })

    }
  }

  buildChildrens = (child, index) => {
    const { currentInput, totalInputs } = this.state
    const componentName = child.type.name

    const isInputField = checkIfIsInputField(child)
    const indexIsEqualCurrentInput = (index === currentInput)
    const isLastInputField = (
      (index === currentInput - 1) && 
      (currentInput >= totalInputs)
    )
    
    const isVisible = (
      isInputField && 
      (indexIsEqualCurrentInput || isLastInputField)
    ) ? true : false

    const childProps = {
      Input: {
        isVisible,
        onKeyPress: (e) => this.onInputKeyPress(e),
      },
      ProgressBar: {
        currentInput,
        totalInputs,
      },
    }

    return React.cloneElement(child, childProps[componentName])
  }

  render () {
    const { children } = this.props    
    const childrenWithProps = React.Children.map(children, this.buildChildrens)

    return (
      <form className={styles.wrapper}>
        {childrenWithProps}
      </form>
    )
  }
}

export default Form
