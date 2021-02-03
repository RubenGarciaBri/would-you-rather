import React from 'react'
import { connect } from 'react-redux'

const LeadCard = ({user}) => {

  const { id, avatar, createdPolls, answeredPolls, points } = user

  return (
    <div className='lead-card shadow-slim'>
      <div className='lead-card__left'>
        <img src={avatar} className='lead-card__left-img'/>
        <p className='lead-card__left-name'>{id}</p>
      </div>
      <div className='lead-card__center'>
  <p className='lead-card__center-questions lead-card__center-questions--answered'>Polls answered: {answeredPolls.length}</p>
        <p className='lead-card__center-questions lead-card__center-questions--created'>Polls created: {createdPolls.length}</p>
      </div>
      <div className='lead-card__right'>
        <p className='lead-card__right-score'>{points} points</p>
      </div>
    </div>
  )
}

function mapStateToProps({ users }, {id}) {
  // Get the user
  const user = users[id] 
  
  return {
    user: user
  }
}

export default connect(mapStateToProps)(LeadCard)
