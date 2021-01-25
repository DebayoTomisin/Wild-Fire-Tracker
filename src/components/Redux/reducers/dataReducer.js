import { FETCHEVENT } from "../actions/type"

const initialState = {
  event : {}
}

function dataReducer(state=initialState, action) {
  switch(action.type){  
    case FETCHEVENT:
      return {
        ...state,
        event : action.payload
      }
    default:
      return state
  }
}

export default dataReducer
