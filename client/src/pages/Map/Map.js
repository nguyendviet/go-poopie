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

        const bathroom = {
            name: this.state.name,
            location: {
                coordinates: {
                    lat: parseFloat(this.state.lat), 
                    lng: parseFloat(this.state.lng)
                }
            }
        };

        API
        .saveBathroom(bathroom)
        .then(res => console.log(res.data));
    };

    getBathrooms() {
        API
        .getBathrooms()
        .then(res => {
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