// Dependencies
import React, { Suspense } from 'react';
import { FormattedMessage } from 'react-intl';
import { Box } from "@mui/material";

const getTimeSegments = (time) => {
	if (time < 0) {
		return {};
	}

	const daysInSeconds = 24 * 3600 * 1000;
	const hoursInSeconds = 1000 * 3600;
	const minutesInSeconds = 1000 * 60;

	const days = Math.floor(time / daysInSeconds);
	const hours = Math.floor((time % daysInSeconds) / hoursInSeconds);
	const minutes = Math.floor((time % hoursInSeconds) / minutesInSeconds);
	const seconds = Math.floor((time % minutesInSeconds) / 1000);

	return {
		days,
		hours,
		minutes,
		seconds
	};
}

const getTimeGap = (releaseDateStr) => {
	const countdownTime = new Date(releaseDateStr).getTime();
	const nowTime = new Date().getTime();

	return countdownTime - nowTime;
}

export default class Countdown extends React.PureComponent {
	constructor(props) {
		super(props);

		const { releaseDateStr } = props;

		let timeState =  {
			days: undefined,
			hours: undefined,
			minutes: undefined,
			seconds: undefined
		};

		const timeGap = getTimeGap(releaseDateStr);
		if (timeGap > 0) {
			timeState = getTimeSegments(timeGap);
		}

		this.state = timeState;
	}

	componentDidMount = () => {
		const { releaseDateStr } = this.props;
		const countdownTime = new Date(releaseDateStr).getTime();

		this.interval = setInterval(() => {
			const timeGap = getTimeGap(releaseDateStr);
			if (timeGap < 0) {
				clearInterval(this.interval);
			} else {
				this.setState({
					...getTimeSegments(timeGap)
				});
			}
		}, 900);
	}

	componentWillUnmount = () => {
		if (this.interval) {
			clearInterval(this.interval);
		}
	}

	render() {
		const { days = 0, hours = 0, minutes = 0, seconds = 0 } = this.state;

		const metrics = [
			{
				value: days,
				labelId: 'DAYS'
			},
			{
				value: hours,
				labelId: 'HOURS'
			},
			{
				value: minutes,
				labelId: 'MINUTES'
			},
			{
				value: seconds,
				labelId: 'SECONDS'
			}
		];

		return (
			<Box sx={{ minWidth: [null, null, '600px'], 'display': 'flex', 'flexDirection': ['column', 'row', 'row'], 'alignItems': 'center', 'fontSize':['70px', '100px']}}>
				{
					metrics.map(({
						value: metricValue,
						labelId
					}, idx) => <CountdownMetric key={idx} labelId={labelId} metric={metricValue} isLast={idx === metrics.length - 1} />)
				}
			</Box>
		);
	}
}

export class CountdownMetric extends React.PureComponent {
	render() {
		const { labelId, metric, isLast = false } = this.props;

		let metricStr = metric.toString();
		if (metric < 10) {
			metricStr = `0${metricStr}`;
		}

		return (
			<Box sx={{
				'display': 'flex',
				'flexDirection': 'column'
			}}>
				<Box component="span" sx={{ 'fontWeight': '800', 'minWidth': ['135px'] }}>
					<Suspense fallback={null}>
						<Box component="span" sx={{ 'display': 'flex', 'justifyContent': ['center', 'default', 'default'] }}>
							{ metric >= 0 ? metricStr : '-' }
							<Box component="span" sx={{'display': ['none', 'flex', 'flex']}}>
								{ isLast ? null : `:` }
							</Box>
						</Box>
					</Suspense>
				</Box>
				<Box component="span" sx={{
					'fontSize': '18px',
					'textAlign': 'center'
				}}>
					<FormattedMessage id={labelId} />
				</Box>
			</Box>
		);
	}
}