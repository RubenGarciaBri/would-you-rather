import { CREATE_POLL } from '../actions/polls'
import { generateId } from '../utils/helpers'

export default function polls (state = [], action) {
  switch(action.type) {
    case CREATE_POLL :
      return [{
        id: generateId(),
        firstQuestion: action.payload.firstQuestion,
        secondQuestion: action.payload.secondQuestion
      }]
    default :
      return state
  }
}