import { generateId } from '../utils/helpers'
import axios from 'axios'

function formatPoll({ firstQuestion, secondQuestion, author }) {
  return {
    author,
    id: generateId(),
    firstQuestion,
    secondQuestion,
    answeredBy: [],
    firstQuestionReplies: 0,
    secondQuestionReplies: 0,
    totalReplies: 0,
  }
}

export async function _savePoll({ firstQuestion, secondQuestion, author }) {
  return new Promise((res, rej) => {
    const formattedPoll = formatPoll({
      author,
      firstQuestion,
      secondQuestion,
    })
    res(formattedPoll)
  })
}

export const _getUsers = async () => {
  try {
    const res = await axios.get('/api/users')
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const _getPolls = async () => {
  try {
    const res = await axios.get('/api/polls')
    return res.data
  } catch (err) {
    console.log(err)
  }
}
