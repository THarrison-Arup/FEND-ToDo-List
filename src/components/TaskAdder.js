import React from 'react';

class TaskAdder extends React.Component {
  state = {
    newTask: '',
    newCategory: ''
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="new-task">New Task:</label>
        <input
          id="newTask"
          type="text"
          onChange={this.handleChange}  
          value={this.state.newTask}
          placeholder="Add New Task..."
        />
        <input
          id='newCategory'
          type="text"
          onChange={this.handleChange}  
          value={this.state.newCategory}
          placeholder="Add Task Category..."
        />
        <button
          type="submit"
        >Add Task</button>
      </form>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.newCategory && this.state.newTask) {
      console.log('ready to submit')
    } else {
      console.log('there is a blank field')
    };
    this.props.addTask({ text: this.state.newTask, category: this.state.newCategory, completed: false });
    this.setState({
      newTask: ''
    });
  };

  handleChange = event => {
      const { value, id } = event.target;
      if (id === "newTask") {
      this.setState({
        newTask: value
      });
    } else if (id === "newCategory") {
      this.setState({
        newCategory: value
      });
    };
  };
}

export default TaskAdder;
