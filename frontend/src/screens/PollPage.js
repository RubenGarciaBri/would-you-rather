import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/Nav'
import PollAnswer from '../components/PollAnswer' 
import ErrorMessage from '../components/ErrorMessage'

const PollPage = ({ id, polls, pollIds, authedUser }) => {
  return (
    <>
      {authedUser !== null ?
      <>
        <Nav />
        <div className='answer-poll-panel main-container'>
        {pollIds.filter(pollId => pollId === id).map((p) => {
            return <PollAnswer key={p.id} id={p}/>
          })}
        </div>
      </>  
      : 
        <ErrorMessage/>
      }  
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
