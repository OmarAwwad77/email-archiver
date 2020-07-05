import styled from 'styled-components';
import {
	Row,
	From,
	To,
	Subject,
	Date,
} from '../../../styles/generic-components';

export { From, To, Subject, Date };

export const Wrapper = styled(Row)`
	background: #eeeeee73;
	border-bottom: 1px solid #eee;
	span {
		color: #6f6e6e;
		text-transform: capitalize;
	}

	@media only screen and (max-width: 670px) {
		justify-content: start;
		span {
			width: unset;
			min-width: unset;

			&:not(:last-child) {
				margin-right: 1rem;
			}
			&:not(:first-child)::before {
				content: '|';
				margin-right: 1rem;
			}
		}
	}
`;
