import './App.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Routes, Route} from 'react-router-dom'
import Detail from "./component/Detail";
import Main from "./component/Main";

function App() {
    return (
        <div className="App">
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Chanqun</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/detail">Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/detail" element={<Detail/>}/>
            </Routes>
        </div>
    );
}



export default App;
