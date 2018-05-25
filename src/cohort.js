import React, { Component } from 'react';
import "./styles/cohort.css";


class Cohort extends Component {
    render() {
        return (
                <div className="cohort">
                    <h3>My class:</h3>
                    <p>{this.props.cohort} </p>

                </div>
        );
    }
}

export default Cohort;