import React from 'react';

function Navbar () {
  return (
    <nav id="sideNavbar" className="navbar navbar-expand-lg">
      <div className="container-fluid justify-content-end">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleNavbar" aria-control="toggleNavbar" aria-expanded="false" aria-label="Toggle navigation">=
        </button>
        <div className="collapse navbar-collapse" id="toggleNavbar">
          <ul className="navbar-nav d-flex align-items-end">
            <li className="nav-item">
              <a className="nav-link" href="#projects">projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">about</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">contact</a>
            </li>
            <ul className="d-flex m-0 p-0">
              <li className="nav-item d-flex px-4">
                <a className="nav-link" href="/">g</a>
              </li>
              <li className="nav-item d-flex pe-2">
                <a className="nav-link" href="/">l</a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;