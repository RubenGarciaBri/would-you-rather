// import { polls } from '../data/polls.js'

let polls = {
  '98c1e68-3320-4157-18w7-84c2d1e7zxf1v': {
    id: '98c1e68-3320-4157-18w7-84c2d1e7zxf1v',
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
  '17w1v628-192q-1537-12x4-11a131j3tb6p': {
    id: '17w1v628-192q-1537-12x4-11a131j3tb6p',
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


export const getPolls = async(req, res) => {
  res.json(polls)
}

export const addPolls = async(req, res) => {
  polls = req.body
  res.json(polls)
}