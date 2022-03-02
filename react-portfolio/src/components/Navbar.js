import React from 'react';

function Navbar () {
  return (
    <nav id="sideNavbar" className="navbar navbar-expand-lg">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleNavbar" aria-control="toggleNavbar" aria-expanded="false" aria-label="Toggle navigation">=
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="toggleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#projects">projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">about</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">g</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">l</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;