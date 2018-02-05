import React, {Component} from 'react';
import Alert from '../../components/Alert';
import BigButton from '../../components/BigButton';
import '../../styles/globalStyles.css'

class Home extends Component {
    state = {
    };

    render() {
        return (
            <div className = "container-fluid">
                <div className="row justify-content-center">
                    <div className = "col-sm-12 col-lg-8">
                        <Alert type="success" custom="yellowAlert">
                            <h3 className = 'text-center bold text'>IF IT'S TIME TO GO, PRESS GO!</h3>
                        </Alert>
                        <BigButton/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;