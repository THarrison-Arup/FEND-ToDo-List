import React, { Component } from "react";
import Heading from "./components/Heading";
import TaskAdder from "./components/TaskAdder";
import TaskList from "./components/TaskList";
import "./App.css";

// class based component

// const tasks = ['eat', 'sleep', 'react', 'have lunch'];

class App extends Component {
  state = {
    tasks: [
      { text: "eat", category: "food", completed: false },
      { text: "sleep", category: "hobbies", completed: false },
      { text: "react", category: "work", completed: false }
    ]
  };

  render() {
    console.log("rendering...", this.state);
    return (
      <div className="App">
        <Heading name="Paul" />
        <TaskAdder addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          removeTask={this.removeTask}
          toggleTaskComplete={this.toggleTaskComplete}
        />
      </div>
    );
  }

  addTask = taskToAdd => {
    this.setState(state => ({
      tasks: [taskToAdd, ...state.tasks]
    }));
  };

  removeTask = taskToRemove => {
    this.setState(state => {
      return {
        tasks: state.tasks.filter(task => task !== taskToRemove)
      };
    });
  };

  toggleTaskComplete = taskToToggle => {
    this.setState(state => {
      if (taskToToggle.completed === false) {
        return {
          tasks: state.tasks.map(task => {
            if (task.text === taskToToggle.text) {task.completed = true}
            return task;
          })
        };
      } else {
        return {
          tasks: state.tasks.map(task => {
            if (task.text === taskToToggle.text) {task.completed = false}
            return task;
          })
        }
      }
    });
  };
}
export default App;
