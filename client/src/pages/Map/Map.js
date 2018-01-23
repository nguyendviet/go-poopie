import React, {Component} from 'react';
import Alert from '../../components/Alert';
import GMap from '../../components/GMap';
import API from '../../utils/API';

class Map extends Component {
    constructor(props) {
        super(props);

        this.getBathrooms = this.getBathrooms.bind(this);
        this.state = {
        
        };
    }

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
                <GMap/>
            </div>
        )
    }
}

export default Map;