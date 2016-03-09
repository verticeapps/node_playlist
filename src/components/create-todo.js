import React from 'react';

export default class TodosListItem extends React.Component {
  render() {
    return (
        <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="What song do you want to add?" ref="createInput"/>
        <button>Create</button>
        </form>
    );
  }

  handleCreate(event) {
    event.preventDefault();
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }
}
