import { useState } from "react";

function Todo() {
  const [todoList,setTodoList]=useState([])
  const [status,setStatus]=useState(false);
  const saveTodoList=(event)=>{
    const todo=event.target.todo.value;
    if(!todoList.includes(todo)){
      const finalTodoList=[...todoList,todo];
      setTodoList(finalTodoList);
    }else{
      alert('ToDo name allready exists....')
    }
    event.target.reset();
    event.preventDefault();
  }
  const deleteRow=(index)=>{
    const finalData=todoList.filter((v,i)=>i!=index)
    setTodoList(finalData)
  }
  
  return (
    <>
      <h1>ToDo List</h1>
      <form onSubmit={saveTodoList}>
        <input type="text" name="todo" />
        <button>Save</button>
      </form>
      <ul>
        {
          todoList.map((value,index)=>{
            return(
              <li key={index} className={status?"completeTodo":""} onClick={()=>setStatus(!status)}>{index+1} {value} <span onClick={()=>{deleteRow(index)}}>&times;</span></li>
            )
          })
        }
      </ul>
    </>
  )
}

export default Todo

