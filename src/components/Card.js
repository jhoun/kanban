import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { deleteCard } from '../actions/Cards'
import EditTaskForm from './EditTaskForm';
import './Card.scss';

class Cards extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      id: ''
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(event) {
    event.preventDefault();
    this.props.deleteCard(this.props.id)
  }

  renderCard() {
    return (
      <div className={`card ${this.props.status}`}>
        <div className="card_info card__task">{this.props.title}</div>
        <div className="card_info card__priority">Priority: {this.props.priority}</div>
        <div className="card_info card__createdBy">Assigned by: {this.props.createdBy}</div>
        <div className="card_info card__assignedTo">Assigned to: {this.props.assignedTo}</div>
        <div className="modify-btn-container">
          <div className={`modify-btn-${this.props.status}`} onClick={this.handleOpenModal}>Edit</div>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Modal" className="modal"
            overlayClassName="overlay"
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={true}
          >
            <EditTaskForm selectedCardData={this.props} handleCloseModal={this.handleCloseModal} />
          </ReactModal>
          <div className={`modify-btn-${this.props.status}`} onClick={this.handleDelete}>Delete</div>
        </div>
      </div>
    )

  }

  render() {
    return (
      <div className="card-container">
        {this.renderCard()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cardData: state.cardData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCard: (data) => dispatch(deleteCard(data))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cards);