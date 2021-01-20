import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import Poll from './Poll'

const HomePanel = ({ polls }) => {  
  return (
    <div className='home-panel main-container'>
      <Button.Group className='home-panel__btn-group'>
        <Button className='home-panel__btn-group__btn'>Unanswered</Button>
        <Button className='home-panel__btn-group__btn' positive>Answered</Button>
      </Button.Group>
      <div className='home-panel__list'>
        {polls ? polls.map((poll) => {
            return <Poll key={poll.id} data={poll}/>
          }) : null}
      </div>
    </div>
  )
}

function mapStateToProps ({ authedUser, polls }) {
  return {
    authedUser,
    polls
  }
}

export default connect(mapStateToProps)(HomePanel)
