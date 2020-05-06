import React from 'react';
import { TodoFooter } from './TodoFooter';
import { TodoList } from './TodoList';
import { TodoHeader } from './TodoHeader';
import { Store } from '../store';
import { Stack } from 'office-ui-fabric-react';

let index = 0;

export class TodoApp extends React.Component<any, Store> {
  constructor(props) {
    super(props);
    this.state = {
      todos: {},
      filter: 'all'
    };
  }
  render() {
    const { filter, todos } = this.state;
    return (
      <Stack horizontalAlign="center">
        <Stack style={{ width: 400 }} gap={25}>
          <TodoHeader addTodo={this._addTodo} setFilter={this._setFilter} filter={filter} />
          <TodoList complete={this._complete} todos={todos} filter={filter} remove={this._remove} edit={this._edit} />
          <TodoFooter clear={this._clear} todos={todos} />
        </Stack>
      </Stack>
    );
  }
  private _addTodo = label => {
    const { todos } = this.state;
    const id = index++;

    this.setState({
      todos: { ...todos, [id]: { label, completed: false } }
    });
  };

  private _complete = id => {
    const { todos } = this.state;
    const todo = todos[id];
    const newTodos = { ...todos, [id]: { ...todo, completed: !todo.completed } };

    this.setState({
      todos: newTodos
    });
  };

  private _clear = () => {
    const { todos } = this.state;
    const newTodos = {};

    Object.keys(this.state.todos).forEach(id => {
      if (!todos[id].completed) {
        newTodos[id] = todos[id];
      }
    });

    this.setState({
      todos: newTodos
    });
  };

  private _setFilter = filter => {
    this.setState({
      filter: filter
    });
  };

  private _remove = id => {
    const newTodos = { ...this.state.todos };
    delete newTodos[id];

    this.setState({
      todos: newTodos
    });
  };

  private _edit = (id, label) => {
    const newTodos = { ...this.state.todos };
    newTodos[id] = { ...newTodos[id], label };

    this.setState({
      todos: newTodos
    });
  };
}
