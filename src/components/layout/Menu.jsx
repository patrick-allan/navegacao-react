import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

const Menu = props => (
    <Navbar className="Menu">
        <Nav className="mr-auto">
            <Nav.Link>
                <Link to="/">Início</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/param/123">Param #01</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/param/Patrick">Param #02</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/about">Sobre</Link>
                </Nav.Link>
            <Nav.Link>
                <Link to="/notfound">Não Existe</Link>
            </Nav.Link>
            
            {/* <ul>
                <li>
                    <Link to="/">Início</Link>                    
                </li>
                <li>
                    <Link to="/param/123">Param #01</Link>
                </li>
                <li>
                    <Link to="/param/Patrick">Param #02</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/notfound">Não Existe</Link>
                </li>
            </ul>    */}
        </Nav>
    </Navbar>
)

export default Menu