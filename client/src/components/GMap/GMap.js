import React, {Component} from 'react';
import MyMapComponent from './MyMap';
import API from "../../utils/API";

class GMap extends Component {
    state = {
        isMarkerShown: true,
        pos: {
            lat: 0,
            lng: 0
        },
        locations: [
            // isMarkerShown: true,
            {
                id: '1',
                pos: {
                    lat: 38.9853536,
                    lng: -77.1078233
                }
            },
            {
                id: '2',
                pos: {
                    lat: 38.8853536,
                    lng: -77.2079234
                }
            },
            {
                id: '3',
                pos: {
                    lat: 38.8863536,
                    lng: -77.307823
                }
            }
        ]
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                console.log(`location of user return from the browser:`);
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
                    locations={this.state.locations}
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