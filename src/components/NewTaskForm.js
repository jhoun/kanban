import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions/Cards';
import './NewTaskForm.scss';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      priority: '',
      status: '',
      createdBy: '',
      assignedTo: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { task, priority, status, createdBy, assignedTo } = this.state;

    const newCardData = {
      task,
      priority,
      status,
      createdBy,
      assignedTo
    }

    this.props.addCard(newCardData);
    this.props.handleCloseModal();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div className="form-title">CREATE NEW TASK</div>
        <label className="label">
          <input
            type="text"
            name="task"
            className="form-input"
            placeholder="Task Name"
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = `Task Name`}
            value={this.state.task} onChange={this.handleChange}
          />
        </label>
        <label className="label">
          <input
            type="text"
            name="priority"
            className="form-input"
            placeholder="Priority"
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = `Priority`}
            value={this.state.priority}
            onChange={this.handleChange}
          />
        </label>
        <label className="label">
          <input
            type="text"
            name="status"
            className="form-input"
            placeholder="Status"
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = `Status`}
            value={this.state.status}
            onChange={this.handleChange}
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