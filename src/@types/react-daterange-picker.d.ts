declare module '@wojtekmaj/react-daterange-picker' {
	interface Props {
		onChange: React.Dispatch<React.SetStateAction<Date[]>>;
		value: Date[];
		calendarIcon?: null | React.ReactElement;
		clearIcon?: null | 'Clear';
		className?: string;
		format?: string;
	}

	export default class DateRangePicker extends React.Component<Props, any> {}
}
