import React, { useState, useEffect, useCallback } from 'react';
import Layout from './components/layout/layout';
import Search from './components/search/search';
import OrderContext, { OrderBy } from './contexts/order-context';
import Results from './components/results/results';
import { getFakeEmails } from './utils/utils';

// Date range within which fake emails will be created use "getFakeEmails" function.
// these dates also are used to initialize the "Search" component
const startDate = new Date('2019-5-1');
const endDate = new Date('2020-7-4');

// number of fake emails to be created
const emailCount = 10;
const recentEmailCount = 3;
// generates fake emails using faker.js
const allEmails = getFakeEmails(
	emailCount,
	recentEmailCount,
	startDate,
	endDate
);

function App() {
	const [orderBy, setOrderBy] = useState<OrderBy>('from');
	const [dateRange, setDateRange] = useState([startDate, endDate]);
	const [emails, setEmails] = useState(allEmails);

	useEffect(() => {
		const [newStartDate, newEndDate] = dateRange;
		const newEmails = allEmails.filter(
			(email) => email.date >= newStartDate && email.date <= newEndDate
		);
		setEmails(sortEmails(newEmails));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dateRange]);

	useEffect(() => {
		setEmails(sortEmails(emails));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [orderBy]);

	const sortEmails = useCallback(
		(emails: typeof allEmails) => {
			const newArr = [...emails]; // create new Array so that we don't mutate the state
			newArr.sort((a, b) => {
				switch (orderBy) {
					case 'date':
						return b.date.getTime() - a.date.getTime();
					case 'from':
						return a.from.toLowerCase() < b.from.toLowerCase() ? -1 : 1;
					case 'to':
						return a.to.toLowerCase() < b.to.toLowerCase() ? -1 : 1;
					case 'subject':
						return a.subject.toLowerCase() < b.subject.toLowerCase() ? -1 : 1;

					default:
						return 0;
				}
			});
			return newArr;
		},
		[orderBy]
	);

	return (
		<Layout>
			<Search value={dateRange} onChange={setDateRange} />
			<OrderContext.Provider value={{ orderBy, setOrderBy }}>
				<Results emails={emails} />
			</OrderContext.Provider>
		</Layout>
	);
}

export default App;
