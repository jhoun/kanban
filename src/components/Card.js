import React, { Component } from 'react';
import ReactModal from 'react-modal';
import EditTaskForm from './EditTaskForm';
import './Card.scss';

class Cards extends Component {
  constructor(props){
    super(props)

    this.state = {
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

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

  renderCard(){
      return (
        <div className="card">
          <div className="card__task">{this.props.task}</div>
          <div className="card__priority">{this.props.priority}</div>
          <div className="card__status">{this.props.status}</div>
          <div className="card__createdBy">{this.props.createdBy}</div>
          <div className="card__assignedTo">{this.props.assignedTo}</div>
          <button onClick={this.handleOpenModal}>Edit</button>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Modal" className="modal"
            overlayClassName="Overlay"
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={true}
          >
            <EditTaskForm selectedCardData={this.props} handleCloseModal={this.handleCloseModal}  />
          </ReactModal>
        </div>
      )

  }

  render(){
    return (
      <div className="card-container">
        {this.renderCard()}
      </div>
    )
  }
}

export default Cards;