// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

   

function App() {
  const [mode,setMode]=useState('light');
  const darkMode = ()=>{
    if(mode=="light"){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }
  return (
    <div className="App">
      <Navbar title="TextUtils" mode={mode} darkMode={darkMode} />
      <Textform title="Enter the text to analyze belowe" />
    </div>
  );
}

export default App;
