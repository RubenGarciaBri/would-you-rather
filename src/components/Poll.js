import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Poll = ({ authedUser, data }) => {

  return (
    <div className='poll'>
      <div className='poll__head'>
        <div className='poll__head-left'>
          <img src={authedUser.avatar} className='poll__head-left__img shadow-xs'/>
        </div>
        <div className='poll__head-right'>
          <span className='poll__head-right__name'>{authedUser.id}</span>
        </div>
      </div>
      <div className='poll__body'>
        <p className='poll__body-title'>Would you rather...</p>
        <p className='poll__body-questions'>{data.firstQuestion}<br/>or... <br/>{data.secondQuestion}
        </p>
        <Link to={`poll/${data.id}`} className='poll__body-btn'>Answer Poll</Link>
      </div>
    </div>
  )
}

function mapStateToProps({ authedUser, polls }) {
  return {
    authedUser,
    polls
  }
}

export default connect(mapStateToProps)(Poll)
