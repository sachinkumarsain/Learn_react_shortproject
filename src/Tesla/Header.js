import React from 'react'
import logo from './images/logo.svg'

function Header() {
  return (
    <>
      <header>
        <div>
          <img src={logo}></img>
        </div>
        <div>
          <ul>
            <li><a href=''>Model S</a></li>
            <li><a href=''>Model 3</a></li>
            <li><a href=''>Model X</a></li>
            <li><a href=''>Model Y</a></li>
            <li><a href=''>Solar Roof</a></li>
            <li><a href=''>Solar Panels</a></li>

          </ul>
        </div>
        <div>
          <ul>
            <li><a href=''>Shop</a></li>
            <li><a href=''>Account</a></li>
            <li><a href=''>Menu</a></li>

          </ul>
        </div>
      </header>
    </>
  )
}

export default Header