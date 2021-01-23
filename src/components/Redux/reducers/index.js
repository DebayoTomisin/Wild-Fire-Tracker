import { combineReducers } from "redux"
import nasaReducer from './dataReducer'

export default combineReducers({
  data: nasaReducer
})