import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions/Cards';
import { loadUsers } from '../actions/Users';
import './NewTaskForm.scss';
import Select from 'react-select';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      priority: '',
      status: '',
      createdBy: '',
      assignedTo: ''
    };
    this.dropdownValues = this.dropdownValues.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.loadUsers();
  }

  dropdownValues(category) {
    switch(category){

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
    const { title, priority, status, createdBy, assignedTo } = this.state;

    const newCardData = {
      title,
      priority_id: priority,
      status_id: status,
      created_by_id: createdBy,
      assigned_to_id: assignedTo
    }
    this.props.addCard(newCardData);
    this.props.handleCloseModal();
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div className="form-title">Create New Task</div>
        <label className="label">
          <input
            type="text"
            name="title"
            className="form-input"
            placeholder="Task Name"
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = `Task Name`}
            value={this.state.task} onChange={this.handleChange}
          />
        </label>
        <label className="label">
          <Select
            name="priority"
            placeholder="Priority"
            onChange={this.handleChange}
            className="form-input"
            options={this.dropdownValues("priority")}
          />
        </label>
        <label className="label">
          <Select
            name="status"
            placeholder="Status"
            onChange={this.handleChange}
            className="form-input"
            options={this.dropdownValues("status")}
          />
        </label>
        <label className="label">
          <Select
            name="createdBy"
            placeholder="Created By"
            onChange={this.handleChange}
            className="form-input"
            options={this.dropdownValues("createdBy")}
          />
        </label>
        <label className="label">
          <Select
            name="assignedTo"
            placeholder="Assigned To"
            onChange={this.handleChange}
            className="form-input"
            options={this.dropdownValues('assignedTo')}
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

const mapDispatchToProps = dispatch => {
  return {
    addCard: (data) => dispatch(addCard(data)),
    loadUsers: () => dispatch(loadUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskForm);