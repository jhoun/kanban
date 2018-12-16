import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCard } from '../actions/Cards'
import Select from 'react-select';

const priority = [
  { name: 'priority', label: 'high' , value: 'high'},
  { name: 'priority', label: 'medium', value: 'medium' },
  { name: 'priority', label: 'low', value: 'low' }
];

const status = [
  { name: 'status', label: 'queue', value: 'queue' },
  { name: 'status', label: 'progress', value: 'progress' },
  { name: 'status', label: 'done', value: 'done' }
];

class EditTaskForm extends Component {
  constructor(props){
    super(props)

    const { id, task, priority, status, createdBy, assignedTo } = props.selectedCardData;

    this.state = {
      id,
      task,
      priority,
      status,
      createdBy,
      assignedTo,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target ? target.value : event.value;
    const name = target ? target.name : event.name;

    this.setState({
      [name]: value
    })
  }

  handleSelectChange(selectedOption) {
    this.setState({ selectedOption });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.editCard(this.state);
    this.props.handleCloseModal();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div className="form-title">EDIT TASK</div>
        <label>
          <input
            type="text"
            name="task"
            className="form-input"
            placeholder={`Task: ${this.state.task}`}
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = `Task: ${this.state.task}`}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <Select
            name="priority"
            placeholder={`Priority: ${this.state.priority}`}
            onChange={this.handleChange}
            className="form-input"
            options={priority}
          />
        </label>
        <label>
          <Select
            name="status"
            placeholder={`Status: ${this.state.status}`}
            onChange={this.handleChange}
            className="form-input"
            options={status}
          />
        </label>
        <label>
            <input
              type="text"
              name="createdBy"
              className="form-input"
              placeholder={`Created By: ${this.state.createdBy}`}
              onFocus={(e) => e.target.placeholder = ""}
              onBlur={(e) => e.target.placeholder = `Created By: ${this.state.createdBy}`}
              onChange={this.handleChange}
            />
        </label>
        <label>
            <input
              type="text"
              name="assignedTo"
              className="form-input"
              placeholder={`Assigned To: ${this.state.assignedTo}`}
              onFocus={(e) => e.target.placeholder = ""}
              onBlur={(e) => e.target.placeholder = `Assigned To: ${this.state.assignedTo}`}
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

const mapDispttchToProps = dispatch => {
  return {
    editCard: (data) => dispatch(editCard(data))
  }
}

export default connect(mapStateToProps, mapDispttchToProps)(EditTaskForm);