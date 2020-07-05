import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem 2rem;
	min-height: 30vh;
	min-width: 30vw;

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

	.attachment {
		display: flex;
		align-items: center;
	}
`;
