import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCard } from '../actions/Cards'
import Select from 'react-select';

class EditTaskForm extends Component {
  constructor(props) {
    super(props)
    const { card_id, title, priority, priority_id, status, status_id, createdBy, createdBy_id, assignedTo, assignedTo_id } = props.selectedCardData;

    this.state = {
      card_id,
      title,
      priority,
      priority_id,
      status,
      status_id,
      createdBy,
      createdBy_id,
      assignedTo,
      assignedTo_id
    }

    this.dropdownValues = this.dropdownValues.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  dropdownValues(category) {
    switch (category) {

      case 'priority':
        return [
          { name: 'priority', label: 'low', value: 1 },
          { name: 'priority', label: 'medium', value: 2 },
          { name: 'priority', label: 'high', value: 3 },
        ];

      case 'status':
        return [
          { name: 'status', label: 'queue', value: 1 },
          { name: 'status', label: 'progress', value: 2 },
          { name: 'status', label: 'done', value: 3 }
        ];

      case 'createdBy':
        return this.props.userData.map(user => {
          return {
            name: 'createdBy', label: user.first_name, value: user.id
          }
        })

      case 'assignedTo':
        return this.props.userData.map(user => {
          return {
            name: 'assignedTo', label: user.first_name, value: user.id
          }
        })

      default:
        return null;
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target ? target.value : event.value;
    const name = target ? target.name : event.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('this.state in HANDLE SUBMIT', this.state);
    const editCard = {
      card_id: this.state.card_id,
      title: this.state.title,
      priority_id: typeof this.state.priority === 'string' ? this.state.priority_id : this.state.priority,
      status_id: typeof this.state.status === 'string' ? this.state.status_id : this.state.status,
      created_by_id: typeof this.state.createdBy === 'string' ? this.state.createdBy_id : this.state.createdBy,
      assigned_to_id: typeof this.state.assignedTo === 'string' ? this.state.assignedTo_id : this.state.assignedTo
    }
    console.log('editCard', editCard);
    this.props.editCard(editCard);
    this.props.handleCloseModal();
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div className="form-title">EDIT TASK</div>
        <label>
          <input
            type="text"
            name="title"
            className="form-input"
            placeholder={`Task: ${this.state.title}`}
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = `Task: ${this.state.title}`}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <Select
            name="stuff"
            placeholder={`Priority: ${this.state.priority}`}
            onChange={this.handleChange}
            className="form-input"
            options={this.dropdownValues("priority")}
          />
        </label>
        <label>
          <Select
            name="status"
            placeholder={`Status: ${this.state.status}`}
            onChange={this.handleChange}
            className="form-input"
            options={this.dropdownValues("status")}
          />
        </label>
        <label>
          <Select
            name="createdBy"
            placeholder={`Created By: ${this.state.createdBy}`}
            onChange={this.handleChange}
            className="form-input"
            options={this.dropdownValues("createdBy")}
          />
        </label>
        <label>
          <Select
            name="assignedTo"
            placeholder={`Created By: ${this.state.assignedTo}`}
            onChange={this.handleChange}
            className="form-input"
            options={this.dropdownValues("assignedTo")}
          />
        </label>
        <input
          type="submit"
          value="Submit"
          className="submit"
        />
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    cardData: state.cardData,
    userData: state.userData
  }
}

const mapDispttchToProps = dispatch => {
  return {
    editCard: (data) => dispatch(editCard(data))
  }
}

export default connect(mapStateToProps, mapDispttchToProps)(EditTaskForm);