import React from 'react';

export default class TodosListItem extends React.Component {

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
        <form onSubmit={this.handleCreate.bind(this)}>
        <input style={{ width: 300 + "px" }} name="task" type="text" placeholder="What song do you want to add?" ref="createInput"/><br/>
        <input style={{ width: 300 + "px" }} name="artist" type="text" placeholder="Who is the artist?" ref="createArtist"/><br/>
        <button>Create</button>
        {this.renderError()}
        </form>
    );
  }

  handleCreate(event) {
    event.preventDefault();

    const createInput = this.refs.createInput;
    const createArtist = this.refs.createArtist;
    const task = createInput;
    const artist = createArtist;
    const inputs = [task, artist];
    const errorMsg = 0;
    // const validateInput = this.validateInput(inputs);
    // let validateInput = false;
    var errorArr = [];
    for (var i = 0; i < inputs.length; i++) {
      errorArr[i] = this.validateInput(inputs[i]);

    }
    if(errorArr[0] != null && errorArr[1] != null) {
      console.log('hi');
      this.setState ({ error: errorArr });
      return;
    }
    // console.log(errorArr.length);


    this.setState({ error: null });
    console.log(inputs);
    this.props.createTask(inputs);
    this.refs.createInput.value = '';
    this.refs.createArtist.value = '';
  }

  validateInput(item) {
    // console.log(item.name);
    var todos = this.props.todos;
    let itemName = item.name;
      if(!item.value) {
        return 'Please enter a ' + itemName;
      }
      else if(_.find(todos, todo => todo[item.name] === item.value)){
        return itemName + ' already exists.';
      }
      else {
        return null;
      }
  }
}
