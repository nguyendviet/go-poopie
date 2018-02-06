import React from 'react';

const Form = props => (
    <form>
        <div className="form">
            <div className="form-group">
                <h5 className="text">
                    <strong>Description</strong>
                </h5>
                <input
                    className="form-control"
                    type="text"
                    value={props.name}
                    placeholder='Add a helpful note'
                    name="name"
                    onChange={props.handleInputChange}
                    required
                />
            </div>
            {props.coords 
                ? (
                    <div>
                        <div className="form-group">
                            <h5 className="text">
                                <strong>Latitude</strong>
                            </h5>
                            <input
                                className="form-control"
                                type="number"
                                value={props.lat}
                                name="lat"
                                onChange={props.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <h5 className="text">
                                <strong>Longitude</strong>
                            </h5>
                            <input
                                className="form-control"
                                type="number"
                                value={props.lng}
                                name="lng"
                                onChange={props.handleInputChange}
                                required
                            />
                        </div>
                        <p className="instructionk text center"><em>Submit using specific coordinates</em></p>
                    </div>
                ) 
                : (<p className="instruction text center"><em>Submit using current location.</em></p>)
            }
        </div>
        {/* <div className="pull-right">
            <button
                onClick={props.handleFormSubmit}
                type="submit"
                className="btn btn-lg btn-danger"
            >
                Submit
            </button>
        </div> */}
    </form>
);

export default Form;