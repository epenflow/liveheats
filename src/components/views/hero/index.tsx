import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import './base.css';

const Hero: React.FC = () => {
	const { content, Gradient, Heat } = resources;
	return (
		<section className="hero-container border border-white">
			<div className="hero-content translate-y-full">
				<h1 className="content-heading">
					{Object.entries(content.heading).map(([id, Element]) => (
						<Element key={id} />
					))}
				</h1>
				<p className="content-text">
					{Object.entries(content.text).map(([id, Element]) => (
						<Element key={id} />
					))}
				</p>
			</div>
			<Gradient />
			<Heat />
		</section>
	);
};
const resources = {
	content: {
		heading: [
			() => <span>Manage&nbsp;</span>,
			() => <span className="font-vt-323 font-normal">Sports Events&nbsp;</span>,
			() => <br />,
			() => <span>Like&nbsp;</span>,
			() => <span className="font-mr-dafoe font-normal">, Never&nbsp;</span>,
			() => <span>Before</span>,
		],
		text: [
			() => (
				<span>
					Real-time scoring, instant analytics, and professional broadcast overlays
				</span>
			),
			() => <br />,
			() => <span>for action sports competitions.</span>,
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
			<div className="gradient-box" />
		</React.Fragment>
	),
	Heat: dynamic(() => import('@/components/base/heat')),
};
export default Hero;
