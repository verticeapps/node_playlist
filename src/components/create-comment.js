import React from 'react';

export default class CreateComment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  renderError() {
    if(!this.state.error) {
      return null;
    }
    var errors = [];
    console.log(this.state.error);

    return (
      <p style={{ color: 'red'}}>{this.state.error}</p>
    );
  }

  render() {
    return (
        <form id="createComment" onSubmit={this.handleCreate.bind(this)}>
        <input name="task" type="text" placeholder="What song do you want to add?" ref="createInput"/><br/>
        <button class="btn btn-primary">Create Comment</button>
        {this.renderError()}
        </form>
    );
  }

  handleCreate(event) {
    event.preventDefault();

    const createInput = this.refs.createInput;
    const comment = createInput;
    const validateInput = this.validateInput(comment);

    if(validateInput) {
      this.setState( {error: validateInput });
    }


    this.setState({ error: null });
    this.props.createComment({ comment: comment, user: "DannyPaguiao"});
    this.refs.createInput.value = '';
  }

  validateInput(input) {
    var todos = this.props.todos;
      if(!input.value) {
        return 'Please enter a comment';
      }
      // else if(_.find(todos, todo => todo[item.name] === item.value)){
      //   return itemName + ' already exists.';
      // }
      else {
        return null;
      }
  }
}
