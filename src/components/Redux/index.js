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
    const marker =  props.events.map(event => {
      if(event.categories[0].id === 8){
        return(
          <Marker lat= {event.geometries[0].coordinates[1]} lng={event.geometries[1].coordinates[0]}  onClick={() => props.events.}/>
        )
      }
    })
    console.log(props.events)
  }, [])

  
  
  return(
    <h1>This is it people</h1>
  )
}

const mapStatetoProps = state => ({
  events: state.data.event
})

export default connect(mapStatetoProps, { fetchEvents})(Nasa)
