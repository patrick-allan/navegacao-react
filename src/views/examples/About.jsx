import React from 'react'
import Menu from '../../components/layout/Menu'

const About = props => {
    return(
        <React.Fragment>
            <Menu/>            
            <div className="About">
                <h1>Sobre</h1>
                <h2>O nosso sistema foi criado...</h2>
            </div>
        </React.Fragment>
    )
}

export default About