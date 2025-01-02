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
			className="hero-container">
			<div className="hero-content">
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
				<div className="flex items-center justify-center gap-5">
					<div className="font-inter rounded-[20px] p-px bg-gradient-to-b from-grey-200 to-[#666666] overflow-clip">
						<button className="text-sm bg-grey-200 font-semibold m-[0.25px] rounded-full px-[10px] py-[5px]">
							Get Started
						</button>
					</div>
					<div className="font-inter rounded-[20px] p-px bg-gradient-to-b from-grey-200 to-[#666666] overflow-clip">
						<button className="text-sm bg-grey-200 font-semibold m-[0.25px] rounded-full px-[10px] py-[5px]">
							Watch Video
						</button>
					</div>
				</div>
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
			{/* <div className="gradient-box" /> */}
		</React.Fragment>
	),
	Heat: dynamic(() => import('@/components/base/heat')),
};
export default hoc(Hero);
