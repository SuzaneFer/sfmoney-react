import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";
import { Container } from "./style";

export function Dashboard() {
	return (
		<Container>
			<Summary />
			<TransactionTable />
		</Container>
	);
}
