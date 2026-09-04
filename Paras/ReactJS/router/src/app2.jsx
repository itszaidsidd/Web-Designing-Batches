import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'
import User from './components/User'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This is where child routes will render */}
    </>
  );
}

function App() {
  const allRouter = createBrowserRouter([
    {
      path:"/",
      element :<Layout/>,
      children:[
        { path: "", element: <Home /> }, // Matches "/"
        { path: "about", element: <About /> },
        { path: "login", element: <Login /> },
        { path: "contact-us", element: <Contact /> },
        { path: "user/:username", element: <User /> }
      ]
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
