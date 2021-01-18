import React from 'react'

const LeadCard = () => {
  return (
    <div className='lead-card shadow-slim'>
      <div className='lead-card__left'>
        <img src='https://randomuser.me/api/portraits/men/49.jpg' className='lead-card__left-img'/>
        <p className='lead-card__left-name'>Full Name</p>
      </div>
      <div className='lead-card__center'>
        <p className='lead-card__center-questions lead-card__center-questions--answered'>Polls answered: 5</p>
        <p className='lead-card__center-questions lead-card__center-questions--created'>Polls created: 2</p>
      </div>
      <div className='lead-card__right'>
        <p className='lead-card__right-score'>7 points</p>
      </div>
    </div>
  )
}

export default LeadCard
