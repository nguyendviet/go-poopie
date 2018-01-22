import React from 'react';
import {Link} from 'react-router-dom';
import './BigButton.css'

const BigButton = () =>
    <div class="boo-bam">
        <div class="boo">
            <div class="thing">
                <div className="bam">
                    <Link to="/map"><button type="button" className="btn btn-danger btn-lg btn-round">Big Button</button></Link>
                </div>
            </div>
        </div>
    </div>
;

export default BigButton;