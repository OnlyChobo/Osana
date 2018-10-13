import React from 'react';
import { sortBy } from 'lodash';

class CommentList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      sortedSections: []
    };
  }

  render() {

    return (
      <div>
        <i onClick={this.props.closeCommentPane} className="fas fa-times"></i>
      </div>
    );
  }
}

export default CommentList;
