'use client';

import flags from '@/libs/flags';
import cn from '@/libs/utils/cn';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import type React from 'react';
import './base.css';
import hoc, { type Props } from './hoc';

const SplitText = dynamic(() => import('@/components/base/split-text'));

const Features: React.FC<Props> = ({ scope }) => {
	const { features } = resources;
	return (
		<section
			ref={scope}
			className={cn('features-container', flags['border'] && 'border border-blue-500')}>
			<div className="features-detail">
				{features.detail.map(({ heading, descriptions }, key) => (
					<div
						key={key}
						data-stopper={key}
						className="features-content">
						<div className="features-heading">{heading}</div>
						<div className="features-description">{descriptions}</div>
					</div>
				))}
			</div>
			<div className="features-overview">
				{features.overview.map(({ alt, src }, key) => (
					<div
						data-overview
						className="features-overview--inner"
						key={key}
						style={{
							zIndex: features.overview.length - key,
						}}>
						<Image
							src={src}
							alt={alt}
							width={0}
							height={0}
							sizes="100vh"
							className="features-image"
						/>
					</div>
				))}
			</div>
		</section>
	);
};
const resources = {
	features: {
		overview: [
			{
				alt: 'Ranking',
				src: './Ranking.svg',
			},
			{
				alt: 'Overview',
				src: './Membership.svg',
			},
		],
		detail: [
			{
				heading: (
					<>
						<SplitText type="char">Automated rankings -</SplitText>
						<br />
						<SplitText type="char">say goodbye to spreadsheets</SplitText>
					</>
				),
				descriptions: (
					<>
						<SplitText>Event results automatically drive your season</SplitText>
						<br />
						<SplitText>or tour rankings or ratings - with complete</SplitText>
						<br />
						<SplitText>flexibility to use your club or tour points system.</SplitText>
					</>
				),
			},
			{
				heading: (
					<>
						<SplitText>Registration & membership</SplitText>
						<br />
						<SplitText>that your athletes will love</SplitText>
					</>
				),
				descriptions: (
					<>
						<SplitText>Members and event entries flow directly</SplitText>
						<br />
						<SplitText>into your seed list. Experience powerful tools for</SplitText>
						<br />
						<SplitText>
							payments, waitlisting, discounts, and ability to sell extras.
						</SplitText>
					</>
				),
			},
		],
	} satisfies {
		overview: Array<{ alt: string; src: string }>;
		detail: Array<{ heading: React.ReactNode; descriptions: React.ReactNode }>;
	},
};
export default hoc(Features);
