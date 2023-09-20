import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function NewTodo(props) {
  const [todoText, setTodoText] = useState('Create a new todo');
  function changeTodoHandler(event) {
    setTodoText(event.target.value);
    props.description = event.target.value;
  }
  return (
    <>
      <form>
        <input name="new" type="text" placeholder="Create a new todo" />
        <button
          type="button"
          className="btn btn-info"
          onClick={changeTodoHandler}
        >
          Add
        </button>
      </form>
    </>
  );
}

export default NewTodo;
