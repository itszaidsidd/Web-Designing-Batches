import { useState } from "react";

function Todo() {
  const [todoList, setTodoList] = useState([]);

  const saveTodoList = (event) => {
    event.preventDefault();
    const todoText = event.target.todo.value.trim();
    
    if (!todoText) return;

    // Check if text already exists
    const exists = todoList.some(item => item.text.toLowerCase() === todoText.toLowerCase());

    if (!exists) {
      const newTodo = { text: todoText, completed: false };
      setTodoList([...todoList, newTodo]);
      event.target.reset(); // Clears the input field
    } else {
      alert('ToDo name already exists....');
    }
  };

  const toggleStatus = (indexToToggle) => {
    const updatedList = todoList.map((item, index) => 
      index === indexToToggle ? { ...item, completed: !item.completed } : item
    );
    setTodoList(updatedList);
  };

  const deleteRow = (indexToDelete) => {
    const finalData = todoList.filter((_, index) => index !== indexToDelete);
    setTodoList(finalData);
  };

  return (
    <>
      <h1>ToDo List</h1>
      <form onSubmit={saveTodoList}>
        <input type="text" name="todo" required />
        <button type="submit">Save</button>
      </form>
      
      <ul>
        {todoList.map((item, index) => (
          <li 
            key={index}
            className={item.completed ? "completeTodo" : ""} 
            onClick={() => toggleStatus(index)}
            style={{ cursor: 'pointer' }}
          >
            {index + 1}. {item.text} 
            <span 
              onClick={(e) => {
                e.stopPropagation(); // Prevents triggering toggleStatus
                deleteRow(index);
              }}
              style={{ marginLeft: '10px', color: 'red', fontWeight: 'bold' }}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
