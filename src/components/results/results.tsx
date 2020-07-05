import React, { useState } from 'react';
import Header from './header/header';
import Row from './row/row';
import WithModel from '../../hoc/with-model/with-model';
import EmailDetails from '../email-details/email-details';
import logoPng from '../../assets/logo.png';
import { Email } from '../../utils/utils';
import { Count, Divider, Wrapper, LogoWrapper } from './results.styles';

interface Props {
	emails: Email[];
}

const Results: React.FC<Props> = ({ emails }) => {
	const [clickedEmail, setClickedEmail] = useState<Email | null>(null);

	return (
		<Wrapper>
			<WithModel
				backDropOnClick={() => setClickedEmail(null)}
				show={!!clickedEmail}
			>
				<EmailDetails email={clickedEmail} />
			</WithModel>
			<Count>
				Results <span>{emails.length}</span> email(s)
			</Count>
			<Divider />

			<Header />
			{emails.map((email) => (
				<Row
					key={email.id}
					setClickedEmail={() => setClickedEmail(email)}
					email={email}
				/>
			))}
			{emails.length === 0 && (
				<LogoWrapper>
					<img src={logoPng} alt='Logo' />
				</LogoWrapper>
			)}
		</Wrapper>
	);
};

export default Results;
