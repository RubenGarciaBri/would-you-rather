import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Menu, Button, Container, Immage } from 'semantic-ui-react'
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
            <li className='navbar__left-list__item active'><NavLink to='/home' activeClassName='active'>Home</NavLink>
            </li>
            <li className='navbar__left-list__item active'><NavLink to='/add'  activeClassName='active'>Create Poll</NavLink>
            </li>
            <li className='navbar__left-list__item active'><NavLink to='/leaderboard'  activeClassName='active'>Leaderboard</NavLink>
            </li>
          </ul>
        </div>
        <div className='navbar__right'>
        <ul className='navbar__right-list'>
          <li className='navbar__right-list__item'>
            <img src={authedUser.avatar} className='navbar__right-list__item-img'/>
            <span className='navbar__right-list__item-name'>{authedUser.id}</span>
          </li>
          <li className='navbar__right-list__item'><Button
          onClick={handleLogout}>Logout</Button>
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
