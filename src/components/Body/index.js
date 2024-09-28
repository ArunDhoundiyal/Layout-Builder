import React, {useContext} from 'react'
import {ConfigurationContext} from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  const {showContent, showLeftNavbar, showRightNavbar} = useContext(
    ConfigurationContext,
  )
  return (
    <div className="body-container">
      <div className="body-inner-container">
        {showLeftNavbar && (
          <ul className="left-navbar-menu">
            <h1 className="navbar-menu-heading">Left Navbar Menu</h1>
            <li className="item">Item 1</li>
            <li className="item">Item 2</li>
            <li className="item">Item 3</li>
            <li className="item">Item 4</li>
          </ul>
        )}
        {showContent && (
          <div className="content-menu">
            <h1 className="navbar-menu-heading">Content</h1>
            <p className="body-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              elusmod tempor Incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        )}
        {showRightNavbar && (
          <div className="right-navbar-menu">
            <h1 className="navbar-menu-heading">Right Navbar </h1>
            <div className="ad-square">Ad 1</div>
            <div className="ad-square">Ad 2</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Body
