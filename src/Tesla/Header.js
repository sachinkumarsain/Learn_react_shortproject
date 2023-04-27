import React from 'react'
import logo from'./images/logo.svg'

function Header() {
  return (
    <>
    <header>
        <div>
            <img src={logo}></img>
        </div>
        <div>
          <ul>
            <li>Model S</li>
            <li>Model 3</li>
            <li>Model X</li>
            <li>ModelY</li>
            <li>Solar Roof</li>
            <li>Solar Panels</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Shop</li>
            <li>Account</li>
            <li>Menu</li>
          </ul>
        </div>
    </header>
    </>
  )
}

export default Header