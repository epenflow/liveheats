'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import './base.css';
import hoc, { type Props } from './hoc';

const Hero: React.FC<Props> = ({ scope }) => {
	const { content, Gradient, Heat } = resources;
	return (
		<section
			ref={scope}
			className="hero-container border border-white">
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
			<div className="gradient-box" />
		</React.Fragment>
	),
	Heat: dynamic(() => import('@/components/base/heat')),
};
export default hoc(Hero);
