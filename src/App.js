import './App.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Routes, Route, useNavigate, Outlet} from 'react-router-dom';
import Detail from "./pages/Detail";
import Main from "./pages/Main";

function App() {
    let navigate = useNavigate();

    return (
        <div className="App">
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Chanqun</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate('/detail')}>Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/detail" element={<Detail/>}/>
                <Route path="*" element={<div>404 Not Found</div>}/>
            </Routes>
        </div>
    );
}

export default App;
