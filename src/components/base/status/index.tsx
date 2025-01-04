import cn from '@/libs/utils/cn';
import React from 'react';

export const StatusKey = [
	'COMPLETE',
	'DRAW PUBLISHED',
	'ENTRY CLOSED',
	'ENTRY OPEN',
	'LIVE',
	'ON HOLD',
	'SCHEDULED',
] as const;
interface Props {
	status:
		| 'SCHEDULED'
		| 'ENTRY OPEN'
		| 'ENTRY CLOSED'
		| 'DRAW PUBLISHED'
		| 'LIVE'
		| 'ON HOLD'
		| 'COMPLETE';
}
const Status: React.FC<React.ComponentProps<'button'> & Props> = ({
	status: statusKey,
	className,
	style,
	...rest
}) => {
	const { status } = resources;
	return (
		<button
			{...rest}
			style={{
				...style,
				backgroundColor: status[statusKey].color,
			}}
			className={cn(
				'text-white px-[10px] py-[5px] rounded-[20px] text-[11px] flex items-center justify-center text-center font-semibold font-inter',
				className,
			)}>
			{status[statusKey].label}
		</button>
	);
};
const resources = {
	status: {
		SCHEDULED: {
			color: '#3A487B',
			label: 'Scheduled',
		},
		'ENTRY OPEN': {
			color: '#FAAC2E',
			label: 'Entry Open',
		},
		'ENTRY CLOSED': {
			color: '#7B413A',
			label: 'Entry Closed',
		},
		'DRAW PUBLISHED': {
			color: '#2C2C2C',
			label: 'Draw Published',
		},
		LIVE: {
			color: '#FA462E',
			label: 'Live',
		},
		'ON HOLD': {
			color: '#7B413A',
			label: 'On Hold',
		},
		COMPLETE: {
			color: '#3A7B3A',
			label: 'Complete',
		},
	} as Record<
		string,
		{
			color: string;
			label: string;
		}
	>,
};

export default Status;
