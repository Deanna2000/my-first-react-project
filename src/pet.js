import React, { Component } from 'react';
import "./styles/pet.css";


class Pet extends Component {
    render() {
        return (
                <div className="pet">
                    <h3>House Creature:</h3>
                    <p>Name: {this.props.pet.name} </p>
                    <p>Breed: {this.props.pet.breed} </p>
                </div>
        );
    }
}

export default Pet;