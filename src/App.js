import './App.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Routes, Route, useNavigate, Outlet} from 'react-router-dom';
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import {createContext, useState} from "react";
import shoeData from "./data";
import Cart from "./pages/Cart";

function App() {
    let [shoes, setShoes] = useState(shoeData);
    let [pageNumber, setPageNumber] = useState(2)
    let navigate = useNavigate();

    return (
        <div className="App">
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Chanqun</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate('/cart')}>Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/"
                       element={<Main shoes={shoes} setShoes={setShoes} pageNumber={pageNumber}
                                      setPageNumber={setPageNumber}/>}/>
                <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<div>404 Not Found</div>}/>
            </Routes>
        </div>
    );
}

export default App;
