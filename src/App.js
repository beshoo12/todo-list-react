import { useState, useRef } from 'react';
import './App.css';

function App() {
  const[todos, setTodos] = useState([]);
  const inputRef = useRef()
  const handleAddTodo = () => {
    const text = inputRef.current.value;
    const newItem = {completed: false, text};
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);    

  };

 
  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };


  return (
    <div className="App">
      <h1>Welcome to My First React.js project</h1>
      <h3>My name is Beshoy Kameal a Web Developer </h3>
      <h2>ToDo_List project</h2>

      <div className="to-do-list-container">
      <ul type='i'>
      {todos.map(({text,completed}, index)=>{
        return <div className="item">
          <li  className={completed ? "done":""} key={index} onClick={() =>handleItemDone(index)}>{text}</li>;
          <span className="cursur" onClick={() => handleDeleteItem(index)}>X</span>
        </div>
      })}
      </ul>
     <input ref={inputRef} placeholder="Enter your tasks: "/>
     <button onClick={handleAddTodo}>Add ToDo_List</button>
      </div>
      

    </div>
  );
}

export default App;
