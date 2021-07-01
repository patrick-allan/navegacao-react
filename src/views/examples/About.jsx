import React from 'react'
import Menu from '../../components/layout/Menu'
import { Card } from 'react-bootstrap'

const About = props => {
    return(
        <React.Fragment>
            <Menu/>            
            <Card className="mx-auto" style={{ maxWidth: '1200px' }}>
                <Card.Header as="h5">
                    Sobre
                </Card.Header>
                <Card.Body>                    
                    <Card.Title>
                        The standard Lorem Ipsum passage, used since the 1500s
                    </Card.Title>
                    <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted text-right">
                    Patrick Allan - Roteamento
                </Card.Footer>
            </Card>
        </React.Fragment>
    )
}

export default About