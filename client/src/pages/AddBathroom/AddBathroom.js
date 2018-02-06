import React, {Component} from 'react';
import Alert from '../../components/Alert';
import Form from '../../components/Form';
import API from '../../utils/API';
import '../../styles/globalStyles.css';

class AddBathroom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // alert: ['Add a bathroom'],
            name: '',
            alert: 'Please share your favourite bathrooms with other "goers" by adding to our database.',
            alertType: 'info',
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
        .then(res => {

            if (res.status === 200) {
                this.setState({
                    alert: `New bathroom has been successfully added!`,
                    alertType: 'success'
                })
            }
            else {
                this.setState({
                    alert: `Failed to add bathroom. Please try again.`,
                    alertType: 'warning'
                })
            }
        });
    };

    render() {
        return (
            <div>
                <Alert type={this.state.alertType} custom="font-xlg text-center mt-3 bold yellowAlert text">
                    {this.state.alert}
                </Alert>
                <Form
                    handleInputChange={this.handleInputChange}
                    // handleFormSubmit={this.handleFormSubmit}
                    coords={this.state.coords}
                />

                <button onClick={this.handleFormSubmit.bind(this)} className="btn btn-lg btn-danger">Submit</button>
                <h2>OR</h2>
                <button  className = "btn btn-primary btn-brown btn-lg mt-3"  onClick={this.toggleCoords.bind(this)}>{this.state.coords ? `Use Current Location` : `Use Specific Coordinates`}</button>
            </div>
        )
    }
}

export default AddBathroom;