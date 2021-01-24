
import { savePoll } from '../utils/api'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_POLL = 'ADD_POLL'

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    payload: {
      polls
    }
  }
}

function addPoll(poll) {
  return {
    type:  ADD_POLL,
    payload: {
      poll
    }
  }
}

// Working on this!
export function handleAddPoll(firstQuestion, secondQuestion) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return savePoll({
      author: authedUser,
      firstQuestion,
      secondQuestion
    })
    .then((poll) => dispatch(addPoll(poll)))
  }
}


