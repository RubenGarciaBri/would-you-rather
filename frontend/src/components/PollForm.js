import React, { useState } from 'react'
import { Form, Checkbox, Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleAddPoll } from '../actions/polls'


const PollForm = ({ dispatch, authedUser }) => {
  const [firstQuestion, setFirstQuestion] = useState('')
  const [secondQuestion, setSecondQuestion] = useState('')

  let history = useHistory();

  const handleInputOne = (e) => {
    setFirstQuestion(e.target.value)
  }

  const handleInputTwo = (e) => {
    setSecondQuestion(e.target.value)
  }

  const handleSubmit = () => {
    dispatch(handleAddPoll(firstQuestion, secondQuestion))
    history.push('/home')
  }

  return (
    <div className='poll-form shadow-slim'>
      <Form className='poll-form__form' onSubmit={handleSubmit}>
        <span className='poll-form__form-span'>Would you rather...</span>
        <Form.Field>
          <input placeholder='First question...' onChange={handleInputOne}/>
        </Form.Field>
        <span className='poll-form__form-or'>Or...</span>
        <Form.Field>  
          <input placeholder='Second question...' onChange={handleInputTwo}/>
        </Form.Field>
        <Button type='submit' className='poll-form__form-btn' >Create New Poll</Button>
      </Form>
    </div>
  )
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(PollForm)
