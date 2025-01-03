'use client';
import flags from '@/libs/flags';
import cn from '@/libs/utils/cn';
import dynamic from 'next/dynamic';
import type React from 'react';
import './base.css';
import hoc, { type Props } from './hoc';

const Hero: React.FC<Props> = ({ scope }) => {
	const { TextReveal, Heat } = resources;
	return (
		<section
			ref={scope}
			className={cn('hero-container', flags['border'] && 'border border-red-500')}>
			<div className={cn('hero-content', flags['border'] && 'border border-green-500')}>
				<div className="text-content heading">
					<TextReveal type="char">Manage Sports Events</TextReveal>
					<TextReveal
						type="char"
						direction="top">
						Like Never Before
					</TextReveal>
				</div>
				<div className="text-content paragraph">
					<TextReveal>
						Real-time scoring, instant analytics, and professional broadcast overlays
					</TextReveal>
					<TextReveal>for action sports competitions.</TextReveal>
				</div>
			</div>
			<Heat />
		</section>
	);
};

const resources = {
	TextReveal: dynamic(() => import('@/components/base/animations/text-reveal')),
	Heat: dynamic(() => import('@/components/base/heat')),
};
export default hoc(Hero);
