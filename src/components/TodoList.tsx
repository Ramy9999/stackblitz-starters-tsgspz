import Todo from './Todo';
import { useState } from 'react';

function TodoList(props) {
  const [todoVisible, setTodoVisible] = useState(true);
  function completeTodoHandler() {}
  return (
    <>
      <h1>Todo List</h1>
      <Todo key={Math.random} title="new React note " status="Complete" />
    </>
  );
}

export default TodoList;
