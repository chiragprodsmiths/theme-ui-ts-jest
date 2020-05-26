import React from 'react';
import { useQuery } from 'urql';
import { todosQuery } from 'queries/todos/todos';
import { TodoCollection, TodoEntity } from 'queries/todos/todos.types';

export type PropTypes = {};

/**
 * TODOS List via urql
 */

export const Todos: React.FC<PropTypes> = () => {
  const [{ fetching, data, error }] = useQuery<TodoCollection>({ query: todosQuery });

  if (fetching) return <p>Loading</p>;

  if (error) {
    return <p>{error.message}</p>;
  }

  const todos = data || [];

  return (
    <ul>
      {todos.map((todo: TodoEntity) => (
        <li key={String(todo.id)}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
