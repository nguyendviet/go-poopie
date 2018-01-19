import React, {Component} from 'react';
import Alert from '../../components/Alert';
import BigButton from '../../components/BigButton';

class Home extends Component {
    state = {
    };

    render() {
        return (
            <div>
                <Alert>
                    <p>Notification for Home Page. Something like: Go Poopie. Find nearby bathrooms! Click Big Button to Go!</p>
                </Alert>
                <BigButton/>
            </div>
        )
    }
}

export default Home;