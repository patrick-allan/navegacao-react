import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = props => (
    <div className="NotFound">
        <h1>404</h1>
        <h2>Ops... ocorreu um erro!</h2>
        <Link to="/">Início</Link>
    </div>
)

export default NotFound