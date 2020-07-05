import React from 'react';
import { Email } from '../../utils/utils';
import { ReactComponent as ClipIcon } from '../../assets/icon_clip.svg';
import { Wrapper } from './email-details.styles';

interface Props {
	email: Email | null;
}

const EmailDetails: React.FC<Props> = ({ email }) => {
	const { from, to, subject, body, hasFiles } = email!;

	return (
		<Wrapper>
			<span>
				<span className='title'>From:</span> {from}
			</span>
			<span>
				<span className='title'>To:</span> {to}
			</span>
			<span>
				<span className='title'>Subject: </span>
				{subject}
			</span>
			<span>
				<span className='title'>Body: </span>
				{body}
			</span>
			<div className='attachment'>
				{hasFiles && (
					<>
						<ClipIcon
							width='2rem'
							height='2rem'
							style={{ marginRight: '.5rem' }}
						/>
						Attachment
					</>
				)}
			</div>
		</Wrapper>
	);
};

export default EmailDetails;
