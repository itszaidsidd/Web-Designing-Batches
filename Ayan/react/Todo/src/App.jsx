import { useState } from 'react'
import './App.css'

function App() {
  const [todo,setTodo]=useState()
  const [todos,setTodos]=useState([])
  
  const addTodo=()=>{
    if(todo){
      if(todos.includes(todo))
      {
        alert('Already Exist')
      }
      else{
        setTodos([...todos,todo])
        setTodo("")
      }
    }
  }

  return (
    <div className='container'>
      <div className="todo">
        <div className="form">
          <input type="text" 
          // className={!todo && "err-border"} value={todo} 
          onChange={()=>{setTodo(event.target.value)}}  />
          <button onClick={addTodo}>Add</button>
        </div>
        <div className="todos">
          <ul>
            {
              todos.map((v)=>{
                return(
                  <li>{v} <span>&times;</span></li>

                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
