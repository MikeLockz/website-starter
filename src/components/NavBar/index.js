import React from 'react'
import Link from 'gatsby-link'

const NavBar = () => {
  return (
    <nav className='navbar is-fixed-top' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
                    Website Starter
        </Link>
        <button className='button navbar-burger' data-target='navMenu'>
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className='navbar-menu' id='navMenu'>
        <div className='navbar-start'>
          <Link className='navbar-item' to='/design-system'>
                        Design System
          </Link>
          <Link className='navbar-item' to='/join-us'>
                        Join Us
          </Link>
          <Link className='navbar-item' to='/design-thinking'>
                        Design Thinking
          </Link>
          <Link className='navbar-item' to='/research'>
                        Research
          </Link>
          <Link className='navbar-item' to='/team'>
                        Team
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
