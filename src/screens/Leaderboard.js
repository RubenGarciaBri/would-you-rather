import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/Nav'
import LeadCard from '../components/LeadCard'

const Leaderboard = ({ authedUser, userIds}) => {

  console.log(userIds)

  return (
    <>
      <Nav/>
      <div className='leader-board'>
      <h3 className='leader-board__title'>Leaderboard</h3>
      <div className='leader-board__list'>
        {userIds.map((id) => {
          return <LeadCard id={id}/>
        })}
      </div>
    </div>
    </>
  )
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users,
    userIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Leaderboard)
