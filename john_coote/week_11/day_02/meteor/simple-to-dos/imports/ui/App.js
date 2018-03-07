import React, { PureComponent as Component } from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import Task from './Task.js';
import AccountsUIWrapper from './AccountsUIWrapper.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hideCompleted: false
    };
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call('tasks.insert', text);

    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderTasks() {
    let filteredTasks = this.props.tasks
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map( (task) => (
      <Task key={task._id} task={task} />
    ))
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List ({this.props.incompleteCount})</h1>
          <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)} />
              Hide Completed tasks
          </label>
        </header>
        <AccountsUIWrapper />

        {this.props.currentUser ?
          <form className="new-task" onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              ref="textInput"
              placeholder="Type Your Text Here" />
          </form> : ''
        }

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

// Higher Order Component
export default withTracker(() => {
  return {
    tasks: Tasks.find({}, {sort: {createdAt: -1}}).fetch(),
    incompleteCount: Tasks.find({checked: { $ne: true } }).count(),
    currentUser: Meteor.user()
  }
})(App);