import { FETCHEVENT } from "./type"

const url = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"

export const fetchEvent = () => dispatch => { //promises method
  fetch(url)
  .then(res => res.json())
  .then(data => 
      dispatch({
          type: FETCHEVENT,
          payload: data
      }))
}

const FetchEvents = async dispatch => {
  const response = await fetch(url)
  console.log(response)
  const data = await response.json()
  console.log(data)
  dispatch({
    action: FETCHEVENT,
    payload: data
  })
}

export default FetchEvents
