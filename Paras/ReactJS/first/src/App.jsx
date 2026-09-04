import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
import Card2 from "./components/Card2"

function App() {
  return (
    <>
      <Navbar />
      {/* <div className="cards">
        <Card title="card 1"/>
        <Card title="card 2"/>
        <Card title="card 3"/>
        <Card title="card 4"/>
      </div> */}
      <div className="cards">
        <Card2 title="Card 1" des="Card 1 Description"/>
        <Card2 title="Card 2" des="Card 2 Description"/>
        <Card2 title="Card 3" des="Card 3 Description"/>
        <Card2 title="Card 4" des="Card 4 Description"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
