import { polls } from '../data/polls.js'

export const getPolls = async(req, res) => {
  res.json(polls)
}

