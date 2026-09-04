import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("Zaid")
  const [form,setForm] = useState({email : "", phone : ""})

  const handleClick = ()=>{
    alert('Clicked')
  }

  const handleMouseOver = ()=>{
    alert("Mosue over")
  }

  const handleChange = (e)=>{
    // setName(e.target.value)
    // console.log(name)
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <div>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
      {/* <div className="red" onMouseOver={handleMouseOver}>
      </div> */}
      {/* <input type="text" value={name} onChange={handleChange} /> */}
      <input type="text" name="email" value={form.email} onChange={handleChange} />
      <input type="text" name="phone" value={form.phone} onChange={handleChange} />
    </div>
  )
}

export default App
