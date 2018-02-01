import React, {Component} from 'react';
import Alert from '../../components/Alert';
import BigButton from '../../components/BigButton';
import '../../styles/globalStyles.css'
import logo from '../../images/full-logo.png'


const logoStyle = {
    height: 76,
    width: 76,
    textAlign: 'center',
    justifyContent: 'center',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
}

class Home extends Component {
    state = {
    };

    render() {
        return (
            <div className = "col-sm-12">
                <Alert type="success" custom="yellowAlert">
                <img src={logo} alt="logo" style={logoStyle} className='logo mb-4' />
                    <h3 className = 'text-center bold text'>IF IT'S TIME TO GO, PRESS GO!</h3>
                </Alert>
                <BigButton/>
            </div>
        )
    }
}

export default Home;