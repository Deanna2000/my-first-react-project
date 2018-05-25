import React, { Component } from 'react';
import "./styles/car.css";


class Car extends Component {
    render() {
        return (
                <div className="car">
                    <h3>What I drive:</h3>
                    <p>Make: {this.props.car.make} </p>
                    <p>Model: {this.props.car.model} </p>
                </div>
        );
    }
}

export default Car;