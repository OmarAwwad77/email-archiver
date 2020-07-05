import React from 'react';
import styled, { css } from 'styled-components';

import TextTruncate from 'react-text-truncate';

interface Props {
	header?: boolean;
	bold?: boolean;
	email?: boolean;
}

export const Divider = styled.div`
	width: 100%;
	height: 2px;
	background: #eee;
`;

export const Row = styled.div<Props>`
	display: flex;
	padding: 1rem 2rem;

	& > *:not(:last-child) {
		margin-right: 2rem;
	}
	transition: all 0.2s ease-out;

	${(p) =>
		p.email &&
		css`
			cursor: pointer;
			&:hover,
			&:active {
				color: blue;
			}
		`}
`;

export const From = styled.span<Props>`
	width: 20%;
	min-width: 10rem;
	font-weight: ${(p) => (p.bold ? 700 : 400)};
	cursor: ${(p) => p.header && 'pointer'};

	.truncate {
		display: inline-block;
		width: 100%;
	}
`;

export const To = styled.span<Props>`
	width: 30%;
	min-width: 15rem;

	display: flex;
	align-items: center;
	justify-content: space-between;
	font-weight: ${(p) => (p.bold ? 700 : 400)};
	cursor: ${(p) => p.header && 'pointer'};

	.truncate {
		width: 85%;
	}
`;

export const Subject = styled.span<Props>`
	width: 45%;
	min-width: 20rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: ${(p) => p.header && 'pointer'};
	font-weight: ${(p) => (p.bold ? 700 : 400)};

	.truncate {
		width: 85%;
	}
`;

export const Date = styled.span<Props>`
	display: flex;
	align-items: center;
	font-size: 1.4rem;
	width: 5%;
	min-width: 8rem;
	cursor: ${(p) => p.header && 'pointer'};
	font-weight: ${(p) => (p.bold ? 700 : 400)};

	@media only screen and (max-width: 670px) {
		${(p) =>
			!p.header &&
			css`
				position: absolute;
				right: 0;
			`}
	}
`;

export const Truncate: React.FC<{ text: string }> = ({ text }) => (
	<TextTruncate
		line={1}
		containerClassName='truncate'
		element='span'
		truncateText='…'
		text={text}
	/>
);

export const ConversationCount = styled.div`
	background: #aba4a4;
	border-radius: 0.5rem;
	font-size: 1.3rem;
	padding: 0.1rem 0.3rem;
	width: 10%;
	min-width: 2rem;
	max-width: 3rem;
	height: 2rem;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`;
