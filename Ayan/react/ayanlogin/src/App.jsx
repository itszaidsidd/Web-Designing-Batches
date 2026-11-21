import { useState } from 'react'
import Swal from "sweetalert2"
import './App.css'

function App() {
  const [user,setUser]=useState("")
  const [pass,setPass]=useState("")


  const handleSubmit=()=>{
    // alert(user+" "+pass)
    if(user=='golomolu' && pass=="456"){
      // alert('successfully login')
      Swal.fire({
        title: "Welcome on snapchat ",
        icon: "success",
        confirmButtonText: 'Cool',
        draggable: true 
      })
    }else{
      // alert("invalid username or password")
      Swal.fire({
        icon: 'error',
        title: 'failed',
        text: 'sahi password dal le bhai.',
        confirmButtonText: 'Retry'
      });
    }

    event.preventDefault();
  }
  return (
    <>
      <div className="login">
        <form onSubmit={handleSubmit}>
          {user}
          <h1>Login page </h1>
          <h3>
          Enter user name
          </h3>
           <br />
          <input type="text" value={user} onChange={()=>setUser(event.target.value)}/>
          <h3>Enter password </h3> <br />
          <input type="password" value={pass} onChange={()=>setPass(event.target.value)} /> <br />
          <button>Login</button>
        </form>
      </div>
    </>
  )
}

export default App
