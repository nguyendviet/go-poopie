import React, {Component} from 'react';
import Alert from '../../components/Alert';
import GMap from '../../components/GMap';
import API from '../../utils/API';

class Map extends Component {
    state = {
    };

    getBathrooms = () => {
        API
        .getBathrooms()
        .then(res => {
                console.log(`result from get bathrooms request:`);
                console.log(res);
            }
        )
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Alert>
                    <p>Notification for Map Page: Locations of all nearby bathrooms:</p>
                </Alert>
                <p>This is where we show the map.</p>
                <button onClick={() => this.getBathrooms()}>Get Bathrooms</button>
                <GMap/>
            </div>
        )
    }
}

export default Map;
