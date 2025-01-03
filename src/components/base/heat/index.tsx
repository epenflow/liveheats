'use client';

import flags from '@/libs/flags';
import cn from '@/libs/utils/cn';
import Image from 'next/image';
import type React from 'react';
import hoc, { type Props } from './hoc';

const Heat: React.FC<Props> = ({ scope }) => {
	return (
		<div
			ref={scope}
			className={cn(
				'[perspective:100vh] bg-gradient-to-t from-black via-black to-transparent z-10 relative -translate-y-1/2',
				flags['border'] && 'border border-white',
			)}>
			<Image
				data-step
				src={'/Heat.svg'}
				alt="heat"
				width={0}
				height={0}
				sizes="100vh"
				className="w-auto [transform:rotateX(45deg)] h-[458px] object-contain"
			/>
		</div>
	);
};
export default hoc(Heat);
