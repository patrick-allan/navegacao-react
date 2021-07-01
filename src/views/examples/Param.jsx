import React from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Menu from '../../components/layout/Menu'

const Param = props => {
    const { id } = useParams()
    return (
        <React.Fragment>
            <Menu />
            <Card className="mx-auto" style={{ maxWidth: '1200px' }}>
                <Card.Header as="h5">Parâmetros</Card.Header>
                <Card.Body className="text-center">
                    <Card.Text>
                        {id}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted text-right">2 days ago</Card.Footer>
            </Card>
        </React.Fragment>
    )
}

export default Param