import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({ isCurrent }) => {
  return (
    <div className="ProgressBar-wrapper">
      <div className="ProgressBar-bar"></div>
    </div>
  )
}

export default ProgressBar
