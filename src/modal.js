import React, { Component } from 'react';
import "./styles/occupation.css";
import Modal from 'react-responsive-modal';
import './styles/custom-animation.css';
import './index.css';



class Modal extends Component {
    state = {
        open: false,
    }

    onOpenModal = () => {
        this.setState({ open: true });
    }

    onCloseModal = () => {
        this.setState({ open: false });
    }

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
    animationDuration={1000}>
    </Modal>
}

export default Modal;