import React from 'react'
import PropTypes from 'prop-types'
import './ProgressBar.css'

const ProgressBar = ({
  currentField,
  totalFields,
  customStyles,
  isInTransition,
}) => {
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
        />
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

ProgressBar.propTypes = {
  currentField: PropTypes.number,
  totalFields: PropTypes.number,
  customStyles: PropTypes.shape(),
  isInTransition: PropTypes.bool.isRequired,
}

ProgressBar.defaultProps = {
  customStyles: {},
  totalFields: 0,
  currentField: 0,
}

export default ProgressBar
