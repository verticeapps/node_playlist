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
      todos,
      isSharing : false
    };
  }

  render() {
    return (
      <div class="wrapper">
        <div class="container" id="main">
          <h1>Playlistr</h1>
          <div>
            {this.renderShareSection()}
          </div>
          <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
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
  createTask(inputs) {
    console.log(inputs);
    // inputs.forEach(function(input) {
    var songEntry = {
      "task" : inputs[0].value,
      "artist" : inputs[1].value,
      "isCompleted" : false
    };
      this.state.todos.push(songEntry);
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
  shareClick() {
    this.setState( { isSharing : true } );
  }

  renderShareSection() {
    // console.log(this.state.isSharing);
    if( this.state.isSharing ) {
      return (
        <div>
          <input type="text" readOnly={true} value="http://playlistr/dansplaylists/id/12312321"/>
        </div>
      );
    }
    else {
      return (
        <div>
          <img onClick={this.shareClick.bind(this)} src="http://cdn.shopify.com/s/files/1/0099/9562/products/026-Social-Sharing-Template-Widget-Hero-Icon_2048x2048.png?v=1423737372" style={{width: 150 + "px", cursor: 'pointer'}}/>
        </div>
      );
    }
  }

}
