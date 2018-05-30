import React, { Component } from 'react';
import "./styles/occupation.css";
import './index.css';
import './deannaProfile.jpg';

class OccupationModal extends Component {
    render() {
        return (
            <div className="occupationModal" >
                <div className="profilePicContainer">
                    <img className="profilePic" alt="Deanna's Profile" src={require('./deannaProfile.jpg')}></img>
                </div>
                <div className="occupationModalText">
                <h4>{this.props.newInformation.modalHeader}</h4>
                <p>{this.props.newInformation.modalDetail}</p>
                </div>
            </div>
        );
    }
}

export default OccupationModal;



