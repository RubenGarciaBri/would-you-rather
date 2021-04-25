import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button} from 'semantic-ui-react'
import { FaHome, FaSignOutAlt, FaTrophy } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";

import { removeAuthedUser } from '../actions/authedUser'

const Nav = ({ authedUser, dispatch }) => {
  let history = useHistory();

  const handleLogout = () => {
    dispatch(removeAuthedUser())
    history.push('/')
  }

  const activeColor = '#1CB0F6'

  return (
    <nav className='navbar'>
      <div className='navbar__container main-container'>
        <div className='navbar__left'>
          <ul className='navbar__left-list'>
            <li className='navbar__left-list__item'>
              <NavLink
              to='/home'
              activeStyle={{
              color: activeColor,
              opacity: 1
              }}>
                <FaHome size={24} className='navbar__left-list__item-icon'/>
                <span>Home</span>              
              </NavLink>
            </li>
            <li className='navbar__left-list__item'>
              <NavLink
              to='/add'
              activeStyle={{
                color: activeColor,
                opacity: 1
              }}>
                <MdAddCircle size={24} className='navbar__left-list__item-icon'/>
                <span>Create Poll</span>                
              </NavLink>
            </li>
            <li className='navbar__left-list__item'>
              <NavLink
              to='/leaderboard'
              activeStyle={{
                color: activeColor,
                opacity: 1
              }}>
                <FaTrophy size={24} className='navbar__left-list__item-icon'/>
                <span>Leaderboard</span>               
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='navbar__right'>
        <ul className='navbar__right-list'>
          <li className='navbar__right-list__item'>
            <img src={authedUser.avatar} className='navbar__right-list__item-img shadow-slim'/>
            <span className='navbar__right-list__item-name'>{authedUser.id}</span>
          </li>
          <li className='navbar__right-list__item'>
            <Button className='navbar__right-list__item-logout'
            onClick={handleLogout}>
              <FaSignOutAlt 
              className='navbar__right-list__item-logout__icon' size={18}/>
            </Button>
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
