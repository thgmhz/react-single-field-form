import React, { Component } from 'react'
import classnames from 'classnames'

import ProgressBar from '../ProgressBar/ProgressBar'
import './Form.css'

const getTotalFields = {
  'Array': children => children.length,
  'Object': () => 1
}
class Form extends Component {
  constructor (props) {
    super(props)
    
    const { children } = props
    const childrenConstructor = children.constructor.name
    
    if (!children) {
      throw new Error('The "Form" must have children.')
    }

    const totalFields = getTotalFields[childrenConstructor](children)

    if (!totalFields) {
      throw new Error('The "Form" must have input fields.')
    }

    this.state = {
      formData: {},
      totalFields,
      currentField: 0,
      isInTransition: false,
    }
  }

  onInputKeyPress (e) {
    if (e.key === 'Enter') {
      const { formData, currentField, totalFields } = this.state
    
      const inputName = e.target.name
      const inputValue = e.target.value
      const isLastInputField = currentField >= totalFields - 1
    
      if (isLastInputField) {
        // submit form
      }

      const newcurrentField = isLastInputField
        ? totalFields
        : currentField + 1

        this.setState({
          currentField: newcurrentField,
          isInTransition: true,
          formData: {
            ...formData,
            [inputName]: inputValue,
          }
        })
        
      setTimeout(() => {
        this.setState({ isInTransition: false })
      }, 500)

    }
  }

  buildFields = (field, index) => {
    const { currentField, totalFields } = this.state
    const componentName = field.type.name

    const indexIsEqualCurrentField = (index === currentField)

    const isLastInputField = (
      (index === currentField - 1) &&
      (currentField >= totalFields)
    )

    const isVisible = (indexIsEqualCurrentField || isLastInputField)
      ? true
      : false

    const fieldProps = {
      Input: {
        isVisible,
        onKeyPress: (e) => this.onInputKeyPress(e),
      },
      Select: {}, //todo
      Option: {}, //todo
      Checkbox: {}, //todo
      Textarea: {}, //todo
    }

    return React.cloneElement(field, fieldProps[componentName])
  }

  render () {
    const { currentField, totalFields, isInTransition } = this.state
    const { children, enableProgressBar, customStyles } = this.props    
    
    const fieldsWithProps = React.Children.map(children, this.buildFields)

    const { progressBar } = customStyles

    const formClasses = classnames('Form-wrapper', {
      'isInTransition': isInTransition,
    })

    return (
      <React.Fragment>
        <form className={formClasses}>
          {fieldsWithProps}
          {
            enableProgressBar && <ProgressBar 
              currentField={currentField}
              totalFields={totalFields}
              isInTransition={isInTransition}
              customStyles={progressBar}
            />
          }
        </form>
      </React.Fragment>
    )
  }
}

export default Form
