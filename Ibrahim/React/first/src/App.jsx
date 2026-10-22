import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="This is Card 1" />
        <Card title="This is card 2" />
        <Card title="this is card 3" />

      </div>
      <Footer />
    </>
  )
}

export default App
