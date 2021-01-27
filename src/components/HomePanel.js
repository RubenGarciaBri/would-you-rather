import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import Poll from './Poll'

const HomePanel = ({  unansweredPollIds, answeredPollIds  }) => {  
  const [activeCategory, setActiveCategory] = useState('unanswered')

  const handleClick = (e) => {

    setActiveCategory(e.target.innerText.toLowerCase())
  }

  console.log(activeCategory)

  return (
    <div className='home-panel main-container'>
      <Button.Group className='home-panel__btn-group'>
        <Button onClick={handleClick}className={`home-panel__btn-group__btn ${activeCategory === 'unanswered' ? 'positive' : ''}`}>Unanswered</Button>
        <Button onClick={handleClick} className={`home-panel__btn-group__btn ${activeCategory === 'answered' ? 'positive' : ''}`}>Answered</Button>
      </Button.Group>
      <div className='home-panel__list'>
        {
          activeCategory === 'unanswered' ? unansweredPollIds.map((id) => {
            return <Poll key={id} id={id}/>
          }) :   
          answeredPollIds.map((id) => {
            return <Poll key={id} id={id}/>
          })      
        }
      </div>
    </div>
  )
}

function mapStateToProps ({ authedUser, polls }) {
  const answeredPolls = Object.fromEntries(Object.entries(polls).filter(([key, value]) => value.isAnswered === true))
  const unansweredPolls = Object.fromEntries(Object.entries(polls).filter(([key, value]) => value.isAnswered === false))

  return {
    authedUser,
    polls,
    pollIds: Object.keys(polls),
    answeredPollIds: Object.keys(answeredPolls),
    unansweredPollIds: Object.keys(unansweredPolls)
  }
}

export default connect(mapStateToProps)(HomePanel)
