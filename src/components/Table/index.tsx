import { useState, useEffect } from "react";
import { Container } from "./styles"

import api from "../../services/api"

interface Position {
    id: string
    description: string
    cbo: string
    salary: number
    labor: string
    occupation: string
}

export function Table() {
    const [position, setPosition] = useState<Position[]>([])

    async function handleDelete(id: string) {
        await api.delete(`/position/${id}`)
        setPosition(position.filter(position => position.id !== id))
    }


    useEffect(() => {
        api.get('/position').then(response => setPosition(response.data))
    }, [position])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>CBO</th>
                        <th>Salário</th>
                        <th>Mão de Obra</th>
                        <th>Função Lider</th>
                        {/* <th colSpan={2}>Ações</th> */}
                    </tr>
                </thead>

                <tbody>
                    {position.map((position, index) =>
                        <tr key={index.toString()}>
                            <td>{position.description}</td>
                            <td>{position.cbo}</td>
                            <td>{position.salary}</td>
                            <td>{position.labor}</td>
                            <td>{position.occupation}</td>
                            <td><button onClick={() => handleDelete(position.id)}>                               
                                Deletar
                            </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Container>
    )
}

export default Table;