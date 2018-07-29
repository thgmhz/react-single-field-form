import React, { Component } from 'react'
import './ProgressBar.css'

class ProgressBar extends Component {
  render () {
    const {
      currentField,
      totalFields,
      customStyles,
      isInTransition,
    } = this.props
    
    const barWidth = ((currentField / totalFields) * 100)
    
    return (
      <div className="ProgressBar-wrapper">
        <div
          className="barWrapper"
          style={{ ...customStyles }}
        >
          <div
            className="bar"
            style={{
              width: `${barWidth}%`,
              ...customStyles.bar,
            }}
          ></div>      
        </div>
        <span
          className="counter"
          style={customStyles.counter}
        >
          <span className="currentNumber">
            {
              isInTransition ? currentField - 1 : currentField
            }
          </span>       
          {
            isInTransition && 
            <span className="nextNumber">{currentField}</span>
          }
          <span className="totalNumber">{totalFields}</span>
        </span>
      </div>
    )
  }
}

ProgressBar.defaultProps = {
  customStyles: {},
  totalFields: 0,
  currentField: 0,
}

export default ProgressBar
