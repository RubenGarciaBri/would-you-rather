import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authedUser from './authedUser'
import polls from './polls'
import users from './users'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authedUser', 'users', 'polls']
}

const rootReducer = combineReducers({
  authedUser,
  users,
  polls
})

export default persistReducer(persistConfig, rootReducer)