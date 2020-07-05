import React, { MouseEventHandler, useContext } from 'react';
import OrderContext from '../../../contexts/order-context';
import {
	Wrapper,
	From,
	To,
	Subject,
	Date,
	Truncate,
	ConversationCount,
} from './row.styles';
import { ReactComponent as ClipSvg } from '../../../assets/icon_clip.svg';
import { Email, getFormattedDate } from '../../../utils/utils';

interface Props {
	email: Email;
	setClickedEmail: MouseEventHandler;
}

const Row: React.FC<Props> = ({
	email: { from, to, subject, date, conversations, hasFiles },
	setClickedEmail,
}) => {
	const { orderBy } = useContext(OrderContext);

	return (
		<Wrapper email onClick={setClickedEmail}>
			<From bold={orderBy === 'from'}>
				<Truncate text={from} />
			</From>

			<To bold={orderBy === 'to'}>
				<Truncate text={to} />
				{conversations !== 0 && (
					<ConversationCount>+{conversations}</ConversationCount>
				)}
			</To>
			<Subject bold={orderBy === 'subject'}>
				<Truncate text={subject} />
				{hasFiles && <ClipSvg width='1.8rem' height='1.8rem' />}
			</Subject>
			<Date bold={orderBy === 'date'}>{getFormattedDate(date)}</Date>
		</Wrapper>
	);
};

export default Row;
