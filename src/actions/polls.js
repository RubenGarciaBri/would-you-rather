export const CREATE_POLL = 'CREATE_POLL'

export function createPoll(firstQuestion, secondQuestion) {
  return {
    type: CREATE_POLL,
    payload: {
      firstQuestion,
      secondQuestion
    }
  }
}