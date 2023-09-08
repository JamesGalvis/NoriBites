function Navbar() {
  return (
    <header>
      <nav className="header__nav">
        <div className="header__logo">
          <h4>NoriBites</h4>
          <div className="header__logo-overlay"></div>
        </div>

        <ul className="header__menu">
          <li>
            <a href="#Menu">Menu</a>
          </li>
          <li>
            <a href="#Menu">Food</a>
          </li>
          <li>
            <a href="#Menu">Services</a>
          </li>
          <li>
            <a href="#Menu">About Us</a>
          </li>
          <li>
            <img src="src/assets/search.svg" alt="Search logo" />
          </li>
        </ul>

        <ul className="header__menu-mobile">
          <li>
            <img src="src/assets/menu.svg" alt="Menu logo" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
