import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const PollAnswer = ({ data }) => {
  const [option, setOption] = useState('')

  console.log(option)

  const handleChange = e => {

    setOption(e.target.textContent)
  }

  return (
    <div className='poll-answer'>
      <div className='poll-answer__head'>
        <div className='poll-answer__head-left'>
          <img src={data.poll.author.avatar} className='poll-answer__head-left__img shadow-xs'/>
        </div>
        <div className='poll-answer__head-right'>
          <span className='poll-answer__head-right__name'>{data.poll.author.id}</span>
        </div>
      </div>
      <div className='poll-answer__body'>
      <p className='poll-answer__body-title'>Would you rather...</p>
        <Form className='poll-answer__body-form'>
          <Form.Group>
            <Form.Radio      
 
              className='poll-answer__body-form__option'
              label={data.poll.firstQuestion}
              value={data.poll.firstQuestion}
              checked={option === data.poll.firstQuestion}
              onChange={handleChange}
            />  
            <Form.Radio
       
              className='poll-answer__body-form__option'
              label={data.poll.secondQuestion}
              value={data.poll.secondQuestion}
              checked={option === data.poll.secondQuestion}
              onChange={handleChange}
            />         
          </Form.Group>
          <Form.Button className='poll-answer__body-btn'>Submit</Form.Button>
        </Form>
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

export default connect(mapStateToProps)(PollAnswer)
