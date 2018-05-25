import React, { Component } from 'react';
import "./styles/occupation.css";


class Occupation extends Component {
    render() {
        return (
                <div className="occupy">
                    <h3>What I do:</h3>
                    <p>{this.props.occupation} </p>
                </div>
        );
    }
}

export default Occupation;