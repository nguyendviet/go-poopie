import React, {Component} from 'react';
import Alert from '../../components/Alert';
import Form from '../../components/Form';
import API from '../../utils/API';

class AddBathroom extends Component {
    constructor(props) {
        super(props);

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

    render() {
        return (
            <div>
                <Alert>
                    <p>Notification for Map Page: Locations of all nearby bathrooms:</p>
                </Alert>
                <p>This is where we show the form to add new bathroom location.</p>
                <Form
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    name={this.state.name}
                    lat={this.state.lat}
                    lng={this.state.lng}
                />
            </div>
        )
    }
}

export default AddBathroom;