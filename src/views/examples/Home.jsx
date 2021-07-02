import React, { useState, useEffect } from 'react'
import Menu from '../../components/layout/Menu'
import { Card, Button, Form, FormControl, InputGroup, Container, Row, Col } from 'react-bootstrap'
import AlunoService from '../../services/aluno'
import './Home.css'


const Home = props => {
    const [aluno, setAluno] = useState(false);
    const [search, setSearch] = useState('');

    const handleAlunos = async (e) => {
        e.preventDefault()
        try {
            if (search !== '') {
                const aluno = await AlunoService.buscarAluno(search)
                if (aluno.data) {
                    setAluno(aluno.data)
                } else {
                    setAluno('')
                }
            } else {
                setAluno('')    
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function fetchAluno() {
        console.log('[fetchAluno] é chamada quando a pagina é carregada usando [useEffect]')
    }

    useEffect(() => {
        fetchAluno();
    }, []);

    return (
        <React.Fragment>
            <Menu />
            <Card className="mx-auto" style={{ maxWidth: '1200px' }}>
                <Card.Header>
                    <Form onSubmit={handleAlunos}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1"><b>Aluno</b></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="matricula..."
                                aria-describedby="button-pesquisa-aluno"
                                type="text"
                                name="search"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                            <Button className="btn-primary" id="button-pesquisa-aluno" type="submit">
                                Pesquisar
                            </Button>
                        </InputGroup>
                    </Form>
                </Card.Header>
                <Card.Body>
                    <Container>
                        {aluno ?
                            <Row>
                                <Col xs={12} md={2}>
                                    {aluno['ds_foto'] ? <img src={`data:image/jpeg;base64,${aluno['ds_foto']}`} alt="Foto do Aluno"></img> : ""}
                                </Col>
                                <Col className="info-aluno">
                                    <p><b>Código: </b>{aluno['cd_aluno']}</p>
                                    <p><b>Matrícula: </b>{aluno['cd_matricula']}</p>
                                    <p><b>Nome: </b>{aluno['ds_nome']}</p>
                                    <p><b>CPF: </b>{aluno['ds_cpf']}</p>
                                    <p><b>RG: </b>{aluno['ds_rg']}</p>
                                    <p><b>Data Nascimento: </b>{aluno['dt_nascimento']}</p>
                                </Col>
                            </Row>
                            : ""
                        }
                    </Container>
                </Card.Body>
                <Card.Footer className="text-muted text-center">.:: Pesquisa de Alunos ::.</Card.Footer>
            </Card>
        </React.Fragment>
    )
}
export default Home