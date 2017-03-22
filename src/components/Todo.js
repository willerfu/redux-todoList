import React, { PropTypes } from 'react';

class Todo extends React.Component {
  render() {
    return (
      <li
        onClick={this.props.todoClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
        }}>
        {this.props.text}
      </li>
    )
  }
}

// props验证
Todo.propTypes = {
  todoClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}

export default Todo;