'use client';
import TextReveal from '@/components/base/animations/text-reveal';
import cn from '@/libs/utils/cn';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import './base.css';
import { type Props } from './hoc';

const Hero: React.FC<Props> = ({ scope }) => {
	const { content, Gradient, Heat } = resources;
	return (
		<section
			ref={scope}
			className={cn('hero-container')}>
			<div className="text-3xl font-bold font-lora text-center">
				<TextReveal text="Manage Sports Events" />
				<br />
				<TextReveal text="Like Never Before" />
			</div>
		</section>
	);
};
const resources = {
	content: {
		heading: [
			() => (
				<div className="line">
					<span data-heading>Manage&nbsp;</span>
				</div>
			),
			() => (
				<div className="line">
					<span
						data-heading
						className="font-vt-323 font-normal">
						Sports&nbsp;
					</span>
				</div>
			),
			() => (
				<div className="line">
					<span
						data-heading
						className="font-vt-323 font-normal">
						Events&nbsp;
					</span>
				</div>
			),
			() => <br />,
			() => (
				<div className="line">
					<span data-heading>Like</span>
				</div>
			),
			() => (
				<div className="line">
					<span
						data-heading
						className="font-mr-dafoe font-normal">
						&nbsp;&nbsp;Never&nbsp;
					</span>
				</div>
			),
			() => (
				<div className="line">
					<span data-heading>Before</span>
				</div>
			),
		],
		text: [
			() => (
				<span data-text>
					Real-time scoring, instant analytics, and professional broadcast overlays
				</span>
			),
			() => <br />,
			() => <span data-text>for action sports competitions.</span>,
		],
	},
	Gradient: () => (
		<React.Fragment>
			<div className="gradient-circle">
				<Image
					src={'/gradient.svg'}
					alt="gradient"
					width={0}
					height={0}
				/>
			</div>
			{/* <div className="gradient-box" /> */}
		</React.Fragment>
	),
	Heat: dynamic(() => import('@/components/base/heat')),
};
export default Hero;
