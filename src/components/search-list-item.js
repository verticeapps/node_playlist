import React from 'react';

export default class SearchResultsItem extends React.Component {

  constructor(props){
    super(props);
    // console.log(props);
    // this.state = {
    //   isEditing : false
    // };
  }

  render() {
    return (
        <div>
          { this.renderTaskSection() }
        </div>
    );
  }

  // Saved Tasks
  renderTaskSection() {
    const { song, artist } = this.props;

    return (
      <div class="songEntry">
        <p>{song}</p>
        <p>{artist}</p>
        </div>
    );
  }
}
