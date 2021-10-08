import { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  const TODOS_LS_KEY = 'REACTOR_TODO_LIST';

  const parseLs = () => {
    try {
      return JSON.parse(localStorage.getItem(TODOS_LS_KEY))
    }
    catch {
      return []
    }
  }

  useEffect(() => {
    setTodos(parseLs());
  }, [])

  useEffect(() => {
    localStorage.setItem(TODOS_LS_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name === '') {
      return
    }

    setTodos( prevTodos => {
      return [...prevTodos, {id: todos.length, name, complete: false}]
    })
    //setTodos([...todos, {id: todos.length, name, complete: false}]);
    todoNameRef.current.value = null;
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find( todo => todo.id === id);

    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add todo</button>
      <button>Clear completed todos</button>
      <div>{todos.filter(todo => !todo?.complete).length} left to do</div>
    </>
  );
}

export default App;
