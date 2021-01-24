import { generateId } from '../utils/helpers'

let users = {
  id: 'Mike',
  avatar: 'https://randomuser.me/api/portraits/men/49.jpg',
  polls: []
}

let polls = {
  '55675685785678578': {
    id: '55675685785678578',
    author: {
      id: 'Mike',
      avatar: 'https://randomuser.me/api/portraits/men/49.jpg'    
    },
    firstQuestion: 'A powerful lion',
    secondQuestion: 'A cute dog'
  },
  '76757564985876956': {
    id: '76757564985876956',
    author: {
      id: 'Jennifer',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'    
    },
    firstQuestion: 'A big tiger',
    secondQuestion: 'A lazy cat'
  }
}

function formatPoll ({ firstQuestion, secondQuestion, author }) {
  return {
    author,
    id: generateId(),
    firstQuestion,
    secondQuestion,
    answered: false
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