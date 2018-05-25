import React, { Component } from 'react';
import Address from './address';
import Car from './car';
import Cohort from './cohort';
import Pet from './pet';
import Occupation from './occupation';


// Create object
class Deanna extends Component {
  state = {
          firstName: "",
          lastName: "",
          occupation: "",
          address: {},
          pet: {},
          car: {},
          cohort: ""
      }

      componentDidMount () {
        fetch("http://localhost:8088/people/1")
            .then(response => response.json())
            .then(deanna => this.setState(deanna))
    }

      // Update JSX to use state properties
      render() {
        return (
          <div className="deanna">
              <h2>{this.state.firstName} {this.state.lastName}</h2>
              <Occupation occupation={this.state.occupation}/>
              <Cohort cohort={this.state.cohort}/>
              <Address address={this.state.address}/>
              <Car car={this.state.car}/>
              <Pet pet={this.state.pet}/>
          </div>
      );
    }
}

export default Deanna;