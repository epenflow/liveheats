'use client';
import flags from '@/libs/flags';
import cn from '@/libs/utils/cn';
import Image from 'next/image';
import type React from 'react';
import './base.css';
import hoc, { type Props } from './hoc';

const Partnership: React.FC<Props> = ({ scope }) => {
	const { partnership } = resources;

	return (
		<section
			ref={scope}
			className={cn('partnership-container', flags['border'] && 'border border-yellow-500')}>
			<div
				data-marquee
				className="partnership-outer">
				<div className="partnership-inner">
					{partnership.map(({ alt, src }, key) => (
						<Image
							key={key}
							src={src}
							alt={alt}
							height={0}
							width={0}
							sizes="100vh"
							className="h-[100px] w-auto object-contain"
						/>
					))}
				</div>
			</div>
		</section>
	);
};
const resources = {
	partnership: [
		{
			src: '/A4L_logo_regular_BLUE 1.png',
			alt: 'Surf Life Saving',
		},
		{
			src: '/FWT20_Black_Logo_HD 1.png',
			alt: 'FREERIDE WORLD TOUR',
		},
		{
			src: '/7370789-logo 1.png',
			alt: 'USASA',
		},
		{
			src: '/snow sports new zealand_1 1.png',
			alt: 'Snow Sports New Zealand',
		},
		{
			src: '/Mask group.png',
			alt: 'ASC',
		},
		{
			src: '/Mask group-1.png',
			alt: 'Surfing Australia',
		},
		{
			src: '/International_Life_Saving_Federation_logo.svg 1.png',
			alt: 'International Life Saving Federation',
		},
		{
			src: '/6eZVzHrC_400x400 1.png',
			alt: 'RWT',
		},
	] satisfies Array<{
		src: string;
		alt: string;
	}>,
};
export default hoc(Partnership);
