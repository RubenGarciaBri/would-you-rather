import { generateId } from '../utils/helpers'

export let users = {
  'Mike': {
    id: 'Mike',
    avatar: 'https://randomuser.me/api/portraits/men/49.jpg',
    polls: []
  },
  'Carol': {
    id: 'Carol',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    polls: []
  },
  'Jennifer': {
    id: 'Jennifer',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    polls: []
  },
  'Victor': {
    id: 'Victor',
    avatar: 'https://randomuser.me/api/portraits/men/16.jpg',
    polls: []
  }
}

let polls = {
  '55675685785678578': {
    id: '55675685785678578',
    author: {
      id: 'Mike',
      avatar: 'https://randomuser.me/api/portraits/men/49.jpg'    
    },
    firstQuestion: 'A powerful lion',
    secondQuestion: 'A cute dog',
    isAnswered: false,
    firstQuestionReplies: 0,
    secondQuestionReplies: 1,
    totalReplies: 1
  },
  '76757564985876956': {
    id: '76757564985876956',
    author: {
      id: 'Jennifer',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'    
    },
    firstQuestion: 'A big tiger',
    secondQuestion: 'A lazy cat',
    isAnswered: true,
    firstQuestionReplies: 1,
    secondQuestionReplies: 0,
    totalReplies: 1
  }
}

function formatPoll ({ firstQuestion, secondQuestion, author }) {
  return {
    author,
    id: generateId(),
    firstQuestion,
    secondQuestion,
    isAnswered: false,
    firstQuestionReplies: 0,
    secondQuestionReplies: 0,
    totalReplies: 0
  }
}

export function _savePoll ({ firstQuestion, secondQuestion, author }) {
  return new Promise((res, rej) => {
    const formattedPoll = formatPoll({
      author,
      firstQuestion,
      secondQuestion
    })

    setTimeout(() => {
      // polls = {
      //   ...polls,
      //   [formattedPoll.id]: formattedPoll,
      // }

      // users = {
      //   ...users,
      //   [author]: {
      //     ...users[author],
      //     polls: users[author].polls.concat([formattedPoll.id])
      //   }
      // }

      res(formattedPoll)
    }, 1000)
  })
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getPolls () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...polls}), 1000)
  })
}