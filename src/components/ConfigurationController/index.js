import './index.css'

const ConfigurationController = () => {
  console.log('Configuration Controller')
  return (
    <div className="configuration-controller-bg-container">
      <div className="configuration-container">
        <h1 className="layout-heading">Layout</h1>
        <label className="check-box" htmlFor="content">
          <input className="input" id="content" type="checkbox" />
          Content
        </label>
        <label className="check-box" htmlFor="leftNavbar">
          <input className="input" id="leftNavbar" type="checkbox" />
          Left Navbar
        </label>
        <label className="check-box rightNavbar-label" htmlFor="rightNavbar">
          <input className="input" id="rightNavbar" type="checkbox" />
          Right Navbar
        </label>
      </div>
    </div>
  )
}

export default ConfigurationController
