import React from 'react';
import { TodoListItem } from './TodoListItem';
import { FilterTypes, Store } from '../store';
import { Stack } from 'office-ui-fabric-react';

interface TodoListProps {
  complete: (id: string) => void;
  remove: (id: string) => void;
  todos: Store['todos'];
  filter: FilterTypes;
  edit: (id: string, lavel: string) => void;
}

export const TodoList = (props: TodoListProps) => {
  const { filter, todos, complete, remove, edit } = props;
  const filteredTodos = Object.keys(todos).filter(id => {
    return filter === 'all' || (filter === 'completed' && todos[id].completed) || (filter === 'active' && !todos[id].completed);
  });

    return (
      <Stack gap={10}>
      {filteredTodos.map(id => (
        <TodoListItem key={id} id={id} todos={todos} complete={complete} remove={remove} edit={edit} />
      ))}
    </Stack>
    );
}
