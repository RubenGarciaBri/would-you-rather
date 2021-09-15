import { getInitialData } from '../utils/api';
import { receivePolls } from './polls';
import { receiveUsers } from './users';

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, polls }) => {
      // Default user log in for development purposes
      // dispatch(setAuthedUser(AUTHED_ID, AUTHED_AVATAR))
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
    });
  };
}
