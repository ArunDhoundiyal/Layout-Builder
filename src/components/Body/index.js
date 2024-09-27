import './index.css'

const Body = () => {
  console.log('body')
  return (
    <div className="body-container">
      <div className="body-inner-container">
        <div className="left-navbar-menu">
          <h1 className="navbar-menu-heading">Left Navbar Menu</h1>
          <p className="item">Item 1</p>
          <p className="item">Item 2</p>
          <p className="item">Item 3</p>
          <p className="item">Item 4</p>
        </div>
        <div className="content-menu">
          <h1 className="navbar-menu-heading">Content</h1>
          <p className="body-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            elusmod tempor Incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="right-navbar-menu">
          <h1 className="navbar-menu-heading">Right Navbar </h1>
          <div className="ad-square">Ad 1</div>
          <div className="ad-square">Ad 2</div>
        </div>
      </div>
    </div>
  )
}

export default Body
