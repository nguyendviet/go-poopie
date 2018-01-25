import React, {Component} from 'react';
import Alert from '../../components/Alert';
import GMap from '../../components/GMap';
import Form from '../../components/Form';
import API from '../../utils/API';

class Map extends Component {
    constructor(props) {
        super(props);

        this.getBathrooms = this.getBathrooms.bind(this);
        this.state = {
            name: '',
            lat: 0,
            lng: 0
        };
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(`send bathroom info to database`);
        console.log(this.state);
        console.log(typeof(this.state.lat)); // a string

        const bathroom = {
            id: this.state.lat,
            name: this.state.name,
            location: {
                coordinates: {
                    lat: parseFloat(this.state.lat), 
                    lng: parseFloat(this.state.lng)
                }
            }
        };

        console.log(`bathroom info sent to server`);
        console.log(bathroom);

        API
        .saveBathroom(bathroom)
        .then(res => console.log(res));
    };

    getBathrooms() {
        API
        .getBathrooms()
        .then(res => {
                console.log(`result from get bathrooms request:`);
                console.log(res);
            }
        )
        .catch(err => console.log(err));
    };

    componentDidMount() {
        this.getBathrooms()
    }

    render() {
        return (
            <div>
                <Alert>
                    <p>Notification for Map Page: Locations of all nearby bathrooms:</p>
                </Alert>
                <p>This is where we show the map.</p>
                <Form
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    name={this.state.name}
                    lat={this.state.lat}
                    lng={this.state.lng}
                />
                <GMap/>
            </div>
        )
    }
}

export default Map;