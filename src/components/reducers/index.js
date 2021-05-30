import { combineReducers } from 'redux'
import { signupDetailsReducer } from './signupDetails'

//Combine Multiple Reducer
const rootReducer = combineReducers({
  signupDetails: signupDetailsReducer,
})

export default rootReducer
