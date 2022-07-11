import React from 'react';
// import {Map,InfoWindow, Marker, GoogleAPIWrapper} from '@react-google-maps/api';
import MapContainer from './MapContainer';


function App(props) {
  return (
    <div className="App">
    <MapContainer/>
    </div>
  );
}

export default App;

// export default GoogleAPIWrapper({
//   apiKey:("AIzaSyCyNPAlz2Rt5aO_IMFgTu4f8HXK56KT40c")
// })(App);
