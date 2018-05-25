import React, { Component } from 'react';
import "./styles/address.css";


class Address extends Component {
    render() {
        return (
                <div className="addy">
                    <h3>Where I live:</h3>
                    <p>{this.props.address.street} </p>
                    <p>{this.props.address.city} </p>
                    <p>{this.props.address.state} </p>
                </div>
        );
    }
}

export default Address;