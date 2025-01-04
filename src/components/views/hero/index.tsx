'use client';
import Status, { StatusKey } from '@/components/base/status';
import flags from '@/libs/flags';
import cn from '@/libs/utils/cn';
import dynamic from 'next/dynamic';
import type React from 'react';
import './base.css';
import hoc, { type Props } from './hoc';

const Hero: React.FC<Props> = ({ scope }) => {
	const { Heat, SplitText, status } = resources;
	return (
		<section
			ref={scope}
			className={cn('hero-container', flags['border'] && 'border border-red-500')}>
			<div className={cn('hero-content', flags['border'] && 'border border-green-500')}>
				<div className="text-content heading">
					<SplitText type="char">Manage Sports Events</SplitText>
					<SplitText type="char">Like Never Before</SplitText>
				</div>
				<div className="text-content paragraph">
					<SplitText type="char">
						Real-time scoring, instant analytics, and professional broadcast overlays
					</SplitText>
					<SplitText type="char">for action sports competitions.</SplitText>
				</div>
				<div className={cn('button-content', flags['border'] && 'border border-red-500')}>
					<button className="button">Get Started</button>
					<button className="button">Watch Video</button>
				</div>
			</div>
			<Heat />
			{StatusKey.map((key) => (
				<Status
					suppressHydrationWarning
					key={key}
					status={key}
					data-parallax
					style={{
						left: status[key].left,
						top: status[key].top,
						position: 'absolute',
						zIndex: '-10',
					}}
				/>
			))}

			<div className="box-gradient" />
		</section>
	);
};

const getRandomPosition = () => `${Math.floor(Math.random() * 101)}%`;

const resources = {
	Heat: dynamic(() => import('@/components/base/heat')),
	SplitText: dynamic(() => import('@/components/base/split-text')),
	status: {
		COMPLETE: {
			left: '0%',
			top: '100%',
		},
		'DRAW PUBLISHED': {
			left: '10%',
			top: '90%',
		},
		'ENTRY CLOSED': {
			left: '15%',
			top: '100%',
		},
		'ENTRY OPEN': {
			left: '75%',
			top: '90%',
		},
		LIVE: {
			left: '90%',
			top: '100%',
		},
		'ON HOLD': {
			left: '80%',
			top: '80%',
		},
		SCHEDULED: {
			left: '95%',
			top: '95%',
		},
	} as Record<
		string,
		{
			left?: number | string;
			top?: number | string;
		}
	>,
};
export default hoc(Hero);
