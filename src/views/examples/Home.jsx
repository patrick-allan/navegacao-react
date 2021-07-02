import React, { useState, useEffect } from 'react'
import Menu from '../../components/layout/Menu'
import { Card, Button } from 'react-bootstrap'
import AlunoService from '../../services/aluno'


const Home = props => {        
    const [aluno, setAluno] = useState(false);        

    const handleAlunos = async (param) => {
        console.log('handleAlunos')
        try {
            const aluno = await AlunoService.buscarAluno(136597)            
            setAluno(aluno.data)                      
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
                    <p>{aluno['cd_aluno']}</p>
                    <p>{aluno['cd_matricula']}</p>
                    <p>{aluno['ds_nome']}</p>
                    <p>{aluno['ds_cpf']}</p>
                    <p>{aluno['ds_rg']}</p>
                    <p>{aluno['dt_nascimento']}</p>
                    {/* <img src={`data:image/jpeg;base64,${aluno['ds_foto']}`} alt="Foto do Aluno"></img>                     */}
                    
                    {aluno['ds_foto'] ? <img src={`data:image/jpeg;base64,${aluno['ds_foto']}`} alt="Foto do Aluno"></img> : ""}
                    
                </Card.Body>
                <Card.Footer className="text-muted text-right">2 days ago</Card.Footer>
            </Card>
        </React.Fragment>
    )
}

export default Home