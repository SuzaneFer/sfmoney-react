import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){
    useEffect(() => {
        api.get('transactions')
        .then(data => console.log(data))
    }, []);
    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Desenvolvimento de Website
                        </td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>
                            Aluguel
                        </td>
                        <td className="withdraw">-R$1.300</td>
                        <td>Casa</td>
                        <td>07/03/2022</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>
                            Desenvolvimento de Website
                        </td>
                        <td>R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}