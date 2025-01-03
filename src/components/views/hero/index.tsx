'use client';
import flags from '@/libs/flags';
import cn from '@/libs/utils/cn';
import dynamic from 'next/dynamic';
import type React from 'react';
import './base.css';
import hoc, { type Props } from './hoc';

const Hero: React.FC<Props> = ({ scope }) => {
	const { Heat, SplitText } = resources;
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
			<div className="box-gradient" />
		</section>
	);
};

const resources = {
	Heat: dynamic(() => import('@/components/base/heat')),
	SplitText: dynamic(() => import('@/components/base/split-text')),
};
export default hoc(Hero);
