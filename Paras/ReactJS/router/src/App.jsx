import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from './components/User'


function App() {
  const allRouter = createBrowserRouter([
    {
      path:"/",
      element :<> <Navbar/> <Home/></>
    },
    {
      path:"/about",
      element: 
        <>
        <Navbar/>
        <About />
        </>
    },
    {
      path:"/login",
      element:<> <Navbar/> <Login/></>
    },
    {
      path:"/contact-us",
      element:<> <Navbar/> <Contact/></>
    },
    {
      path:"/user/:username",
      element:<> <Navbar/> <User/></>
    }
  ])

  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={allRouter} />
    </>
  )
}

export default App
