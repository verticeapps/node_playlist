import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';
// Temporary inline test dataset
const todos = [
  {
    task: 'Gold Digger',
    artist: 'Kanye West',
    isCompleted: false
  },
  {
    task: 'Bohemian Rhapsody',
    artist: 'Queen',
    isCompleted: false
  },
  {
    task: 'Weird Fishes',
    artist: 'Radiohead',
    isCompleted: false
  },
  {
    task: 'Sexy Back',
    artist: 'Justin Timberlake',
    isCompleted: false
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos       // inline test dataset
    };
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container" id="main">
          <h1>Playlistr</h1>
          <h2>Share your playlist to someone</h2>
          <CreateTodo createTask={this.createTask.bind(this)}/>
          <TodosList
              todos= { this.state.todos }
              toggleTask = { this.toggleTask.bind(this) }
              saveTask = { this.saveTask.bind(this) }
              deleteTask = { this.deleteTask.bind(this) }
          />
        </div>
      </div>
    );
  }


  // Passing this function to Todos List props
  toggleTask(task) {
    console.log(this);
    // Find the todo task the matches the todo task we click on
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos });
  }
  // Passing this function to CreateTodo props
  createTask(task) {
    console.log(this);
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState( { todos: this.state.todos });
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({ todos: this.state.todos });
  }
}
