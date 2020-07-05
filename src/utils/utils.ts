import faker from 'faker';

export interface Email {
	id: string;
	from: string;
	to: string;
	subject: string;
	body: string;
	hasFiles: boolean;
	conversations: number; // back-and-forth emails
	date: Date;
}

// returns fake email within a date range.

export const getFakeEmails = (
	num: number,
	recent: number,
	startDate: Date,
	endDate: Date
) => {
	const emails: Email[] = [];

	// 5 recent emails
	for (let i = 0; i < recent; i++) {
		emails.push({
			id: faker.random.uuid(),
			from: faker.internet.email(),
			to: faker.internet.email(),
			subject: faker.lorem.sentence(),
			body: faker.lorem.paragraph(),
			hasFiles: getRandomNum(10) > 7, // 30% chance of having a file
			conversations: withConversation() ? getRandomNum(3) : 0, // (0 to 3) back-and-forth emails
			date: i !== 0 ? faker.date.recent(recent) : new Date(),
		});
	}
	for (let i = 0; i < num - recent; i++) {
		emails.push({
			id: faker.random.uuid(),
			from: faker.internet.email(),
			to: faker.internet.email(),
			subject: faker.lorem.sentence(),
			body: faker.lorem.paragraph(),
			hasFiles: getRandomNum(10) > 7, // 30% chance of having a file
			conversations: withConversation() ? getRandomNum(3) : 0, // (0 to 3) back-and-forth emails
			date: faker.date.between(startDate, endDate),
		});
	}

	return emails;
};

// 50% percent chance
const withConversation = () => Math.round(Math.random());

// get random number between (0 - max)
const getRandomNum = (max: number) => Math.floor(Math.random() * max);

//
export const getFormattedDate = (d: Date) => {
	let month = '' + (d.getMonth() + 1);
	let day = '' + d.getDate();
	const year = d.getFullYear();
	const currentDay = new Date().getDate();
	const currentMonth = new Date().getMonth() + 1;
	const currentYear = new Date().getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	if (
		// if it's today
		currentDay === Number(day) &&
		currentMonth === Number(month) &&
		currentYear === Number(year)
	) {
		return `${
			(d.getHours() + '').length < 2 ? '0' + d.getHours() : d.getHours()
		}:${
			(d.getMinutes() + '').length < 2 ? '0' + d.getMinutes() : d.getMinutes()
		}`;
	} else if (currentYear === Number(year)) {
		// if it's within the current year
		const [, stringMonth] = d.toDateString().split(' ');
		return `${stringMonth} ${day}`;
	}

	return [year, month, day].join('/'); // if none of the above just return this
};
