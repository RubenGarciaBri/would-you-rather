import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import { removeAuthedUser } from '../actions/authedUser'

const Nav = ({ authedUser, dispatch }) => {
  let history = useHistory();

  const handleLogout = () => {
    dispatch(removeAuthedUser())
    history.push('/')
  }

  return (
    <nav className='navbar'>
      <div className='navbar__container main-container'>
        <div className='navbar__left'>
          <ul className='navbar__left-list'>
            <li className='navbar__left-list__item active'><NavLink to='/home' exact activeClassName='active'>Home</NavLink>
            </li>
            <li className='navbar__left-list__item active'><NavLink to='/add' exact activeClassName='active'>Create Poll</NavLink>
            </li>
            <li className='navbar__left-list__item active'><NavLink to='/leaderboard' exact activeClassName='active'>Leaderboard</NavLink>
            </li>
          </ul>
        </div>
        <div className='navbar__right'>
        <ul className='navbar__right-list'>
          <li className='navbar__right-list__item'>
            <img src={authedUser.avatar} className='navbar__right-list__item-img'/>
            <span className='navbar__right-list__item-name'>{authedUser.id}</span>
          </li>
          <li className='navbar__right-list__item'><button
          onClick={handleLogout}>Logout</button>
          </li>
        </ul>
        </div>
        
      </div>
    </nav>
  )
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Nav)
