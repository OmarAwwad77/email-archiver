import React, { useContext } from 'react';
import OrderContext from '../../../contexts/order-context';
import { ReactComponent as UpArrowIcon } from '../../../assets/icon_arrow01.svg';

import { Date, Wrapper, Subject, From, To } from './headet.styles';

const Header = () => {
	const { orderBy, setOrderBy } = useContext(OrderContext);

	return (
		<Wrapper>
			<From bold={orderBy === 'from'} header onClick={() => setOrderBy('from')}>
				From
				{orderBy === 'from' && (
					<UpArrowIcon
						width='1rem'
						height='1rem'
						style={{ margin: '0 auto 0 .7rem' }}
					/>
				)}
			</From>
			<To bold={orderBy === 'to'} header onClick={() => setOrderBy('to')}>
				To
				{orderBy === 'to' && (
					<UpArrowIcon
						width='1rem'
						height='1rem'
						style={{ margin: '0 auto 0 .7rem' }}
					/>
				)}
			</To>
			<Subject
				bold={orderBy === 'subject'}
				header
				onClick={() => setOrderBy('subject')}
			>
				Subject
				{orderBy === 'subject' && (
					<UpArrowIcon
						width='1rem'
						height='1rem'
						style={{ margin: '0 auto 0 .7rem' }}
					/>
				)}
			</Subject>
			<Date bold={orderBy === 'date'} header onClick={() => setOrderBy('date')}>
				Date
				{orderBy === 'date' && (
					<UpArrowIcon
						width='1rem'
						height='1rem'
						style={{ margin: '0 auto 0 .7rem' }}
					/>
				)}
			</Date>
		</Wrapper>
	);
};

export default Header;
