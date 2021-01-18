import React from 'react'
import { Form, Checkbox, Button } from 'semantic-ui-react'

const PollForm = () => {
  return (
    <div className='poll-form shadow-slim'>
      <Form className='poll-form__form'>
        <span className='poll-form__form-span'>Would you rather...</span>
        <Form.Field>
          <input placeholder='First question...' />
        </Form.Field>
        <span className='poll-form__form-or'>Or...</span>
        <Form.Field>
      
          <input placeholder='Second question...' />
        </Form.Field>
        <Button type='submit' className='poll-form__form-btn'>Create New Poll</Button>
      </Form>
    </div>
  )
}

export default PollForm
