import _ from 'lodash';
import React from 'react';
import CommentsListItem from './comments-list-item';

export default class CommentList extends React.Component {
  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
  renderItems() {
    // const props = _.omit(this.props, 'todos');
    return _.map(this.props.comments, (comment, index) => <CommentsListItem key={index}
           {...comment} />);
  }
}
