import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/Nav'
import PollForm from '../components/PollForm'
import ErrorMessage from '../components/ErrorMessage'

const NewPoll = ({ authedUser }) => {
  return (
    <>
      {authedUser !== null ? (
        <>
          <Nav />
          <h1 className="new-poll__title main-container align-center">
            Create New Poll
          </h1>
          <PollForm />
        </>
      ) : (
        <ErrorMessage />
      )}
    </>
  )
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(NewPoll)
