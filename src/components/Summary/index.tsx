import { Container } from "./styles";
import incomeImg from  '../../assets/income.svg';
import outcomeImg from  '../../assets/outcome.svg';
import totalcomeImg from  '../../assets/total.svg';

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$ 1000</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>-R$ 500</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalcomeImg} alt="Total" />
                </header>
                <strong>R$ 500</strong>
            </div>
        </Container>
    )
}