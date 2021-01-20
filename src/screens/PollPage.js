import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/Nav'
import AnswerPoll from '../components/AnswerPoll'
import Poll from '../components/Poll'

const PollPage = ({ polls }) => {
  return (
    <>
      <Nav />
      <AnswerPoll />
      {polls ? polls.map((poll) => {
            return <Poll data={poll}/>
          }) : null}
    </>
  )
}

function mapStateToProps({ authedUser, polls }) {
  return {
    authedUser,
    polls
  }
}

export default connect(mapStateToProps)(PollPage)
