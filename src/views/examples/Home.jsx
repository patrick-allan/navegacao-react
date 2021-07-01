import React, { useState, useEffect } from 'react'
import Menu from '../../components/layout/Menu'
import { Card, Button } from 'react-bootstrap'
import AlunoService from '../../services/aluno'


const Home = props => {
    const [aluno, setAluno] = useState([]);    
    const [searchAluno, setSeachAluno] = useState({cd_matricula: "", ds_nome: ""})

    const handleAlunos = async (param) => {
        console.log('handleAlunos')
        try {
            const aluno = await AlunoService.buscarAluno(136597);            
            setSeachAluno(JSON.stringify(aluno.data))                                  
        } catch(error) {
            console.log(error)
        }
    }

    async function fetchAluno(){
        console.log('é chamada quando a pagina é carregada')
    }

    useEffect(() => {
        fetchAluno();
    }, []);

    return (
        <React.Fragment>
            <Menu />
            <Card className="mx-auto" style={{ maxWidth: '1200px' }}>
                <Card.Header as="h5">Início</Card.Header>
                <Card.Body className="text-center">
                    <Button onClick={handleAlunos}>Pesquisar</Button>
                    <Card.Text>
                        {aluno}
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted text-right">2 days ago</Card.Footer>
            </Card>
        </React.Fragment>
    )
}

export default Home