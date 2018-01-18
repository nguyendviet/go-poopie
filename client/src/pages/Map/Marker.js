
const evtNames = ['click', 'mouseover'];

export class Marker extends React.Component{
  //
  // let marker = new google.maps.Marker({
  //   position: somePosition,
  //   map: map
  // });

  componentWillUnmount() {
    if(this.marker) {
      this.marker.setMap(null);
    }
  }

  componentDidUpdate(prevProps){
    if((this.props.map !== prevProps.map) ||
      (this.props.position !== prevProps.position)) {
        this.renderMarker();
      }
  }

  renderMarker(){
    let {
      map, google, position, mapCenter
    } = this.props;

    let pos = position || mapCenter;
    position = new google.maps.LatLng(pos.lat, pos.lng);

    const pref = {
      map: map,
      position: position
    };
    this.marker = new google.maps.Marker(pref);

    evtNames.forEach(e => {
      this.marker.addListener(e,this.handleEvent(e));
    })
  }

  handleEvent(evtName){
    return(e) => {
      const evtName = 'on${camelize(evt)}'
      if (this.props[evtName]) {
        this.props[evtName](this.props, this.marker, e);
      }
    }
  }

  render(){
    return null;
  }
}

Marker.propTypes = {
  position: React.PropTypes.object,
  map: React.PropTypes.object
}
