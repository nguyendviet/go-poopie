// import Map from './Map.js';
// import {
//   default as React,
//   Component,
// } from "react";
//
// import {
//   withGoogleMap,
//   GoogleMap,
//   InfoWindow,
//   Marker,
// } from "react-google-maps";
//
// export class MapContainer extends React.Component{
//   render() {
//     if(!this.props.loaded){
//       return <div>Loading</div>
//     }
//     const style={
//       width: '100vw',
//       height: '100vh'
//     }
//     return(
//       <div style={style}>
//       <Map google={this.props.google}/>
//       </div>
//     )
//   }
// }
//
// export default GoogleApiComponent({
//   apiKey: AIzaSyBQhF4vDQLuYBNmeMqzhMHUXYCPM6QIpfU
// })(Container)

import {GoogleApiWrapper} from 'google-maps-react';

import Map from './Map.js';

import {
  default as React,
  Component,
} from "react";

export class MapContainer extends React.Component{

  onMapClick() {
    if (this.state.showingInfoWindow){
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  },

  onMarkerClick: function(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  },

  getInitialState: function() {
    return {
      showingInfoWindow: false,
      activerMarker: {},
      selectedPlace: {}
    }
  },

  render(){
    const style = {
      width: '100vw',
      height: '100vh'
    }

    const pos = {lat: 38.881487, lng: -77.116197}
    return(
      <div style={style}>
        <Map google={this.props.google}
              onClick={this.onMapClick}>
          <Marker
            onClick={this.onMarkerClick}
            name={'GW Arlington Campus'}/>
          <Marker position={pos} />

          <InfoWindow
            marker={this.state.activerMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
    apiKey: AIzaSyBQhF4vDQLuYBNmeMqzhMHUXYCPM6QIpfU
})(MapContainer)
