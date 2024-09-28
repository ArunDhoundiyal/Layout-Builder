import React, {useContext} from 'react'
import {ConfigurationContext} from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => {
  const {
    showContent,
    setShowContent,
    showLeftNavbar,
    setShowLeftNavbar,
    showRightNavbar,
    setShowRightNavbar,
  } = useContext(ConfigurationContext)

  const onToggleShowContent = () => {
    setShowContent(preState => !preState)
  }
  const onToggleShowLeftNavbar = () => {
    setShowLeftNavbar(preState => !preState)
  }
  const onToggleShowRightNavbar = () => {
    setShowRightNavbar(preState => !preState)
  }

  return (
    <div className="configuration-controller-bg-container">
      <div className="configuration-container">
        <h1 className="layout-heading">Layout</h1>
        <label className="check-box" htmlFor="content">
          <input
            className="input"
            id="content"
            type="checkbox"
            checked={showContent}
            onChange={onToggleShowContent}
          />
          Content
        </label>
        <label className="check-box" htmlFor="leftNavbar">
          <input
            className="input"
            id="leftNavbar"
            type="checkbox"
            checked={showLeftNavbar}
            onChange={onToggleShowLeftNavbar}
          />
          Left Navbar
        </label>
        <label className="check-box rightNavbar-label" htmlFor="rightNavbar">
          <input
            className="input"
            id="rightNavbar"
            type="checkbox"
            checked={showRightNavbar}
            onChange={onToggleShowRightNavbar}
          />
          Right Navbar
        </label>
      </div>
    </div>
  )
}

export default ConfigurationController
