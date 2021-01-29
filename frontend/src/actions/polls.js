
import { savePoll } from '../utils/api'
import { addNewPollToUser, addAnsweredPollToUser } from '../actions/users'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_POLL = 'ADD_POLL'
export const ANSWER_POLL = 'ANSWER_POLL'

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


function answerPoll(id, option) {
  return {
    type: ANSWER_POLL,
    payload: {
      id,
      option
    }
  }
}


export function handleAddPoll(firstQuestion, secondQuestion) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return savePoll({
      author: authedUser,
      firstQuestion,
      secondQuestion
    })
    .then((poll) => {
      dispatch(addPoll(poll))
      dispatch(addNewPollToUser(poll.author, poll.id))
    })
  }
}

export function handleAnswerPoll(id, option) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(answerPoll(id, option))
    dispatch(addAnsweredPollToUser(authedUser, id))
  }
}


