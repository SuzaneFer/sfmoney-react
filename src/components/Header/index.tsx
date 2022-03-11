import logoImg from "../../assets/logosu3.png";
import { Container, Contant } from "./styles";

interface HeaderPros {
	onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderPros) {
	return (
		<Container>
			<Contant>
				<img src={logoImg} alt="sf money" />

				<button type="button" onClick={onOpenNewTransactionModal}>
					Nova transação
				</button>
			</Contant>
		</Container>
	);
}
