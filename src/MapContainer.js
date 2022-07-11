import React,{useEffect,useState} from 'react';
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';

const MapContainer = () => {
  
    const [ currentPosition, setCurrentPosition ] = useState({});
  
    const success = position => {
      const currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      setCurrentPosition(currentPosition);
    };
    
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(success);
    })

    const onMarkerDragEnd = (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setCurrentPosition({ lat, lng})
      };

  const mapStyles = {        
    height: "100vh",
    width: "100%"
};
  
//   const defaultCenter = {
//     lat: 28.644800, lng: 77.216721
//   }
  
  

  return (
     <LoadScript
       googleMapsApiKey='AIzaSyCyNPAlz2Rt5aO_IMFgTu4f8HXK56KT40c'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={3}
        //   center={currentPosition}>
        //   {
        //     currentPosition.lat &&
        //     ( 
        //       <Marker position={currentPosition}/>
        //     ) 
        //   }
        
        center={currentPosition}>
          {
            currentPosition.lat ? 
            <Marker
            position={currentPosition}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            draggable={true} /> :
            null
          }
          
          </GoogleMap>
     </LoadScript>
  )
}

export default  MapContainer;
  
 