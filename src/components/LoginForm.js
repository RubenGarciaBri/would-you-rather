import React from 'react'
import { Container } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'
import { Select } from 'semantic-ui-react'

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
  return (
    <div className='login-form'>
      <Container>
        <Segment as='div' className='login-form__segment align-center'>
          <h3>Welcome to "Would you Rather"!</h3>
          <p>Select a user to start using the app</p>
          <Select className='login-form__select' placeholder='Select user' options={users}/>
        </Segment>
      </Container>
    </div>    
  )
}

export default LoginForm
