import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/Nav'
import PollAnswer from '../components/PollAnswer' 

const PollPage = ({ id, polls }) => {
  return (
    <>
      <Nav />
      <div className='answer-poll-panel main-container'>
      {polls.filter(p => p.poll.id === id).map((filteredPoll) => {
          return <PollAnswer key={filteredPoll.id} data={filteredPoll}/>
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
    polls
  }
}

export default connect(mapStateToProps)(PollPage)
