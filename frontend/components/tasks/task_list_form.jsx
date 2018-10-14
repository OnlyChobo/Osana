import React from 'react';

let order = 1;
class TaskListForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleSubmit() {
    return e => {
      e.preventDefault();
      this.props.receiveTask({
        name: this.state.name,
        description: this.state.description,
        id: order
      });
      order ++;
      this.setState({name:"", description:""});
    };
  }

  handleOnChange(attribute) {
    return e => this.setState({[attribute]: e.target.value});
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit()}>
        <input type='text' value={this.state.name} onChange={this.handleOnChange('name')}/>
        <input type='text' value={this.state.description} onChange={this.handleOnChange('description')}/>
        <input type='submit' />
      </form>
    );
  }
}

export default TaskListForm;
