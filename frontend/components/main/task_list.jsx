import React from 'react';
import TaskListTasks from './task_list_tasks';
import CommentListContainer from './comment_list_container';
import { sortBy } from 'lodash';

class TaskList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      sortedSections: [],
      show: false,
      sectionName: 'New Section'
    };
  }
  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId).then(
      () => {
        this.sortSections();
        this.props.setHeader(this.props.projects[this.props.match.params.projectId].name);
      }
    );

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.projectId !== nextProps.match.params.projectId) {
      this.props.fetchProject(nextProps.match.params.projectId).then(
        () => {
          this.sortSections();
          this.props.setHeader(this.props.projects[this.props.match.params.projectId].name);
        }
      );
    }
  }

  componentWillUnmount() {
    this.props.closeCommentPane();
  }

  sortSections () {
    this.setState({sortedSections: sortBy(this.props.sections, ['order'])});
  }

  getTasks (sectionId) {
    let tasks = this.props.tasks.filter(task => task.sectionId === sectionId);
    return sortBy(tasks, ['order']);
  }

  handleChange () {
    return e => this.setState({sectionName: e.target.value});
  }

  handleSubmit () {
    return e => {
      if (e.key === 'Enter') {
        this.props.createSection({
          name: this.state.sectionName,
          order: this.props.last_section.order+1,
          project_id: this.props.match.params.projectId
        });
        this.setState({show: false});
      }
    };
  }

  render() {
    let section = this.state.show ? (
      <div className='newSection-container'>
        <div className='sectionTaskRow'>
          <input
            type='text'
            className='newSection'
            value={this.state.sectionName}
            onChange={this.handleChange()}
            onKeyPress={this.handleSubmit()} />
        </div>
      </div> ) : null;
    return (
      <div className='taskContainer'>
        <div className='taskBox'>
          <div className='SectionTaskHeader'>
            <input
              className = 'button addTask-button'
              onClick = {() => this.props.openModal('addTask')}
              type='submit'
              value='Add Task'/>
            <input
              className = 'button addTask-button addTask-button-white'
              onClick = {() => this.setState({show: true})}
              type='submit'
              value='Add Section'/>
          </div>
          {section}
          {this.props.sections.map(section =>
            <div key={section.id}>
              <div className='sectionTaskRow'>
                <div className='sectionRow-text'>
                  {section.name}:
                </div>
              </div>
              <TaskListTasks tasks={this.getTasks(section.id)}/>
            </div>
          )}
        </div>
        {this.props.commentPane ? <div className='commentBox'><CommentListContainer /></div> : <div></div>}
      </div>
    );
  }
}

export default TaskList;
