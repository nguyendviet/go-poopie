import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker,
} from "google-maps-react";

const evtNames = ['click', 'dragend'];

export class Map extends React.Component{

//Functions
//==============================================================================
  loadMap(){
    if(this.props && this.props.google){
      //google is available
      const{google}=this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      // let zoom = 14;
      // let lat = 38.881487;
      // let lng = -77.116197;
      let {initialCenter, zoom} = this.props;
      // const {lat, lng} = initialCenter;
      const {lat, lng} = this.state.currentLocation;
      const center = new maps.LatLng(lat,lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      //the maps.Map() constructor accepts a DOM node and a configuration object to create a map
      this.map = new maps.Map(node, mapConfig);

      evtNames.forEach(e => {
        this.map.addListener(e, this.handleEvent(e));
      });

      let centerChangedTimeout;

      this.map.addListener('dragend', (evt) =>{
        if (centerChangedTimeout){
          clearTimeout(centerChangedTimeout);
          centerChangedTimeout = null;
        }
        centerChangedTimeout = setTimeout(() => {
          this.props.onMove(this.map);
        }, 0);
      })
    }
  }

  //After a React component has updated this following methods will run.
  componentDidUpdate(prevProps, prevState){
    if(prevProps.google !== this.props.google){
      this.loadMap();
    }
    //if the current location differs from the initial center
    //then the recenterMap funciton will run.
    if (prevState.currentLocation !== this.state.currentLocation){
      this.recenterMap();
    }
  }

  recenterMap(){
    const map = this.map;
    const curr = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map){
      let center = new maps.LatLng(curr.lat, curr.lng)
      map.panTo(center)
    }
  }

  handleEvent(evtName) {
    let timeout;
    const handlerName = 'on${camelize(evtName)}';

    return (e) => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(() => {
        if (this.props[handlerName]) {
          this.props[handlerName](this.props, this.map, e);
        }
      }, 0);
    }
  }

  //When the Map is available when the component mounts whenever the map has
  //already been loaded previously. The folwing method will run.
  componentDidMount(){
    if(this.props.CenterAroundCurrentLocation){
      if(navigator && navigator.geolocation){
        navigator.geolocation.getCurrentPosition((pos) =>{
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          })
        })
      }
    }
    this.loadMap();
  }

  //Camelize helper Function
  const camelize = function(str) {
    return str.split(' ').map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
  }

  renderChildren(){
    const {children} = this.props;

    if (!children) return;

    return React.Children.map(children, c =>{
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    })
  }

//the following constructor allows the map to retain state
  constructor(props){
    super(props);

    const {lat, lng} = this.props.initialCenter;
    this.state = {
      lat: lat,
      lng: lng
    }
  }

//Props
//==============================================================================
  Map.propTypes = {
    google: React.PropTypes.object,
    zoom: React.PropTypes.number,
    initialCenter: React.PropTypes.object,
    CenterAroundCurrentLocation: React.PropTypes.bool,
    onMove: React.PropTypes.func
  }

  Map.defaultProps = {
    zoom: 14,
    //GW Arlington Campus location as default
    initialCenter: {
      lat: 38.881487,
      lng: -77.116197
    },
    CenterAroundCurrentLocation: false,
    onMove: function() {}
  }
//==============================================================================

  render(){
    return(
      <div ref='map'>
        Loading map...
        {this.renderChildren()}
      </div>
    )
  }
}



// import React, {Component} from 'react';
//
// class Map extends Component {
//     state = {
//     };
//
//     render() {
//         return (
//             <p>This is where we show the map.</p>
//         )
//     }
// }
//
// export default Map;
