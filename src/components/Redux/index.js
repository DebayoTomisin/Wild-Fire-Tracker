import React, {  useState, useEffect } from "react"
import GoogleMapReact from "google-map-react"

import Marker from './Marker'
import Info from "./Info"


import fetchEvents from "./actions/eventAction"
import { connect } from "react-redux"

function Nasa(props){

  const [loading, setLoading ] = useState(true)

  useEffect(() => {
    setLoading(false)
    props.fetchEvents()
  })
  return(
    <h1>This is it people</h1>
  )
}

const mapStatetoProps = state => ({
  events : state.events.events
})

export default connect(mapStatetoProps, { fetchEvents})(Nasa)
