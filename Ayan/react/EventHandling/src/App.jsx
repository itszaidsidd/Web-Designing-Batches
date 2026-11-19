import { useState } from 'react'
import './App.css'

function App() {
  // const [name, setName] = useState("Zaid")
  // const [phone, setPhone] = useState()
  const [form,setForm]=useState({email:"",phone:""})


  const handleClick=()=>{
    alert('clicked')
  }

  const abc=()=>{
    // alert('mouser over')
  }

  const handleChange=(e)=>{
    // setName(e.target.value)
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)

  }

  return (
   <div className='container'>
    <button onClick={handleClick}>Click </button>
    <div className="box" onMouseOver={abc}></div>
    {/* <input type="text" value={name} onChange={handleChange} /> */}
    <input type="email" name="email" value={form.email} onChange={handleChange} />
    <input type="number" name="phone" value={form.phone} onChange={handleChange}  />
    {/* <input type="phone" value={phone} onChange={()=>setPhone(event.target.value)}  /> */}
   </div>
  )
}

export default App
