import React from 'react';

import CreateTodo from './create-todo';
import CreateComment from './create-comment';

import TodosList from './todos-list';
import CommentList from './comments-list';

import SongStore from '../stores/SongStore';
import CommentStore from '../stores/CommentStore';


const todos  = SongStore.getAll();
const comments = CommentStore.getAll();

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos,
      comments,
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
        <div class="container" id="comments">
          <CreateComment comments = {this.state.comments} createComment={this.createComment.bind(this)}/>
          <CommentList
              comments= { this.state.comments }
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

  createComment(comment) {
    // const { comment } = commentObj.value;
    // const { user } = commentObj.user;
    var commentEntry = {
      "comment" : comment,
      "user" : "DannyPaguiao",
    };
    this.state.comments.push(commentEntry);
    this.setState( { comments: this.state.comments });
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
          <input autofocus type="text" value="http://playlistr/dansplaylists/id/12312321"/>
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
