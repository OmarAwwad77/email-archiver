import styled from 'styled-components';
import {
	Row as GenericRow,
	From,
	To,
	Subject,
	Date,
	Truncate,
	ConversationCount,
} from '../../../styles/generic-components';

export { From, To, Date, Truncate, ConversationCount, Subject };

export const Wrapper = styled(GenericRow)`
	position: relative;
	padding: 1rem;
	@media only screen and (max-width: 670px) {
		border-bottom: 1px solid #ccc;
		flex-direction: column;

		& > * {
			width: unset;
			min-width: unset;
		}

		& .truncate {
			width: 80%;
		}
	}
`;
