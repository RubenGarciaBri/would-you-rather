import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/Nav'
import LeadCard from '../components/LeadCard'
import ErrorMessage from '../components/ErrorMessage'

const Leaderboard = ({ authedUser, sortedUserIds}) => {


  return (
    <>
      {authedUser !== null ?
      <>
        <Nav/>
        <div className='leader-board'>
        <h3 className='leader-board__title'>Leaderboard</h3>
        <div className='leader-board__list'>
          {sortedUserIds.map((id) => {
            return <LeadCard key={id} id={id}/>
          })}
        </div>
        </div>
      </>  
      : 
        <ErrorMessage/>
      }  
    </>
  )
}

function mapStateToProps ({ authedUser, users }) {
  const sortedUsers = Object.fromEntries(Object.entries(users).sort((a, b) => b[1].points - a[1].points))
  const sortedUserIds = Object.keys(sortedUsers)


  return {
    authedUser,
    users,
    sortedUserIds: sortedUserIds
  }
}

export default connect(mapStateToProps)(Leaderboard)
