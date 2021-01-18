import React from 'react'
import { Button } from 'semantic-ui-react'

const Poll = () => {
  return (
    <div className='poll'>
      <div className='poll__head'>
        <div className='poll__head-left'>
          <img src='https://randomuser.me/api/portraits/men/49.jpg' className='poll__head-left__img shadow-xs'/>
        </div>
        <div className='poll__head-right'>
          <span className='poll__head-right__name'>Full Name</span>
        </div>
      </div>
      <div className='poll__body'>
        <p className='poll__body-title'>Would you rather...</p>
        <p className='poll__body-questions'>Question 1 <br/>or... <br/>Question 2?
        </p>
        <Button className='poll__body-btn'>Answer Poll</Button>
      </div>
    </div>
  )
}

export default Poll
