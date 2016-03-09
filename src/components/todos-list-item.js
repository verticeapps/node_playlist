import React from 'react';

export default class TodosListItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isEditing : false
    };
  }

  render() {
    return (
        <tr>
          { this.renderTaskSection() }
          { this.renderArtistSection() }
          { this.renderYoutubeSection() }
          { this.renderSpotifySection() }
          { this.renderActionSection() }
        </tr>
    );
  }

  // Saved Tasks
  renderTaskSection() {
    const { task, artist, isCompleted } = this.props;
    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    };

    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
          <input type="text" defaultValue={task} ref="editInput" />
          </form>
        </td>
      );
    }


    return (
      <td style={taskStyle}
        onClick={this.props.toggleTask.bind(this, task)}
      >
        {task}
      </td>
    );
  }

  renderArtistSection() {
    const { task, artist, isCompleted } = this.props;
    return (
      <td>
        {artist}
      </td>
    );
  }
  renderYoutubeSection() {
    const { task, artist, isCompleted } = this.props;
    const btnStyles = {
      cursor : "pointer",
      width: 20 + "px"
    };
    return (
      <td>
        <img src="http://www.iconarchive.com/download/i78250/igh0zt/ios7-style-metro-ui/MetroUI-YouTube-Alt-2.ico" style={btnStyles} />
      </td>
    );
  }
  renderSpotifySection() {
    const { task, artist, isCompleted } = this.props;
    const btnStyles = {
      cursor : "pointer",
      width: 20 + "px"
    };
    return (
      <td>
        <img src="http://icons.iconarchive.com/icons/froyoshark/enkel/512/Spotify-icon.png" style={btnStyles}/>
      </td>
    );
  }
  // Edit/Save and Delete
  renderActionSection() {
    if(this.state.isEditing) {
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }
    return (
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
      </td>
    );
  }




  onEditClick() {
    this.setState({ isEditing: true });
  }
  onCancelClick() {
    this.setState({ isEditing: false });
  }
  onSaveClick(event) {
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false} );
  }
}
