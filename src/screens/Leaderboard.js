import React from 'react'
import Nav from '../components/Nav'
import LeadCard from '../components/LeadCard'

const Leaderboard = () => {
  return (
    <>
      <Nav/>
      <div className='leader-board'>
      <h3 className='leader-board__title'>Leaderboard</h3>
      <div className='leader-board__list'>
        <LeadCard/>
      </div>
    </div>
    </>
  )
}

export default Leaderboard
