import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter/counterSlice';
import Navbar from './components/Navbar';

function App() {
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch();

  return (
    <>
      <Navbar/>
      <div className='count'>
        <button onClick={()=>dispatch(decrement())}>-</button>
        Currently count is {count}
        <button onClick={()=>dispatch(increment())}>+</button>
      </div>
    </>
  )
}

export default App
