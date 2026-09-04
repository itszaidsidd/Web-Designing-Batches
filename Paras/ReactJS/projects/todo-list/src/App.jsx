import { useState } from 'react';
import './App.css'

function App() {
  const [todos,setTodos]=useState([])

  const saveTodo = (event)=>{

    let todo=event.target.todo.value;
    todo=todo.charAt(0).toUpperCase() + todo.slice(1).toLowerCase()
    // const finalTodoList=[...todos,todo]
    // setTodos(finalTodoList)
    if(!todos.includes(todo)){
      setTodos([...todos,todo])
    }
    else{
      alert('Todo name already exist...')
    }
    event.target.reset();
    event.preventDefault();
  }


  return (
    <>
      <h1>ToDo App</h1>
      <form onSubmit={saveTodo}>
        <input type="text" name="todo" />
        <button>Save</button>
      </form>
      <ul>
        {
          todos.map((value,index)=>{
            return(
              <TodoListItems key={index} value={value} index={index} todos={todos} setTodos={setTodos}/>
            )
          })
        }
        <li style={{fontWeight:'bold',background:'darkblue'}}>You have {todos.length} pending task <span onClick={()=>setTodos([])}>Clear All</span></li>
      </ul>
    </>
  )
}

export default App

function TodoListItems({value,index,todos,setTodos}){
  const [status,setStatus]=useState(false)

  const deleteRow=()=>{
    let finalData=todos.filter((v,i)=>i!=index)
    setTodos(finalData)
  }

  return(
    <li className={status?'completeTodo':''} >
      <input type="checkbox" onClick={()=>setStatus(!status)}/>
      {value} <span onClick={deleteRow}>&times;</span></li>

  )
}
