import { FETCHEVENT } from "../actions/type"

const initialState = {
  data : {}
}

function dataReducer(state=initialState, action) {
  switch(action.type){
    case FETCHEVENT:
      return {
        ...state,
        data : action.payload
      }
      default:
        return state
  }
}

export default dataReducer
