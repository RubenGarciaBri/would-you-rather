import { ADD_POLL, RECEIVE_POLLS, ANSWER_POLL } from '../actions/polls';

export default function polls(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.payload.polls,
      };
    case ADD_POLL:
      return {
        ...state,
        [action.payload.poll.id]: action.payload.poll,
      };
    case ANSWER_POLL:
      if (action.payload.option === state[action.payload.id].firstQuestion) {
        return {
          ...state,
          [action.payload.id]: {
            ...state[action.payload.id],
            answeredBy: state[action.payload.id].answeredBy.concat(
              action.payload.user.id
            ),
            firstQuestionReplies:
              state[action.payload.id].firstQuestionReplies + 1,
            totalReplies: state[action.payload.id].totalReplies + 1,
          },
        };
      } else {
        return {
          ...state,
          [action.payload.id]: {
            ...state[action.payload.id],
            answeredBy: state[action.payload.id].answeredBy.concat(
              action.payload.user.id
            ),
            secondQuestionReplies:
              state[action.payload.id].secondQuestionReplies + 1,
            totalReplies: state[action.payload.id].totalReplies + 1,
          },
        };
      }

    default:
      return state;
  }
}
