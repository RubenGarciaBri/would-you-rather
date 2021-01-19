import { combineReducers } from 'redux'
import authedUser from './authedUser'
import polls from './polls'

export default combineReducers({
  authedUser,
  polls
})