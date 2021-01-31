import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Poll = ({ authedUser, poll }) => {

  const { author, firstQuestion, secondQuestion, id, isAnswered} = poll
 
  return (
    <div className='poll'>
      <div className='poll__head'>
        <div className='poll__head-left'>
          <img src={author.avatar} className='poll__head-left__img shadow-xs'/>
        </div>
        <div className='poll__head-right'>
          <span className='poll__head-right__name'>{author.id}</span>
        </div>
      </div>
      <div className='poll__body'>
        <p className='poll__body-title'>Would you rather...</p>
        <p className='poll__body-questions'>{firstQuestion}<br/>or... <br/>{secondQuestion}
        </p>
        <Link to={`questions/${id}`} className='poll__body-btn'>{isAnswered === false ? 'Answer Poll' : 'See Results'}</Link>
      </div>
    </div>
  )
}

function mapStateToProps({ authedUser, polls }, { id }) {
  const poll = polls[id]

  return {
    authedUser,
    poll: poll,
  }
}

export default connect(mapStateToProps)(Poll)
