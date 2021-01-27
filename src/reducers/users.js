import { RECEIVE_USERS, ADD_NEW_POLL_TO_USER, ADD_ANSWERED_POLL_TO_USER } from '../actions/users'

export default  function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.payload.users
      }
      case ADD_NEW_POLL_TO_USER :
      return {
        ...state,
        [action.payload.user.id]: {
          ...state[action.payload.user.id],
          createdPolls: state[action.payload.user.id].createdPolls.concat(action.payload.pollId)
        }
      }
      case ADD_ANSWERED_POLL_TO_USER :
      return {
        ...state,
        [action.payload.user.id]: {
          ...state[action.payload.user.id],
          answeredPolls: state[action.payload.user.id].answeredPolls.concat(action.payload.pollId)
        }
      }
    default :
      return state
  }
}