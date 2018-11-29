import React from 'react';
import { sortBy } from 'lodash';
import CommentListItemContainer from './comment_list_item_container';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import merge from 'lodash/merge';
import 'react-datepicker/dist/react-datepicker.css';

class CommentList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      submitComment: '',
      isFetching: false
    };
    this.commentsCount = 0;
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    // console.log(this.props.taskId);
    this.props.fetchComments({
      task_id: this.props.taskId,
      comments_count: this.commentsCount
    }).then(() => {
      document.getElementById("latest-comment").scrollIntoView();
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.taskId);
    if (this.props.taskId !== nextProps.taskId) {
      this.commentsCount = 0;
      this.props.fetchComments({
        task_id: nextProps.taskId,
        comments_count: this.commentsCount
      }).then(() => {
        document.getElementById("latest-comment").scrollIntoView();
      });
    }
  }

  handleScroll() {
    console.log(this.commentsCount);
    if (this.box.scrollTop === 0) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.setState({isFetching: true});
      
      this.timeout = setTimeout(() => {
        this.commentsCount += 15;
        this.props.fetchAdditionalComments({
          task_id: this.props.taskId,
          comments_count: this.commentsCount
        }).then(() => {
          this.setState({ isFetching: false });
        });
        this.timeout = null;
      }, 1000);
    }
  }

  handleChange() {
    return e => this.setState({submitComment: e.target.value});
  }

  handleChangeDate(date) {
    this.setState({
      dueDate: date
    });
    const updatedTask = merge({}, this.props.task);
    updatedTask.due_date = new Date(date.format('LLLL'));
    this.props.updateTask(updatedTask);
  }

  handleUser(user) {
    const updatedTask = merge({}, this.props.task);
    updatedTask.user_assigned_id = user;
    this.props.updateTask(updatedTask);
  }

  handleSubmit () {
    return e => {
      if (e.key === 'Enter') {
        this.props.createComment({
          task_id: this.props.taskId,
          user_id: this.props.currentUser.id,
          body: this.state.submitComment.trim()
        }).then(() => {
          this.setState({
            submitComment: ''.trim()
          })
          document.getElementById("latest-comment").scrollIntoView();
        });
      }
    };
  }

  getTasks (sectionId) {
    let tasks = this.props.tasks.filter(task => task.sectionId === sectionId);
    return sortBy(tasks, ['order']);
  }

  render() {
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

    let outputDate;
    if (this.props.task && this.props.task.dueDate) {
      let date = new Date(this.props.task.dueDate);
      outputDate = '' + month[date.getMonth()+1] + ' ' + date.getDate();
    } else {
      outputDate = '';
    }
    let initial = this.props.currentUser.fname[0] + this.props.currentUser.lname[0];

    return (
      <div className='commentBox-container'>
          <div className='commentBox-close'>
            <i onClick={this.props.closeCommentPane} className="fas fa-times fa-lg"></i>
          </div>
          <div className='commentBox-taskName'>
            {this.props.task ? this.props.task.name : null}
          </div>
          <div className='commentBox-assignedDueRow'>
            <div className='commentBox-line'>
              <div
                className='commentBox-tokenButton' id={`user${this.props.task.id}`}
                onClick={() => {
                  this.props.setModalPositions(document.getElementById(`user${this.props.task.id}`));
                  this.props.openModal('assignedUserOptions');
                }}>
                { this.props.task && this.props.task.userAssignedId ?
                  <div className='smallAvatar'>{initial}</div> :
                  <i className="far fa-user-circle fa-2x"></i>
                }
                { this.props.task && this.props.task.userAssignedId ?
                  this.props.users[this.props.task.userAssignedId].fname + ' ' +
                  this.props.users[this.props.task.userAssignedId].lname :
                  "Unassigned"
                }
                { this.props.task && this.props.task.userAssignedId ?
                  <i
                    className="fas fa-times-circle fa-lg"
                    onClick={e => {
                      e.stopPropagation();
                      this.handleUser(null);
                    }}>
                  </i> : null
                }
              </div>
              <div className='commentBox-tokenButton'>
                <i className="far fa-calendar fa-2x"></i>
                { this.props.task ?
                <DatePicker
                  selected={this.props.task.dueDate ? moment(this.props.task.dueDate) : null}
                  onChange={this.handleChangeDate}
                  placeholderText={'Due Date'}
                  dateFormat="MMM DD"
                /> : null }
              </div>
            </div>
          </div>
          <div className='commentBox-descriptionBox'>
            <i className="fas fa-align-left fa-lg"></i>
            {this.props.task ? this.props.task.description : null}
          </div>
          <div 
            className='commentBox-commentList'
            ref={ node => {this.box = node;} }
            onScroll={this.handleScroll}>
            { this.state.isFetching ?
              <img className="comment-loading"
              src="https://raw.githubusercontent.com/liamzhang40/Basana/master/app/assets/images/comment_loading.gif"
              alt="loading..."/> : null
            }
            {this.props.comments.map(comment =>
              <CommentListItemContainer
                key={comment.id}
                comment={comment}
                user={this.props.users[comment.userId]} />
            )}
            <div id='latest-comment'></div>
          </div>
        <div className='addCommentBoxContainer'>
          <div className='smallAvatar'>{initial}</div>
          <textarea
            className='commentComposer'
            onChange={this.handleChange()}
            onKeyPress={this.handleSubmit()}
            value={this.state.submitComment}
            placeholder='Write a comment...'/>
        </div>
      </div>
    );
  }
}

export default CommentList;
