import React, {Component} from 'react'
import MyMapComponent from './MyMap'

class GMap extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isMarkerShown: true,
            pos: {
                lat: 0,
                lng: 0
            }
        }
    }

    componentDidMount() {
        // get geo coordinates from the browser
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                console.log(`location of user:`);
                console.log(pos);
                this.setState({pos});
            });
        }
    }

    // handle click on marker
    handleMarkerClick = () => {
        console.log(`marker clicked!`);
    }

    render() {
        if ((this.state.pos.lat !== 0) && (this.state.pos.lng !== 0)) {
            return (
                <MyMapComponent
                    pos={this.state.pos}
                    bathrooms={this.props.bathrooms}
                    isMarkerShown={this.state.isMarkerShown}
                    onMarkerClick={this.handleMarkerClick}
                />
            )
        }
        else {
            return null;
        }
    }
}

export default GMap;