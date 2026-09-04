import React, { useState, useEffect } from "react"; import "bootstrap/dist/css/bootstrap.min.css"; import { Container, Navbar, Nav, Row, Col, Card, Button, ProgressBar, Form } from "react-bootstrap"; import { motion } from "framer-motion";

export default function Portfolio() { const [dark, setDark] = useState(true); const [text, setText] = useState("");

const roles = ["Software Engineer", "Java Developer", "Web Developer"]; let index = 0;

useEffect(() => { let i = 0; const interval = setInterval(() => { setText(roles[index].slice(0, i++)); if (i > roles[index].length) { i = 0; index = (index + 1) % roles.length; } }, 150); return () => clearInterval(interval); }, []);

return ( <div style={{ background: dark ? "#0f172a" : "#f8f9fa", color: dark ? "white" : "black" }}> <Navbar bg={dark ? "dark" : "light"} variant={dark ? "dark" : "light"} expand="lg" fixed="top"> <Container> <Navbar.Brand>Mohd Zaid</Navbar.Brand> <Nav className="ms-auto"> <Nav.Link href="#home">Home</Nav.Link> <Nav.Link href="#about">About</Nav.Link> <Nav.Link href="#skills">Skills</Nav.Link> <Nav.Link href="#projects">Projects</Nav.Link> <Nav.Link href="#contact">Contact</Nav.Link> <Button size="sm" onClick={() => setDark(!dark)}>Toggle</Button> </Nav> </Container> </Navbar>

<Container id="home" className="text-center" style={{ paddingTop: "100px" }}>
    <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      Hi, I'm Zaid 👋
    </motion.h1>
    <h3>{text}</h3>
    <img src="/profile.jpg" alt="profile" className="rounded-circle mt-3" style={{ width: "150px", height: "150px" }} />
  </Container>

  <Container id="about" className="mt-5 text-center">
    <h2>About Me</h2>
    <p>I am a passionate developer skilled in Java, Web Development, and SQL.</p>
  </Container>

  <Container id="skills" className="mt-5">
    <h2 className="text-center">Skills</h2>
    <Row>
      <Col md={6}>
        <p>Java</p>
        <ProgressBar now={80} />
        <p className="mt-2">Web Development</p>
        <ProgressBar now={85} />
      </Col>
      <Col md={6}>
        <p>SQL</p>
        <ProgressBar now={75} />
        <p className="mt-2">React</p>
        <ProgressBar now={70} />
      </Col>
    </Row>
  </Container>

  <Container className="text-center mt-5">
    <h2>GitHub Stats</h2>
    <img src="https://github-readme-stats.vercel.app/api?username=itszaidsidd&show_icons=true&theme=dark" alt="stats" />
  </Container>

  <Container id="projects" className="mt-5">
    <h2 className="text-center mb-4">Projects</h2>
    <Row>
      <Col md={6}>
        <Card bg="dark" text="light" className="mb-3">
          <Card.Body>
            <Card.Title>Online Book Store</Card.Title>
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/XRSQHkzrQGQ" allowFullScreen></iframe>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card bg="dark" text="light" className="mb-3">
          <Card.Body>
            <Card.Title>Knowledge Zone</Card.Title>
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/sR-3QKoKs2k" allowFullScreen></iframe>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>

  <Container id="contact" className="text-center mt-5">
    <h2>Contact Me</h2>
    <Form>
      <Form.Control type="text" placeholder="Name" className="mb-2" />
      <Form.Control type="email" placeholder="Email" className="mb-2" />
      <Form.Control as="textarea" rows={3} placeholder="Message" className="mb-2" />
      <Button>Send</Button>
    </Form>
    <Button className="mt-3" href="/resume.pdf" download>Download Resume</Button>
  </Container>

  <footer className="text-center mt-5 p-3">
    © {new Date().getFullYear()} Mohd Zaid
  </footer>
</div>

); }