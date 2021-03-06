import React, {  useState, useEffect } from "react"
import GoogleMapReact from "google-map-react"

import Marker from './Marker'
import Info from "./Info"


import {fetchEvents, fetchEvent} from "./actions/eventAction"
import { connect } from "react-redux"


function Nasa(props) {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    props.fetchEvent()
  },[])

  if(loading && props.events === {}){
    return(
      <h1 className="loader">Loading...</h1>
    )
  }
  const events = [props.events]
  events.map(ev => {
    const marker = ev.events
    console.log(Array.isArray(marker))
  })
  
  return(
    <h1>This is the main app component</h1>
  )
}

const mapStateToProps = state => ({
  events: state.data.events,
})

export default connect(mapStateToProps, { fetchEvent })(Nasa)
