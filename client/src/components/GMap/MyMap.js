import React from 'react'
import {compose, withProps} from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps'
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
        {/* show user location marker */}
        {props.isMarkerShown && <Marker 
            position={props.pos} 
            onClick={props.handleMarkerClick}/>
        }

        {/* show bathroom markers */}
        {props.bathrooms.map(bathroom => 
            <Marker 
                id={bathroom._id}
                key={bathroom._id} 
                position={bathroom.location.coordinates} 
                onClick={props.handleMarkerClick.bind(this, bathroom._id)}
                icon={bathroom_icon}
            >
            {props.thisId === bathroom._id && <InfoWindow>
                    <div>
                        <p>Id: {bathroom._id}</p>
                        <p>Direction: {bathroom.name}</p>
                    </div>
                </InfoWindow>
            }
            </Marker>
        )}
    </GoogleMap>
)

export default MyMap;