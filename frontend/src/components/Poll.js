import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { toast } from 'react-toastify'

const Poll = ({ authedUser, poll }) => {
  let history = useHistory();

  const { author, firstQuestion, secondQuestion, id, answeredBy} = poll

  const handleClick = () => {

    history.push(`questions/${id}`)
    
  }
 
  return (
    <div className='poll shadow-smooth'>
      <div className='poll__head'>
        <img src={author.avatar} className='poll__head-img shadow-xs'/>     
        <span className='poll__head-name'>{author.id}</span>
      </div>
      <div className='poll__body'>
        <p className='poll__body-title'>Would you rather...</p>
        <p className='poll__body-questions'>{firstQuestion}<br/>or... <br/>{secondQuestion}
        </p>    
        {/* Show the correct button depending on whether the user has replied to this poll or not */}
        {authedUser.id === author.id 
        ?
          <Button onClick={handleClick} className='poll__body-btn--secondary'>
            See Results
          </Button>
        : 
          <Button onClick={handleClick} className={`${!answeredBy.includes(authedUser.id) ? 'poll__body-btn' : 'poll__body-btn--secondary'}`}>{!answeredBy.includes(authedUser.id) ? 'Answer Poll' : 'See Results'}
          </Button>
        }
      </div>
    </div>
  )
}

function mapStateToProps({ authedUser, polls }, { id }) {
  const poll = polls[id]

  return {
    authedUser,
    poll: poll,
  }
}

export default connect(mapStateToProps)(Poll)
