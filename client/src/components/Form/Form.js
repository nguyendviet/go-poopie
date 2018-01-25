import React from 'react';

const Form = props => (
    <form>
        <div className="form-group">
        <h4>
            <strong>Name</strong>
        </h4>
        <input
            className="form-control"
            type="text"
            value={props.name}
            name="name"
            onChange={props.handleInputChange}
            required
        />
        <h4>
            <strong>Lat</strong>
        </h4>
        <input
            className="form-control"
            type="number"
            value={props.lat}
            name="lat"
            onChange={props.handleInputChange}
            required
        />
        <h4>
            <strong>Lng</strong>
        </h4>
        <input
            className="form-control"
            type="number"
            value={props.lng}
            name="lng"
            onChange={props.handleInputChange}
            required
        />
        </div>
        <div className="pull-right">
        <button
            onClick={props.handleFormSubmit}
            type="submit"
            className="btn btn-lg btn-danger"
        >
            Submit
        </button>
        </div>
    </form>
);

export default Form;