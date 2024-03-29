import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useTransactions } from "../../hooks/useTransactions";

import { Container, RadioBox, TransactionTypeContainer } from "./styles";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({
	isOpen,
	onRequestClose,
}: NewTransactionModalProps) {
	const { createTransaction } = useTransactions();

	const [type, setType] = useState("deposit");

	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState(0);
	const [category, setCategory] = useState("");

	async function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault();

		await createTransaction({
			title,
			type,
			category,
			amount,
		});

		onRequestClose();
		setTitle("");
		setAmount(0);
		setCategory("");
		setType("deposit");
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<button
				type="button"
				onClick={onRequestClose}
				className="react-modal-close"
			>
				<img src={closeImg} alt="Fechar modal." />
			</button>
			<Container onSubmit={handleCreateNewTransaction}>
				<h2>Cadastrar Transação</h2>

				<input
					type="text"
					placeholder="Título"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
					data-cy='titulo-transacao'
				/>
				<input
					type="number"
					placeholder="Valor"
					value={amount}
					onChange={(event) => setAmount(Number(event.target.value))}
					data-cy='valor-transacao'
				/>

				<TransactionTypeContainer>
					<RadioBox
						type="button"
						onClick={() => {
							setType("deposit");
						}}
						isActive={type === "deposit"}
						activeColor="green"
						data-cy='button-entrada'
					>
						<img src={incomeImg} alt="Entrada" />
						<span>Entrada</span>
						
					</RadioBox>
					<RadioBox
						type="button"
						onClick={() => {
							setType("withdraw");
						}}
						isActive={type === "withdraw"}
						activeColor="red"
						data-cy='button-saida'
					>
						<img src={outcomeImg} alt="Saída" />
						<span>Saída</span>
					</RadioBox>
				</TransactionTypeContainer>

				<input
					type="text"
					placeholder="Categoria"
					value={category}
					onChange={(event) => setCategory(event.target.value)}
					data-cy='categoria-transacao'
				/>

				<button type="submit" data-cy='cadastrar-transacao'>Cadastrar</button>
			</Container>
		</Modal>
	);
}
