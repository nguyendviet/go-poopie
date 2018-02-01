import React, {Component} from 'react';
import Alert from '../../components/Alert';
import Form from '../../components/Form';
import API from '../../utils/API';

class AddBathroom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alert: ['Add a bathroom'],
            name: '',
            coords: false,
            lat: 0,
            lng: 0
        };
    }

    componentDidMount() {
        // get geo coordinates from the browser
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            });
        }
    }

    toggleCoords = () => {
        this.setState({coords: !this.state.coords});
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

    render() {
        return (
            <div>
                <Alert>
                    {this.state.alert}
                </Alert>
                <button className = "btn btn-primary btn-brown btn-lg mt-3" onClick={this.toggleCoords.bind(this)}>Toggle Methods</button>
                <Form
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    coords={this.state.coords}
                />
                <h2>OR</h2>
                <button onClick={this.toggleCoords.bind(this)}>{this.state.coords ? `Use Current Location` : `Use Specific Coordinates`}</button>
            </div>
        )
    }
}

export default AddBathroom;