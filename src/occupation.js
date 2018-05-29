import React, { Component } from 'react';
import "./styles/occupation.css";
import Modal from 'react-responsive-modal';
import './styles/custom-animation.css';
import './index.css';
import './deannaProfile.jpg';



class Occupation extends Component {
    state = {
        open: false,
      }
        onOpenModal = () => {
        this.setState({ open: true });
      }

        onCloseModal = () => {
        this.setState({ open: false });
      }

    render() {
        const { open } = this.state;
        return (
                <div className="occupation boxShadow">
                <button className="btn btn-action" onClick={this.onOpenModal}>
                    <h3>What I do:</h3>
                    <p>{this.props.occupation} </p>
                </button>{' '}
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          classNames={{
            transitionEnter: 'transition-enter',
            transitionEnterActive: 'transition-enter-active',
            transitionExit: 'transition-exit-active',
            transitionExitActive: 'transition-exit-active',
            overlay: 'custom-overlay',
            modal: 'custom-modal'
          }}
          animationDuration={1000}
        >
        <img src='/deannaProfile.jpg' alt='profile pic'></img>
          <h4>
            Make a Mess; Clean it Up
          </h4>
        </Modal>

                </div>
        );
    }
}

export default Occupation;