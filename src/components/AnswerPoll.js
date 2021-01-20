import React from 'react'
import { connect } from 'react-redux'


const AnswerPoll = ({ authedUser, data }) => {
  return (
    <>
      
    </>
  )
}

function mapStateToProps({ authedUser, polls }) {
  return {
    authedUser,
    polls
  }
}

export default connect(mapStateToProps)(AnswerPoll)
