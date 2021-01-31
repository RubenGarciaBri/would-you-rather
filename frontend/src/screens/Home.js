import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Nav from '../components/Nav'
import HomePanel from '../components/HomePanel'
import ErrorMessage from '../components/ErrorMessage'

const Home = ({ authedUser }) => {
 
  return (
    <>
      {authedUser !== null ?
      <>
        <Nav />
        <HomePanel />
      </>  
      : 
      <ErrorMessage/>
      }  
    </>
  )
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Home)