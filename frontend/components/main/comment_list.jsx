import React from 'react';
import { sortBy } from 'lodash';
import CommentListItemContainer from './comment_list_item_container';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import merge from 'lodash/merge';
import 'react-datepicker/dist/react-datepicker.css';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class CommentList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      submitComment: ''
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }
  componentDidMount() {
    this.props.fetchTask(this.props.taskId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.taskId !== nextProps.taskId) {
      this.props.fetchTask(nextProps.taskId);
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
        }).then(() => this.setState({submitComment: ''.trim()}));
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

        <div className='commentBox-scrollable'>
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
          <div className='commentBox-commentList'>
            {this.props.comments.map(comment =>
              <CommentListItemContainer
                key={comment.id}
                comment={comment}
                user={this.props.users[comment.userId]} />
            )}
          </div>
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
