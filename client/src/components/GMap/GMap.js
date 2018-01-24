import React, { Component } from 'react';
import MyMapComponent from './MyMap';
import API from "../../utils/API";

class GMap extends Component {
    state = {
        isMarkerShown: true,
        pos: {
            lat: 0,
            lng: 0
        }
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                console.log(pos);
                this.setState({pos});
            });
        }
    }

    handleMarkerClick = () => {
        console.log(`marker clicked!`);
    }

    render() {
        if ((this.state.pos.lat !== 0) && (this.state.pos.lng !== 0)) {
            return (
                <MyMapComponent
                    pos={this.state.pos}
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