import React, { PropTypes } from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return (
      <div className='todo-list'>
        <ul>
          {this.props.todos.map((todo, index) =>
            <Todo
              key={index}
              {...todo} // ES6 扩展运算符
              todoClick={() => this.props.onTodoClick(index)} />
          )}
        </ul>
      </div>
    )
  }
}

// props验证
TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}

export default TodoList;
