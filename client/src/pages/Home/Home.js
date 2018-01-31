import React, {Component} from 'react';
import Alert from '../../components/Alert';
import BigButton from '../../components/BigButton';

class Home extends Component {
    state = {
    };

    render() {
        return (
            <div className = "col-sm-12">
                <Alert type="success" custom="foo">
                    <p className = "text-center">Notification for Home Page. Something like: Go Poopie. Find nearby bathrooms! Click Big Button to Go!</p>
                </Alert>
                <BigButton/>
            </div>
        )
    }
}

export default Home;