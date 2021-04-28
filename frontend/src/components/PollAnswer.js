import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Progress } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { handleAnswerPoll } from '../actions/polls'


const PollAnswer = ({ poll, authedUser, dispatch }) => {
  const [option, setOption] = useState('')

  const { author, firstQuestion, secondQuestion, id, answeredBy, firstQuestionReplies, secondQuestionReplies, totalReplies} = poll


  if(authedUser.id === author.id) {
    console.log('Match!')
  }

  const handleChange = e => {
    setOption(e.target.textContent)
  }

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(handleAnswerPoll(id, option))
  }

  return (
    <div className='poll-answer shadow-smooth'>
      <div className='poll-answer__head'>     
        <img src={author.avatar} className='poll-answer__head-img shadow-xs'/>
        <span className='poll-answer__head-name'>{author.id}</span>
      </div>
      <div className='poll-answer__body'>
      <p className='poll-answer__body-title'>Would you rather...</p>
      {
      // Show the form if the poll hasn't been answered and the results if it has
      answeredBy.includes(authedUser.id) || authedUser.id === author.id
      ? 
        <div>
          <p className='poll-answer__body-result__question'>{firstQuestion}</p>
          <Progress
            progress='percent'
            percent={((firstQuestionReplies / totalReplies ) * 100).toFixed(0)}
            success={option === firstQuestion ? true : false}
            size='large'
          />
          <p className='poll-answer__body-result__score'>{firstQuestionReplies} out of {totalReplies} votes</p>
          <p className='poll-answer__body-result__question'>{secondQuestion}</p>
          <Progress
          progress='percent'
          percent={((secondQuestionReplies / totalReplies ) * 100).toFixed(0)}
          success={option === secondQuestion ? true : false}
          size='large'
          />
          <p className='poll-answer__body-result__score'>{secondQuestionReplies} out of {totalReplies} votes</p>
          
          <Link to='/home'><Button className='poll-answer__body-result__btn'>Back</Button></Link>
        </div>
      :
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
        <Button className='poll-answer__body-btn'>Submit</Button>
        </Form>   
      }
      </div>
    </div>
  )
}

function mapStateToProps({ authedUser, polls }, { id }) {
  // Get the poll
  const poll = polls[id]

  return {
    authedUser,
    poll: poll
  }
}

export default connect(mapStateToProps)(PollAnswer)
