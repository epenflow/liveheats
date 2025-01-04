import flags from '@/libs/flags';
import cn from '@/libs/utils/cn';
import React from 'react';
import './base.css';
import hoc, { type Props } from './hoc';

const Heat: React.FC<Props> = ({ scope }) => {
	const { ranking } = resources;
	return (
		<div
			ref={scope}
			className={cn(flags['border'] && 'border border-white', 'heat-container')}>
			<div
				data-step
				className="heat">
				<div>Back</div>
				<div className="heat-session">
					<p>Final : Heat 1</p>
					<button>Live</button>
				</div>
				<div className="heat-button">
					<button data-button>Heat</button>
					<button data-button>Leaderboard</button>
					<div className="button-hover" />
				</div>
				<div className="heat-ranking">
					<div>
						<p>Rank</p>
						<p>Athlete</p>
					</div>
					<p>Total</p>
				</div>
				<div className="ranking-outer">
					{ranking.map(({ no, avatar, difference, name, point }) => (
						<div
							key={no}
							className="ranking-inner">
							<div className="ranking-details">
								<p>{no}</p>
								<div className="ranking-info">
									<div className="ranking-avatar" />
									<p>{name}</p>
								</div>
							</div>
							<div className="ranking-points">
								<p>{point}</p>
								<p className="ranking-difference">{difference}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
const resources = {
	ranking: [
		{
			no: 1,
			avatar: 'path/to/joe_han_avatar.jpg',
			name: 'Joe Han',
			point: '6.50',
			difference: 'Won by 1.27',
		},
		{
			no: 2,
			avatar: 'path/to/kenan_cocket_avatar.jpg',
			name: 'Kenan Cocket',
			point: '5.23',
			difference: 'Needed 6.51',
		},
		{
			no: 3,
			avatar: 'path/to/matteus_santos_avatar.jpg',
			name: 'Matteus Santos',
			point: '5.16',
			difference: 'Needed 6.51',
		},
		{
			no: 4,
			avatar: 'path/to/dylan_field_avatar.jpg',
			name: 'Dylan Field',
			point: '4.30',
			difference: 'Needed 6.51',
		},
		{
			no: 5,
			avatar: 'path/to/jamie_scott_avatar.jpg',
			name: 'Jamie Scott',
			point: '4.10',
			difference: 'Needed 6.51',
		},
	] satisfies Array<{
		no: number;
		avatar: string;
		name: string;
		point: string;
		difference: string;
	}>,
};
export default hoc(Heat);
