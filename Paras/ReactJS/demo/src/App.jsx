import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"


function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="Card 1 Title" desc="Card 1"/>
        <Card title="Card 2 Title" desc="Card 2"/>
        <Card title="Card 3 Title" desc="Card 3"/>
        <Card title="Card 4 Title" desc="Card 4"/>

      </div>
      <Footer/>
    </>
  )
}

export default App
