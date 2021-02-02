
import { savePoll } from '../utils/api'
import { addNewPollToUser, addAnsweredPollToUser } from '../actions/users'
import axios from 'axios'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_POLL = 'ADD_POLL'
export const ANSWER_POLL = 'ANSWER_POLL'
export const SAVE_POLLS = 'SAVE_POLLS'
export const SAVE_USERS = 'SAVE_USERS'

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


function answerPoll(id, user, option) {
  return {
    type: ANSWER_POLL,
    payload: {
      id,
      user,
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
      dispatch(savePolls())
      dispatch(saveUsers())
    })
  }
}

export function handleAnswerPoll(id, option) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(answerPoll(id, authedUser, option))
    dispatch(addAnsweredPollToUser(authedUser, id))
    dispatch(savePolls())
    dispatch(saveUsers())
  }
}

const savePolls = () => async (dispatch, getState) => {
  const polls = getState().polls

   return await axios.post('http://localhost:5000/api/polls', polls)
    .then((res) => {
      dispatch({
        type: SAVE_POLLS,
        payload: {
          polls: res.data
        }
      })
    })
}

const saveUsers = () => async (dispatch, getState) => {
  const users = getState().users

   return await axios.post('http://localhost:5000/api/users', users)
    .then((res) => {
      dispatch({
        type: SAVE_USERS,
        payload: {
          users: res.data
        }
      })
    })
}
