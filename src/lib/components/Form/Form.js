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

  submitForm () {
    const submitEvent = new Event('submit')
    this.formRef.dispatchEvent(submitEvent)
  }

  handleFormSubmit = event => {
    const { formData } = this.state
    const { onSubmit } = this.props

    onSubmit({ event, formData })
  }

  onInputKeyPress (e) {
    const { onSubmit, finalMessage } = this.props

    if (e.key === 'Enter') {
      const {
        formData,
        currentField,
        totalFields,
      } = this.state
    
      const inputName = e.target.name
      const inputValue = e.target.value
      const isLastInputField = currentField >= totalFields - 1

      const newcurrentField = isLastInputField
        ? totalFields
        : currentField + 1

      const showFinalMessage = (finalMessage && isLastInputField)
        ? true
        : false

      this.setState({
        currentField: newcurrentField,
        isInTransition: true,
        showFinalMessage,
        formData: {
          ...formData,
          [inputName]: inputValue,
        }
      }, () => {
        if (isLastInputField && onSubmit) {
          this.submitForm()
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

  buildFinalMessage = finalMessage => (
    <span>{finalMessage}</span>
  )

  render () {
    const {
      currentField,
      totalFields,
      isInTransition,
      showFinalMessage,
    } = this.state

    const {
      children,
      method,
      action,
      enableProgressBar,
      finalMessage,
      customStyles,
    } = this.props    
    
    const fieldsWithProps = React.Children.map(children, this.buildFields)

    const { progressBar } = customStyles

    const formClasses = classnames('Form-wrapper', {
      'isInTransition': isInTransition,
    })

    return (
      <React.Fragment>
        <form
          method={method || 'get'}
          action={action}
          className={formClasses}
          onSubmit={this.handleFormSubmit}
          ref={(form) => this.formRef = form}
        >
          {
            showFinalMessage 
              ? this.buildFinalMessage(finalMessage)
              : fieldsWithProps
          }
          {
            enableProgressBar && !showFinalMessage &&
            <ProgressBar 
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
