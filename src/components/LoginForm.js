import React from 'react'
import { Container, Segment, Select, Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

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



const LoginForm = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push('/home')
  }

  return (
    <div className='login-form align-center shadow-slim'>
      <div className="login-form__container">
        <h3>Welcome to "Would you Rather"!</h3>
        <p>Select a user to start using the app</p>
        <Select className='login-form__select' placeholder='Select user' options={users}/>
        <Button className='login-form__btn' onClick={handleClick}>Sign Up</Button>
      </div>
    </div>    
  )
}



function mapStateToProps ({ authedUser }) {
  console.log(authedUser)
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(LoginForm)
