import React from 'react'
import Nav from '../components/Nav'
import PollForm from '../components/PollForm'

const NewPoll = () => {
  return (
    <div>
      <Nav/>
      <p className='new-poll__title main-container align-center'>Create New Poll</p>
      <PollForm/>
    </div>
  )
}

export default NewPoll
