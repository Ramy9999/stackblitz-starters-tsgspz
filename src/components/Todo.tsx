import { useState } from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.css';
// import NewTodo from './newTodo';

function Todo(props) {
  const [todoVisible, setTodoVisible] = useState(true);
  function completeTodoHandler() {
    setTodoVisible(false);
  }
  return (
    <>
      {todoVisible && [
        <p>
          {props.title}
          <button type="button" className="btn btn-success">
            {props.status}
          </button>
        </p>,
      ]}
    </>
  );
}

export default Todo;
