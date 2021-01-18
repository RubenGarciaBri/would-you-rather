import React, { useState } from 'react'
import { Select, Button, Message } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

const users = [
  {
    text: 'Mike',
    value: 'mike',
    image: {
      avatar: true,
      src: 'https://randomuser.me/api/portraits/men/49.jpg'
    }
  },
  {
    text: 'Carol',
    value: 'carol',
    image: {
      avatar: true,
      src: 'https://randomuser.me/api/portraits/women/2.jpg'
    }
  },
  {
    text: 'Jennifer',
    value: 'jennifer',
    image: {
      avatar: true,
      src: 'https://randomuser.me/api/portraits/women/3.jpg'
    }
  },
  {
    text: 'Victor',
    value: 'victor',
    image: {
      avatar: true,
      src: 'https://randomuser.me/api/portraits/men/16.jpg'
    }
  },
]



const LoginForm = (props) => {
  const [user, setUser] = useState('')
  const [submitFailed, setSubmitFailed] = useState(false)

  const { dispatch } = props

  console.log(user)
  console.log(submitFailed)

  let history = useHistory();

  const handleChange = (e) => { 
    const target = e.target

    // Get text field from Select element
    const userName = target.children[1].outerText
  
    setUser(userName)
  }

  const handleClick = (e) => {

    // Validate a user has been selected
    if (user !== '') {

      // If submit failed previously, change to false
      if (submitFailed === true) {
        setSubmitFailed(false)
      }

      dispatch(setAuthedUser(user))

      history.push('/home')

    } else {
      setSubmitFailed(true)
    }
  }

  return (
    <div className='login-form align-center shadow-slim'>
      <div className="login-form__container">
        <h3>Welcome to "Would you Rather"!</h3>
        <p>Select a user to start using the app</p>
        <Select className='login-form__select' placeholder='Select user' options={users} onChange={handleChange}/>
        {submitFailed === true ?
          <Message
          error
          content='Please select a user before proceeding'
        /> :
        null
        }
        <Button className='login-form__btn' onClick={handleClick}>Sign Up</Button>
      </div>
    </div>    
  )
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(LoginForm)
