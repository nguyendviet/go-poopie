import React, {Component} from 'react';
import Alert from '../../components/Alert';
import GMap from '../../components/GMap';

class Map extends Component {
    state = {
    };

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
