import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { handleAnswerPoll } from '../actions/polls'


const PollAnswer = ({ poll, dispatch }) => {
  const [option, setOption] = useState('')

  const { author, firstQuestion, secondQuestion, id, isAnswered, firstQuestionReplies, secondQuestionReplies, totalReplies} = poll

  const handleChange = e => {
    setOption(e.target.textContent)
  }

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(handleAnswerPoll(id, option))
  }

  return (
    <div className='poll-answer'>
      <div className='poll-answer__head'>
        <div className='poll-answer__head-left'>
          <img src={author.avatar} className='poll-answer__head-left__img shadow-xs'/>
        </div>
        <div className='poll-answer__head-right'>
          <span className='poll-answer__head-right__name'>{author.id}</span>
        </div>
      </div>
      <div className='poll-answer__body'>
      <p className='poll-answer__body-title'>Would you rather...</p>
      {isAnswered === false ? 
        <Form onSubmit={handleSubmit}className='poll-answer__body-form'>
        <Form.Group>
          <Form.Radio      
            className='poll-answer__body-form__option'
            label={firstQuestion}
            value={firstQuestion}
            checked={option === firstQuestion}
            onChange={handleChange}
          />  
          <Form.Radio
            className='poll-answer__body-form__option'
            label={secondQuestion}
            value={secondQuestion}
            checked={option === secondQuestion}
            onChange={handleChange}
          />         
        </Form.Group>
        <Form.Button className='poll-answer__body-btn'>Submit</Form.Button>
        </Form>
        :
        <div>
          <p>{firstQuestion}<br></br>{firstQuestionReplies} replies</p>
          <p>{secondQuestion}<br></br>{secondQuestionReplies} replies</p>
          <p>Total: {totalReplies}</p>
          <Link to='/home'>Back</Link>
        </div> 
      }
      </div>
    </div>
  )
}

function mapStateToProps({ authedUser, polls }, { id }) {
  const poll = polls[id]

  return {
    authedUser,
    polls,
    poll: poll
  }
}

export default connect(mapStateToProps)(PollAnswer)
