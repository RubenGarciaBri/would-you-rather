import React from 'react'
import { Button } from 'semantic-ui-react'
import Poll from './Poll'

const HomePanel = () => {
  return (
    <div className='home-panel main-container'>
      <Button.Group className='home-panel__btn-group'>
        <Button className='home-panel__btn-group__btn'>Unanswered</Button>
        <Button className='home-panel__btn-group__btn' positive>Answered</Button>
      </Button.Group>
      <div className='home-panel__list'>
        <Poll />
        <Poll />
        <Poll />
        <Poll />
        <Poll />
        <Poll />
        <Poll />
      </div>
    </div>
  )
}



export default HomePanel
