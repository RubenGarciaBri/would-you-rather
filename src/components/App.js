import React from 'react'
import { Route } from 'react-router-dom'
import Login from '../screens/Login'
import Home from '../screens/Home'
import NewPoll from '../screens/NewPoll'
import Leaderboard from '../screens/Leaderboard'

const App = () => {
  return (
    <div className="App">
      <Route path='/' exact component={Login}/>
      <Route path='/home' component={Home}/>
      <Route path='/new' component={NewPoll}/>
      <Route path='/leaderboard' component={Leaderboard}/>
    </div>
  )
}

export default App
