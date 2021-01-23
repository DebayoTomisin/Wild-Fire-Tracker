import { FETCHEVENT } from "./type"

const url = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"

const FetchEvents = async dispatch => {
  const response = await fetch(url)
  const data = response.json()
  dispatch({
    action: FETCHEVENT,
    payload: data
  })
}

export default FetchEvents
