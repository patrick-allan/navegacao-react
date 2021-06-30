import React from 'react'
import { useParams } from 'react-router-dom'
import Menu from '../../components/layout/Menu'

const Param = props => {
    const { id } = useParams()
    return (
        <React.Fragment>
            <Menu/>
            <div className="Param">
                <h1>Parâmetros</h1>
                <h2>Valor: {id}</h2>
            </div>
        </React.Fragment>
    )
}

export default Param