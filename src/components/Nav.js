import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'

const Nav = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__container main-container'>
        <div className='navbar__left'>
          <ul className='navbar__left-list'>
            <li className='navbar__left-list__item active'><NavLink to='/home' exact activeClassName='active'>Home</NavLink>
            </li>
            <li className='navbar__left-list__item active'><NavLink to='/new' exact activeClassName='active'>Create Poll</NavLink>
            </li>
            <li className='navbar__left-list__item active'><NavLink to='/leaderboard' exact activeClassName='active'>Leaderboard</NavLink>
            </li>
          </ul>
        </div>
        <div className='navbar__right'>
        <ul className='navbar__right-list'>
          <li className='navbar__right-list__item'>
            <img src='https://randomuser.me/api/portraits/men/49.jpg' className='navbar__right-list__item-img'/>
            <span className='navbar__right-list__item-name'>Full Name</span>
          </li>
          <li className='navbar__right-list__item'><NavLink to='/' exact>Logout</NavLink>
          </li>
        </ul>
        </div>
        
      </div>
    </nav>
  )
}

export default Nav
