import React from 'react'
import Menu from '../../components/layout/Menu'

const Home = props => {
    return (
        <React.Fragment>
            <Menu/>
            <div className="Home">                
                <h1>Início</h1>
                <h2>Bem vindo!</h2>
            </div>
        </React.Fragment>
    )
}

export default Home