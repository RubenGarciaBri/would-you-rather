import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import LoginForm from '../components/LoginForm'

const Login = ({ authedUser }) => {
  let history = useHistory()

  if (authedUser !== null) {
    history.push('/home')
  }

  return (
    <>
      {authedUser !== null ? null : (
        <div className="login-page">
          <LoginForm />
        </div>
      )}
    </>
  )
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(Login)
