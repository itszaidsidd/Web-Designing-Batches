import { useState } from 'react'
import Swal from 'sweetalert2'
import './App.css'

function App() {
    // const [user, setUser] = useState("")
    // const [pass, setPass] = useState("")

    // const handleSubmit = () => {
    //   if (user == 'ayan@test.com' && pass == 'admin') {
    //     // alert('Successfull login')
    //     Swal.fire({
    //       title: "Successfully Login",
    //       icon: "success",
    //       confirmButtonText: 'Cool',
    //       draggable: true 
    //     });
    //   } else {
    //     // alert('Invalid username or password')
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Login Failed',
    //       text: 'Invalid username or password. Please try again.',
    //       confirmButtonText: 'Retry'
    //     });
    //   }

    event.preventDefault();
  }

  return (
    <>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <input type="text" className={user ? "" : "err-border"} value={user} onChange={() => setUser(event.target.value)} placeholder='Enter your username' />
          {!user && <span className='err'>Please Enter username</span>}
          <input type="password" value={pass} onChange={() => setPass(event.target.value)} placeholder='Enter your password' />
          <button>Login</button>
        </form>

      </div>
    </>
  )
}

export default App
