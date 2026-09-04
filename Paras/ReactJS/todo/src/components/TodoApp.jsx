import { useState } from "react";

function TodoApp() {
  const [todoList,setTodoList]=useState([])
  const saveTodoList=(event)=>{

    const todo=event.target.todo.value;
    if(!todoList.includes(todo)){
      const finalTodoList=[...todoList,todo];
      setTodoList(finalTodoList);
    }else{
      alert('ToDo name allready exists....')
    }

    event.preventDefault();
  }
  
  let list=todoList.map((value,index)=>{
    return(
      <TodoListItems value={value} key={index} indexNumber={index} todoList={todoList} setTodoList={setTodoList}/>
    )
  })

  return (
    <>
      <h1>ToDo List</h1>
      <form onSubmit={saveTodoList}>
        <input type="text" name="todo" />
        <button>Save</button>
      </form>
      <ul>
        {list}
      </ul>
    </>
  )
}

export default TodoApp

function TodoListItems({value,indexNumber,todoList,setTodoList}){
  const [status,setStatus]=useState(false);

  const deleteRow=()=>{
    const finalData=todoList.filter((v,i)=>i!=indexNumber)
    setTodoList(finalData)
  }

  const checkStatus=()=>{
    setStatus(!status)
  }

  return(
    <li className={status?"completeTodo":""} onClick={checkStatus}>{indexNumber+1} {value} <span onClick={deleteRow}>&times;</span></li>
  )

}
