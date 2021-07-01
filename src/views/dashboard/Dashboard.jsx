import React from 'react'
import Menu from '../../components/layout/Menu'
import { Card } from 'react-bootstrap'


const Dashboard = () => {
    return (
        <React.Fragment>
            <Menu />
            <Card className="mx-auto" style={{ maxWidth: '1200px' }}>
                <Card.Header as="h5">Roteamento</Card.Header>
                <Card.Body className="text-center">                    
                    <Card.Text>
                        Exemplo de roteameno ReactJS
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted text-right">2 days ago</Card.Footer>
            </Card>
        </React.Fragment>
    )
}

export default Dashboard