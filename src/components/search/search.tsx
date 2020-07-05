import React, { Dispatch, SetStateAction } from 'react';
import { ReactComponent as CalenderIcon } from '../../assets/icon_calender.svg';
import { ReactComponent as SearchIcon } from '../../assets/icon_search.svg';
import { Wrapper, IconWrapper, StyledDatePicker } from './search.styles';

interface Props {
	value: Date[];
	onChange: Dispatch<SetStateAction<Date[]>>;
}

const Search: React.FC<Props> = ({ value, onChange }) => {
	return (
		<Wrapper>
			<StyledDatePicker
				className='date-picker'
				onChange={onChange}
				value={value}
				clearIcon={null}
				calendarIcon={<CalenderIcon width='2rem' height='2rem' />}
				format={'y/MM/dd'}
			/>
			<IconWrapper>
				<SearchIcon width='2rem' height='2rem' />
			</IconWrapper>
		</Wrapper>
	);
};

export default Search;
