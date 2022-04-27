import React from 'react';

function Navbar () {
  return (
    <nav id="sideNavbar" className="navbar navbar-expand-lg">
      <div className="container-fluid justify-content-end">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleNavbar" aria-controls="toggleNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <svg width="40px" height="40px" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
            <g id="color"/>
            <g id="hair"/>
            <g id="skin"/>
            <g id="skin-shadow"/>
            <g id="line">
              <line x1="16" x2="56" y1="26" y2="26" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
              <line x1="16" x2="56" y1="36" y2="36" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
              <line x1="16" x2="56" y1="46" y2="46" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
            </g>
          </svg>
        </button>
        <div className="collapse navbar-collapse" id="toggleNavbar">
          <ul className="navbar-nav d-flex align-items-end align-items-lg-center px-3 px-lg-5">
            <li className="nav-item">
              <a className="nav-link" href="#projectPage">projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutPage">about</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactPage">contact</a>
            </li>
            <ul className="d-flex m-0 p-0 social-links ps-lg-3">
              <li className="nav-item d-flex px-2 px-lg-0 m-lg-1">
                <a className="nav-link p-0" href="https://github.com/jonars99" target="_blank" rel="noreferrer noopener">
                  <svg width="40px" height="40px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg">
                    <g><path d="M12 21c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9-4.037 9-9 9zm0-16c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7zM13.565 12.626c.171 0 .316.084.441.255.124.169.187.378.187.625 0 .248-.062.457-.187.626-.125.169-.271.254-.441.254-.181 0-.337-.084-.461-.254-.124-.169-.187-.378-.187-.626s.062-.456.187-.625c.125-.171.281-.255.461-.255m2.21-2.289c.482.522.725 1.155.725 1.898 0 .482-.057.915-.166 1.301-.111.384-.252.698-.42.939-.171.242-.378.454-.627.635-.249.184-.478.316-.685.401-.208.085-.446.15-.716.196-.266.047-.467.072-.606.079l-.44.009-.352.01-.488.011-.488-.011-.352-.01-.44-.009c-.14-.007-.341-.032-.606-.079-.271-.045-.508-.11-.716-.196-.207-.084-.436-.217-.684-.401-.25-.182-.457-.394-.628-.635-.168-.241-.309-.555-.42-.939-.109-.386-.166-.819-.166-1.301 0-.743.242-1.376.725-1.898-.053-.026-.056-.286-.008-.782.043-.496.148-.953.319-1.37.602.064 1.343.404 2.23 1.017.3-.078.71-.118 1.233-.118.549 0 .959.04 1.234.118.404-.273.791-.496 1.16-.666.374-.168.644-.267.814-.293l.254-.058c.172.417.277.875.32 1.37.05.496.047.756-.006.782m-3.754 5.027c1.083 0 1.899-.129 2.454-.39.553-.26.833-.796.833-1.605 0-.469-.176-.861-.529-1.174-.181-.17-.394-.273-.638-.313-.238-.039-.607-.039-1.104 0-.495.04-.834.058-1.016.058-.248 0-.517-.013-.851-.039l-.783-.049c-.191-.006-.395.018-.616.069-.223.053-.404.143-.55.273-.336.3-.507.691-.507 1.174 0 .809.274 1.345.821 1.605.547.261 1.361.39 2.444.39m-1.524-2.737c.17 0 .316.084.44.255.124.169.187.378.187.625 0 .248-.062.457-.187.626-.124.169-.271.254-.44.254-.182 0-.337-.084-.462-.254-.124-.169-.187-.378-.187-.626s.062-.456.187-.625c.125-.171.28-.255.462-.255"/></g>
                  </svg>
                </a>
              </li>
              <li className="nav-item d-flex pe-0 m-lg-1">
                <a className="nav-link p-1" href="https://www.linkedin.com/in/joanna-redihough/" target="_blank" rel="noreferrer noopener">
                  <svg width="25px" height="25px" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="linkedin-logo-svg">
                    <g id="Group">
                    <path id="Vector" d="M80 0H0V80H80V0Z" fill="#0084B1"/>
                    <g id="Group_2">
                    <path id="Vector_2" d="M18.8278 12.1501C22.4919 12.1531 25.5138 15.1795 25.5059 18.8618C25.4972 22.7176 22.2974 25.6237 18.7827 25.54C15.2178 25.6121 12.0849 22.6346 12.0856 18.8364C12.0856 15.1526 15.1193 12.1473 18.8278 12.1501Z" fill="white"/>
                    <path id="Vector_3" d="M22.7206 67.842H14.8702C13.8513 67.842 13.0254 67.016 13.0254 65.9972V32.5069C13.0254 31.488 13.8513 30.6621 14.8702 30.6621H22.7206C23.7394 30.6621 24.5654 31.488 24.5654 32.5069V65.9974C24.5652 67.016 23.7394 67.842 22.7206 67.842Z" fill="white"/>
                    <path id="Vector_4" d="M67.9144 42.4254C67.9144 35.4044 62.2228 29.7126 55.2017 29.7126H53.1882C49.347 29.7126 45.9534 31.6292 43.9122 34.5586C43.6896 34.8779 43.4835 35.2095 43.2943 35.5519C43.2288 35.542 43.19 35.5369 43.1892 35.5387V31.4278C43.1892 31.005 42.8463 30.6619 42.4233 30.6619H32.6289C32.206 30.6619 31.863 31.0048 31.863 31.4278V67.0764C31.863 67.4993 32.2057 67.8421 32.6285 67.8423L42.6364 67.8448C43.0594 67.8449 43.4024 67.5019 43.4024 67.0789V46.4837C43.4024 42.9237 46.2418 39.9678 49.8017 39.9276C51.6189 39.9071 53.2663 40.6352 54.4537 41.8233C55.6254 42.9943 56.3499 44.6135 56.3499 46.4012V67.0815C56.3499 67.5044 56.6927 67.8472 57.1154 67.8474L67.148 67.8499C67.5711 67.85 67.9141 67.507 67.9141 67.084V42.4254H67.9144Z" fill="white"/>
                    </g>
                    </g>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;