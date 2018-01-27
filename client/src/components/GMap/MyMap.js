import React from 'react'
import {compose, withProps} from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import bathroom_icon from '../../images/toilet.png'

// set up google map
const MyMap = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAQRPht-fE8RI3ZmfR6ckJ9rwW8WRPok8I&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={15}
        defaultCenter={props.pos}
    >
        {props.isMarkerShown && <Marker position={props.pos} onClick={props.onMarkerClick} />}
        {props.bathrooms.map(bathroom => 
            <Marker 
                key={bathroom._id} 
                position={bathroom.location.coordinates} 
                onClick={props.onMarkerClick}
                icon={bathroom_icon}
            />
        )}
    </GoogleMap>
)

export default MyMap;