import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions/Cards';

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

  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Task Name:
              <input type="text" name="task" value={this.state.task} onChange={this.handleChange} />
        </label>
        <label>
          Priority:
              <input type="text" name="priority" value={this.state.priority} onChange={this.handleChange} />
        </label>
        <label>
          Status:
              <input type="text" name="status" value={this.state.status} onChange={this.handleChange} />
        </label>
        <label>
          Created By:
              <input type="text" name="createdBy" value={this.state.createdBy} onChange={this.handleChange} />
        </label>
        <label>
          Assigned To:
              <input type="text" name="assignedTo" value={this.state.assignedTo} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
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