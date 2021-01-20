import { CREATE_POLL } from '../actions/polls'
import { generateId } from '../utils/helpers'

// const initialState = {
//   arr:[]
// }

export default function polls (state = [], action) {
  switch(action.type) {
    case CREATE_POLL :
      return [
        ...state.concat(action.payload)
      ]
    default :
      return state
  }
}