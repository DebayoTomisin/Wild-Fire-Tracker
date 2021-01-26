import { FETCHEVENT } from "../actions/type"

const initialState = {
  events : []
}

function dataReducer(state=initialState, action) {
  switch(action.type){  
    case FETCHEVENT:
      return {
        ...state,
        events : action.payload
      }
    default:
      return state
  }
}

export default dataReducer
