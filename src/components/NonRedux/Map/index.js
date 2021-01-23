import { useState } from "react"
import GoogleMapReact from "google-map-react"
import LocationMarker from '../LocationMarker'
import LocationInfoBox from '../LocationInfo'

const Map =({ eventData, center, zoom}) => {

    const [locationInfo, setLocationInfo] = useState(null)
    const marker = eventData.map(ev => {
        if(ev.categories[0].id === 8){
            return <LocationMarker 
                lat={ev.geometries[0].coordinates[1]} 
                lng={ev.geometries[0].coordinates[0]}
                onClick= {() => setLocationInfo({id:ev.id, title:ev.title})}
            />
        }
        return null
    })

    return(
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key:
                    'AIzaSyAa4zDZokri4vYyL3OsdIHNG-4F7g5QKis'}}
                defaultCenter= { center }
                defaultZoom= { zoom }
            >
                {marker}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.7756
    },
    zoom : 6,
}

export default Map