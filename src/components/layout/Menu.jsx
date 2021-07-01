import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, Button, NavDropdown } from 'react-bootstrap'

const Menu = (props) => {
    return (
        <Navbar className="Menu" bg="dark" variant="dark">
            <Nav>
                <Link to="/" className="navbar-brand">Roteamento</Link>
            </Nav>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/home">Início</Nav.Link>
                <NavDropdown title="Parâmetros" id="basic-nav-dropdown">                    
                    <NavDropdown.Item as={Link} to="/param/123">Exemplo 01</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/param/Patrick">Exemplo 02</NavDropdown.Item>                    
                </NavDropdown>
                <Nav.Link as={Link} to="/about">Sobre</Nav.Link>
            </Nav>
            <Form inline>
                <Button variant="outline-danger">Sair</Button>
            </Form>
        </Navbar>
    )
}

export default Menu