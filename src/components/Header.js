import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './Header.scss';

class Header extends Component {
  constructor() {
    super();

    this.state =  {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  };

  handleOpenModal() {
    this.setState({
      showModal: true
    });
  }

  handleCloseModal() {
    this.setState({
      showModal: false
    })
  }

  render(){
    return (
      <div className="header-container">
        <div className="header__title">Kanban</div>
        <div onClick={this.handleOpenModal} className="header__new-task-btn">New Task</div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Modal"
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    )
  }
}

export default Header;