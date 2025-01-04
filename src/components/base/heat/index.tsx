import flags from '@/libs/flags';
import cn from '@/libs/utils/cn';
import React from 'react';
import { LuChevronLeft } from 'react-icons/lu';
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
				<div className="heat-back-button">
					<LuChevronLeft />
					<p>Back</p>
				</div>
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
									<div
										style={{
											backgroundImage: `url(${avatar})`,
										}}
										className="ranking-avatar"
									/>
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
			avatar: 'https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			name: 'Joe Han',
			point: '6.50',
			difference: 'Won by 1.27',
		},
		{
			no: 2,
			avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			name: 'Kenan Cocket',
			point: '5.23',
			difference: 'Needed 6.51',
		},
		{
			no: 3,
			avatar: 'https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			name: 'Matteus Santos',
			point: '5.16',
			difference: 'Needed 6.51',
		},
		{
			no: 4,
			avatar: 'https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			name: 'Dylan Field',
			point: '4.30',
			difference: 'Needed 6.51',
		},
		{
			no: 5,
			avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
