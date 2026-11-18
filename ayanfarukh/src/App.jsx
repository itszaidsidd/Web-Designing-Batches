import { useState } from 'react'
import './App.css'

function App() {
  const [ayan, lubna] = useState([])

  const saveTodo=()=>{
    const t=event.target.todo.value;
    if(t){
      if(!ayan.includes(t)){
        lubna([...ayan,t])
        event.target.todo.value=""
      }
      else{
        alert('ToDo name already exist')
      }
      
    }
    event.preventDefault();
  }

  const deleteTodo=(i)=>{
    const finalTodo=ayan.filter((_,index)=>index!=i)
    lubna(finalTodo)
  }
  
  return (
    <div className='body'>
     <div className="todo">
      <form onSubmit={saveTodo}>
        <input type="text" name="todo"  required/>
        <button type='submit'>Add</button>
      </form>
        <ul>
          {
            ayan.map((a,i)=>{
              return(
                <li>{i+1} {a} <span onClick={()=>deleteTodo(i)}>&times;</span></li>
              )
            })
          }
        </ul>
     </div>
    </div>
  )
}

export default App
