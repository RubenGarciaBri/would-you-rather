import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import Poll from './Poll'

const HomePanel = ({ polls, pollIds }) => {  
  return (
    <div className='home-panel main-container'>
      <Button.Group className='home-panel__btn-group'>
        <Button className='home-panel__btn-group__btn'>Unanswered</Button>
        <Button className='home-panel__btn-group__btn' positive>Answered</Button>
      </Button.Group>
      <div className='home-panel__list'>
        {pollIds ? pollIds.map((pollId) => {
            return <Poll key={pollId} id={pollId}/>
          }) : null}
      </div>
    </div>
  )
}

function mapStateToProps ({ authedUser, polls }) {
  return {
    authedUser,
    polls,
    pollIds: Object.keys(polls)
  }
}

export default connect(mapStateToProps)(HomePanel)
