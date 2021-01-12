import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'

const Nav = () => {
  return (
    <div className='nav'>
      <Container>
        <Menu pointing secondary>
          <Menu.Item
            name='editorials'  
            as='a'
          >
            Editorials
          </Menu.Item>

          <Menu.Item
            name='reviews'
            as='a'        
          >
            Reviews
          </Menu.Item>

          <Menu.Item
            name='upcomingEvents'       
            as='a'  
          >
            Upcoming Events
          </Menu.Item>
          <Menu.Menu position='right'>
          <Menu.Item as='a'>
            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
            <span>Username</span>           
          </Menu.Item>
              <Menu.Item
                name='logout'
                as='a'
              />
          </Menu.Menu>
        </Menu>
      </Container>
    </div>
  )
}

export default Nav
