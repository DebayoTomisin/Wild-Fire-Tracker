import { useState, useEffect } from "react"
import Map from './components/NonRedux/Map'
import Header from './components/NonRedux/Header'

function App() {

  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
      console.log(eventData)

    }

    fetchEvents();
    
  }, [])

  return (
    <div>
      <Header/>
      { !loading ? <Map eventData={eventData} /> : <h1 className="loader"> Loading...</h1> }
    </div>
  );
} 

export default App; 
