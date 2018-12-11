import React, { Component } from 'react';
import ReactModal from 'react-modal';
import NewTaskForm from './NewTaskForm';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
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
        <div className="header__title">KANBAN</div>
        <div onClick={this.handleOpenModal} className="header__new-task-btn">+ NEW TASK</div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Modal" className="modal"
          overlayClassName="Overlay"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
        >
          <NewTaskForm handleCloseModal={this.handleCloseModal}/>
        </ReactModal>
      </div>
    )
  }
}

export default Header;