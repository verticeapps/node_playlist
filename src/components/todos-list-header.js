import React from 'react';

export default class TodosListHeader extends React.Component {
  render() {
    return (
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Youtube</th>
            <th>Spotify</th>
            <th>Action</th>
          </tr>
        </thead>
    );
  }
}
