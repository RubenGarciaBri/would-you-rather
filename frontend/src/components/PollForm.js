import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleAddPoll } from '../actions/polls'
import { toast } from 'react-toastify'

const PollForm = ({ dispatch }) => {
  const [firstQuestion, setFirstQuestion] = useState('')
  const [secondQuestion, setSecondQuestion] = useState('')
  const [firstQuestionError, setFirstQuestionError] = useState(false)
  const [secondQuestionError, setSecondQuestionError] = useState(false)

  let history = useHistory()

  const handleInputOne = (e) => {
    setFirstQuestion(e.target.value)
  }

  const handleInputTwo = (e) => {
    setSecondQuestion(e.target.value)
  }

  const handleSubmit = () => {
    if (firstQuestion.length === 0 || secondQuestion.length === 0) {
      toast.error('Question fields cannot be empty')
    } else {
      dispatch(handleAddPoll(firstQuestion, secondQuestion))
      history.push('/home')
    }
  }

  return (
    <div className="poll-form shadow-smooth">
      <Form className="poll-form__form" onSubmit={handleSubmit}>
        <span className="poll-form__form-title">Would you rather...</span>
        <Form.Field>
          <input
            className="poll-form__form-input"
            placeholder="First question..."
            onChange={handleInputOne}
            style={{
              borderColor: firstQuestionError === true ? '#e74c3c' : '',
            }}
          />
        </Form.Field>
        <span className="poll-form__form-or">Or...</span>
        <Form.Field>
          <input
            className="poll-form__form-input"
            placeholder="Second question..."
            onChange={handleInputTwo}
            style={{
              borderColor: secondQuestionError === true ? '#e74c3c' : '',
            }}
          />
        </Form.Field>
        <Button type="submit" className="poll-form__form-btn">
          Create New Poll
        </Button>
      </Form>
    </div>
  )
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(PollForm)
