import { getInitialData } from '../utils/api'
import { receivePolls } from './polls'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'Carol'
const AUTHED_AVATAR = 'https://randomuser.me/api/portraits/women/2.jpg'

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
    .then(({ users, polls }) => {
    dispatch(receiveUsers(users))
    dispatch(receivePolls(polls))
  })
  }
}