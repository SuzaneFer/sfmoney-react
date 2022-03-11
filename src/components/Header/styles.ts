import styled from "styled-components";

export const Container = styled.header`
	background: var(--violet);
`;

export const Contant = styled.div`
	max-width: 1120px;
	margin: 0 auto;

	padding: 2rem 1rem 12rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	button {
		font-size: 1rem;
		color: #fff;
		background: var(--violet-light);
		border: 0;
		padding: 0 2rem;
		border-radius: 0.25rem;
		height: 3rem;

		//toda vez o filter for alterado fazer uma transição de 0.2 segundos.
		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.9);
		}
	}
`;
