import React, {  useState, useEffect } from "react"
import GoogleMapReact from "google-map-react"

import Marker from './Marker'
import Info from "./Info"


import fetchEvents from "./actions/eventAction"
import { connect } from "react-redux"

function Nasa(props){

  const [loading, setLoading ] = useState(true)
  const [locationInfo, setLocationInfo] = useState(null)

  useEffect(() => {
    setLoading(false)
    props.fetchEvents()
  }, [])

  const marker = props.events.map(ev => {
    if(ev.categories[0].id === 8){
        return <Marker 
            lat={ev.geometries[0].coordinates[1]} 
            lng={ev.geometries[0].coordinates[0]}
            onClick= {() => setLocationInfo({id:ev.id, title:ev.title})}
        />
    }
    return null
  })

  return(
    <h1>{marker}</h1>
  )
}

const mapStatetoProps = state => ({
  events: state.data.event
})

export default connect(mapStatetoProps, { fetchEvents})(Nasa)
