import './App.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import {useEffect, useState} from "react";
import shoeData from "./data";
import Cart from "./pages/Cart";
import {useQuery} from "react-query";
import axios from "axios";

function App() {
    useEffect(() => {
        if (localStorage.getItem('watched')) {
            return
        }

        localStorage.setItem('watched', JSON.stringify([]))
    }, [])

    let [shoes, setShoes] = useState(shoeData);
    let [pageNumber, setPageNumber] = useState(2)
    let navigate = useNavigate();

    let result = useQuery('name', () =>
            axios.get('https://codingapple1.github.io/userdata.json')
                .then((a) => {
                    return a.data
                }),
        {staleTime: 2000}
    )

    return (
        <div className="App">
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Chanqun</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate('/cart')}>Cart</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <div>
                            {result.isLoading ? '로딩중' : result.data.name}
                        </div>
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
