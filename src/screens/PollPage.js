import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/Nav'
import PollAnswer from '../components/PollAnswer' 

const PollPage = ({ id, polls, pollIds }) => {
  return (
    <>
      <Nav />
      <div className='answer-poll-panel main-container'>
      {pollIds.filter(pollId => pollId === id).map((p) => {
          return <PollAnswer key={p.id} id={p}/>
        })}
      </div>
    </>
  )
}

function mapStateToProps({ authedUser, polls }, props) {
  const { id } = props.match.params

  return {
    id,
    authedUser,
    polls,
    pollIds: Object.keys(polls)
  }
}

export default connect(mapStateToProps)(PollPage)
