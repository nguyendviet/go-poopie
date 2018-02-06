import React, {Component} from 'react';
import Alert from '../../components/Alert';
import Form from '../../components/Form';
import API from '../../utils/API';
import './AddBathroom.css'
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
                <div className = "container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-lg-8">
                            <Alert type={this.state.alertType} custom="font-xlg text-center mt-3 mb-4 bold yellowAlert text">
                                {this.state.alert}
                            </Alert>
                            <Form
                                handleInputChange={this.handleInputChange}
                                // handleFormSubmit={this.handleFormSubmit}
                                coords={this.state.coords}
                            />

                            <div class="center-block">
                                <button onClick={this.handleFormSubmit.bind(this)} className="btn btn-danger center-block">Submit</button>
                                <h5 class="bold text center-block">OR</h5>
                                <button  className = "btn btn-primary btn-brown center-block"  onClick={this.toggleCoords.bind(this)}>{this.state.coords ? `Use Current Location` : `Use Specific Coordinates`}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddBathroom;