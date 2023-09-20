import { FC } from 'react';
import NewTodo from './components/newTodo';
import TodoList from './components/TodoList';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <>
      <h1>Hello {name}!</h1>
      {/* <button type="button" className="btn btn-success" >Complete</button> */}
      <NewTodo description="entering" />
      <TodoList todoDescription="seeko" />
    </>
  );
};
