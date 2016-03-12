import _ from 'lodash';
import React from 'react';
// import TodosListHeader from './todos-list-header';
import SearchResultsItem from './search-list-item';

export default class YoutubeResults extends React.Component {
  render() {
    return (
      <div class="container">
          {this.renderItems()}
      </div>
    );
  }

  renderItems() {
    // const props = _.omit(this.props, 'searchResults');
    // console.log(props);
    return _.map(this.props.searchResults, (searchResults, index) => <SearchResultsItem key={index}
           {...searchResults} />);
  }


}
