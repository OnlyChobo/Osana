import React from 'react';

class CommentListItem extends React.Component {

  render () {
    const month = {
      1: 'Jan',
      2: 'Feb',
      3: 'Mar',
      4: 'Apr',
      5: 'May',
      6: 'Jun',
      7: 'Jul',
      8: 'Aug',
      9: 'Sep',
      10: 'Oct',
      11: 'Nov',
      12: 'Dec'
    };
    let initial = this.props.user.fname[0] + this.props.user.lname[0];
    let date = new Date(this.props.comment.createdAt);
    let outputDate = '' + month[date.getMonth()+1] + ' ' + date.getDate();

    return (
      <div className='commentContainer'>
        <div className='profileIconContainer'>
          <div className='smallAvatar'>{initial}</div>
        </div>
        <div className='commentRightContainer'>
          <div className='commentTopContainer'>
            <div className='username'>{this.props.user.fname + " " + this.props.user.lname}</div>
            <div className='commentTimestamp'>{outputDate}</div>
          </div>
          <div className='commentBottomContainer'>
            {this.props.comment.body}
          </div>
        </div>
      </div>
    );
  }
}

export default CommentListItem;
