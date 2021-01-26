import React, {  useState, useEffect } from "react"
import GoogleMapReact from "google-map-react"

import Marker from './Marker'
import Info from "./Info"


import {fetchEvents, fetchEvent} from "./actions/eventAction"
import { connect } from "react-redux"


function Nasa(props) {

  useEffect(() => {
    props.fetchEvent()
  }, [])
  
  console.log(props.fetchEvent())
  return(
    <h1>This is the main app component</h1>
  )
}

const mapStateToProps = state => ({
  events: state.data.events,
})

export default connect(mapStateToProps, { fetchEvent })(Nasa)
