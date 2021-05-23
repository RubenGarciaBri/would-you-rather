export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_NEW_POLL_TO_USER = 'ADD_NEW_POLL_TO_USER'
export const ADD_ANSWERED_POLL_TO_USER = 'ADD_ANSWERED_POLL_TO_USER'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    payload: {
      users
    }  
  }
}

export function addNewPollToUser(user, pollId) {
  return {
    type: ADD_NEW_POLL_TO_USER,
    payload: {
      user,
      pollId
    }  
  }
}

export function addAnsweredPollToUser(user, pollId) {
  return {
    type: ADD_ANSWERED_POLL_TO_USER,
    payload: {
      user,
      pollId
    }  
  }
}