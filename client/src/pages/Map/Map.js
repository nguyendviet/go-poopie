import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class Map extends React.Component {

//list of event listener names
const evtNames = ['click', 'dragend'];
//Functions=====================================================================
//Function that checks to see if the map component should update based on
//current location.
  componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
          this.loadMap();
        }
        if (prevState.currentLocation !== this.props.google){
          this.recenterMap();
        }
      }
//
  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let {initialCenter, zoom} = this.props;
          //const {lat, lng} = initialCenter;
      const {lat, lng} = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
          center: center,
          zoom: zoom
      })

      this.map = new maps.Map(node, mapConfig);

      evtNames.forEach(e => {
        this.map.addListener(e, this.handleEvent(e));
      });

      let centerChangedTimeout;
      this.map.addListener('dragend', (evt) => {
        if (centerChangedTimeout) {
          clearTimeout(centerChangedTimeout);
          centerChangedTimeout = null;
        }
        centerChangedTimeout = setTimeout(() => {
          this.props.onMove(this.map);
        }, 0);
      })
    }
  }

  recenterMap() {
    const map = this.map;
    const curr = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
        let center = new maps.LatLng(curr.lat, curr.lng)
        map.panTo(center)
    }
  }

  handleEvent(evtName) {
    let timeout;
    const handlerName = 'on${camelize(evtName)}';
    return(e) => {
      if(timeout){
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(() =>{
        if(this.props[handlerName]){
          this.props[handlerName](this.props, this.map, e);
        }
      }, 0);
    }
  }

  componentDidMount() {
    if(this.props.centerAroundCurrentLocation){
      if(navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
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

  const camelize = function(str) {
    return str.split(' ').map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
  }

//Props=========================================================================
  constructor(props){
    super(props);

    const {lat, lng} = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    }
  }

  Map.propTypes = {
        google: React.PropTypes.object,
        zoom: React.PropTypes.number,
        initialCenter: React.PropTypes.object,
        centerAroundCurrentLocation: React.PropTypes.bool,
        onMove: React.PropTypes.func,
    }

  Map.defaultProps = {
        zoom: 14,
        initialCenter: {
        lat: 38.881487,
        lng: -77.116197
        },
        centerAroundCurrentLocation: false,
        onMove: function() {}
    }

  render(){
    return(
      <div ref='map'>
        Loading map...
      </div>
    )
  }
}
