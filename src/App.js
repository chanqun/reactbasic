import './App.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import {useState} from "react";
import shoeData from "./data";

function App() {
    let [shoes] = useState(shoeData);

    return (
        <div className="App">
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Chanqun</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className="main-bg"></div>

            <div className="container">
                <div className="row">
                    {
                        shoes.map((shoe) => {
                            return (
                                <Product shoe={shoe}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

function Product(props) {
    return (
        <div className="col-md-4" id={props.shoe.id}>
            <img src={props.shoe.img} width="80%"/>
            <h4>{props.shoe.title}</h4>
            <p>{props.shoe.content}</p>
            <p>{props.shoe.price}</p>
        </div>
    )
}


export default App;
