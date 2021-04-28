import { generateId } from '../utils/helpers'
import axios from 'axios'

export let users = {
  'Mike': {
    id: 'Mike',
    avatar: 'https://randomuser.me/api/portraits/men/49.jpg',
    createdPolls: ['98c1e68-3320-4157-18w7-84c2d1e7zxf1v'],
    answeredPolls: [],
    points: 1
  },
  'Carol': {
    id: 'Carol',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    createdPolls: [],
    answeredPolls: [],
    points: 0
  },
  'Jennifer': {
    id: 'Jennifer',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    createdPolls: [],
    answeredPolls: ['17w1v628-192q-1537-12x4-11a131j3tb6p'],
    points: 1
  },
  'Victor': {
    id: 'Victor',
    avatar: 'https://randomuser.me/api/portraits/men/16.jpg',
    createdPolls: [],
    answeredPolls: [],
    points: 0
  }
}


function formatPoll ({ firstQuestion, secondQuestion, author }) {
  return {
    author,
    id: generateId(),
    firstQuestion,
    secondQuestion,
    answeredBy: [],
    firstQuestionReplies: 0,
    secondQuestionReplies: 0,
    totalReplies: 0
  }
}

export async function _savePoll ({ firstQuestion, secondQuestion, author }) {
  return new Promise((res, rej) => {
    const formattedPoll = formatPoll({
      author,
      firstQuestion,
      secondQuestion
    })
    res(formattedPoll)
  })
}

export const _getUsers = async () => {
  try {
    const res = await axios.get('/api/users')
    return res.data
  }
  catch(err) {
    console.log(err)
  }
}

export const _getPolls = async () => {
  try {
    const res = await axios.get('/api/polls')
    return res.data
  }
  catch(err) {
    console.log(err)
  }
}