import React, {Component} from 'react';
import Alert from '../../components/Alert';
import GMap from '../../components/GMap';
import API from '../../utils/API';

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            lat: 0,
            lng: 0,
            bathrooms: []
        };
    }

    // get all bathrooms from database
    getBathrooms() {
        API
        .getBathrooms()
        .then(res => {
                this.setState({bathrooms: res.data});
            }
        )
        .catch(err => console.log(err));
    };

    componentDidMount() {
        // trigger get all bathrooms
        this.getBathrooms()
    }

    render() {
        return (
            <div className = "container-fluid">
                <div className="row justify-content-center">
                    <div className = "col-sm-12 col-lg-8">
                        <Alert type="success" custom="yellowAlert">
                            <p className = 'font-xlg text-center bold text'>Locations of all nearby bathrooms:</p>
                        </Alert>
                        <GMap bathrooms={this.state.bathrooms}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Map;