import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
`;

export const Content = styled.div`
	min-height: 50rem;
	padding: 5rem 2rem 2rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media only screen and (max-width: 400px) {
		padding: 5rem 1rem 2rem 1rem;
	}
	/* a0a0a0 */
`;
