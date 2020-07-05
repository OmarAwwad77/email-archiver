import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem 2rem;
	min-height: 30vh;
	width: 70vw;
	max-width: 70rem;

	& > * {
		text-align: center;
		color: #8a8a8a;
		margin-top: 0.5rem;
	}

	& > *:last-child {
		margin-top: 1rem;
	}

	.title {
		color: black;
		font-weight: 700;
	}

	.body {
		border-top: 1px solid #ccc;
		padding-top: 1rem;
	}

	.attachment {
		display: flex;
		align-items: center;
	}

	@media only screen and (max-width: 600px) {
		width: 80vw;
	}
`;
