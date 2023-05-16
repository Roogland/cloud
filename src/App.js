
import React, { Fragment } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
const containerStyle = {
  width: '94%',
  height: '720px',
  margin: 'auto',
  position: 'relative'
};

const center = {
  lat: 6.524379,
  lng: 3.379206
};
const App = ()=>{
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCBo52FdbKLljKJJpRZe5AmOy5FbWgyL6I"  
  })

const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  
  return <div style={{position:'relative'}}>
    <div style={{position:'absolute',top:10,left:10,backgroundColor:'royalBlue',padding:15,zIndex:999}}>
      <h1>Google Map In react App.</h1>
    </div>
    {isLoaded ? <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={8}
    onLoad={onLoad}
    onUnmount={onUnmount}
  >
    { /* Child components, such as markers, info windows, etc. */ }
    <></>
  </GoogleMap>
  :<></>
    }

  </div>

  
}

export default App;