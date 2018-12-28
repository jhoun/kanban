import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions/Cards';
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
      assignedTo: '',
      priorityDropdown: [
        { name: 'priority', label: 'low', value: 1 },
        { name: 'priority', label: 'medium', value: 2 },
        { name: 'priority', label: 'high', value: 3 },
      ],
      statusDropdown: [
        { name: 'status', label: 'queue', value: 1 },
        { name: 'status', label: 'progress', value: 2 },
        { name: 'status', label: 'done', value: 3 }
      ]
    };
    this.usersDropdown = this.usersDropdown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  usersDropdown() {
    console.log('this.props', this.props);
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
      priority,
      status,
      createdBy,
      assignedTo
    }
    console.log('newCardData', newCardData);

    this.props.addCard(newCardData);
    this.props.handleCloseModal();
  }

  render() {
    this.usersDropdown();
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
            options={this.state.priorityDropdown}
          />
        </label>
        <label className="label">
          <Select
            name="status"
            placeholder="Status"
            onChange={this.handleChange}
            className="form-input"
            options={this.state.statusDropdown}
          />
        </label>
        <label className="label">
          <input
            type="text"
            name="createdBy"
            className="form-input"
            placeholder="Created By"
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = `Created By`}
            value={this.state.createdBy}
            onChange={this.handleChange}
          />
        </label>
        <label className="label">
          <input
            type="text"
            name="assignedTo"
            className="form-input"
            placeholder="Assigned To"
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = `Assigned To`}
            value={this.state.assignedTo}
            onChange={this.handleChange}
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
    cardData: state.cardData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCard: (data) => dispatch(addCard(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskForm);