import React from 'react';

export default class CommentListItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isEditing : false
    };
  }

  render() {
    const { comment, user } = this.props;
    return (
      <div>
        <span style={{ fontWeight: "bolder"}}>{user}</span>
        <p>{ comment } </p>
      </div>
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
      ><div class="songEntry">
        <p>{task}</p>
        </div>
      </td>
    );
  }

  renderArtistSection() {
    const { task, artist, isCompleted } = this.props;
    return (
      <td>
        <div class="artistEntry">
          <p>{artist}</p>
        </div>
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
        <a href="http://youtube.com" target="_blank">
        <img src="http://www.iconarchive.com/download/i78250/igh0zt/ios7-style-metro-ui/MetroUI-YouTube-Alt-2.ico" style={btnStyles} />
        </a>
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
        <a href="http://spotify.com" target="_blank">
        <img src="http://icons.iconarchive.com/icons/froyoshark/enkel/512/Spotify-icon.png" style={btnStyles}/>
        </a>
      </td>
    );
  }
  // Edit/Save and Delete
  renderActionSection() {
    if(this.state.isEditing) {
      return (
        <td>
          <div class="actionBtns">
          <button class="btn btn-success" onClick={this.onSaveClick.bind(this)}>Save</button>
          <button class="btn btn-danger" onClick={this.onCancelClick.bind(this)}>Cancel</button>
          </div>
        </td>
      );
    }
    return (
      <td>
        <div class="actionBtns">
        <button class="btn btn-success" onClick={this.onEditClick.bind(this)}>Edit</button>
        <button class="btn btn-danger" onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
        </div>
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
