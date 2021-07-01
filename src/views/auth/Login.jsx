import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
import { Navbar, Alert } from 'react-bootstrap'
import UsersService from '../../services/user';
import './Login.css'

const LoginView = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirectToHome, setRedirectToHome] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await UsersService.login({email: email, password: password});
            setRedirectToHome(true);       
        } catch (error) {            
            setError(true)
        }
    }

    if (redirectToHome)
        return <Redirect to={{pathname: "/"}} />

    return(
        <div className="Login">
            <div className="outer">
                <div className="inner">
                    <form onSubmit={handleSubmit}>
                        <h3>Roteamento App</h3>

                        <div className="form-group">
                            <label>Usuário</label>
                            <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Insira seu usuário" />
                        </div>

                        <div className="form-group">
                            <label>Senha</label>
                            <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Insira sua senha" />
                        </div>
                        <button type="submit" className="btn btn-dark btn-lg btn-block">Entrar</button>
                        {error && <Alert color="danger">Dados Incorretos. {error}  </Alert>}
                    </form>
                </div>
            </div>
            <Navbar className="text-end" fixed="bottom">.:: Patrick Allan ::.</Navbar>
        </div>
    )
}

export default LoginView