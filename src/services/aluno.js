import Api from './api'

const AlunoService = {
    buscarAluno: (params) => Api.get(`/alunos/${params}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    }),                    
}

export default AlunoService;