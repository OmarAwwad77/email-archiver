import styled from 'styled-components';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid #c5bebe;
	border-radius: 5px;
`;

export const StyledDatePicker = styled(DateRangePicker)`
	font-size: 1.5rem;
	div.react-daterange-picker__wrapper {
		display: flex;
		border: none;
		padding: 0.5rem 1rem;
		padding-left: 0;

		& > * {
			order: 2;
		}
	}
	div.react-daterange-picker__inputGroup {
		display: flex;
		justify-content: center;
		align-items: center;
		&:first-child {
			margin-left: 0.5rem;
		}
	}
	button.react-daterange-picker__calendar-button {
		order: 1;
	}
`;

export const IconWrapper = styled.div`
	background: #c5c5c5;
	align-self: stretch;
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
`;
