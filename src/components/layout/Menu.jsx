import './Menu.css'
import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Navbar, Nav, Form, Button, NavDropdown, Alert } from 'react-bootstrap'
import UsersService from '../../services/user'

const Menu = (props) => {
    const [redirectToLogin, setRedirectToLogin] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await UsersService.logout();
            setRedirectToLogin(true);
        } catch (error) {
            setError(true)
        }
    }

    if (redirectToLogin)
        return <Redirect to={{ pathname: "/login" }} />

    return (
        <React.Fragment>
            <Navbar className="Menu" bg="dark" variant="dark">
                <div className="mx-auto" style={{ display: 'flex', width: '1200px' }}>
                    <Nav>
                        <Link to="/" className="navbar-brand">Roteamento</Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/home">Início</Nav.Link>
                        <NavDropdown title="Parâmetros" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/param/123">Exemplo 01</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/param/Patrick">Exemplo 02</NavDropdown.Item>
                        </NavDropdown>                        
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about">Sobre</Nav.Link>
                    </Nav>
                    <Form inline onSubmit={handleSubmit}>
                        <Button type="submit" variant="outline-danger">Sair</Button>
                    </Form>
                </div>
            </Navbar>
            {error && <Alert color="danger">Dados Incorretos. {error}  </Alert>}
        </React.Fragment>
    )
}

export default Menu