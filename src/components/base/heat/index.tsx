'use client';

import Image from 'next/image';
import type React from 'react';
import hoc, { type Props } from './hoc';

const Heat: React.FC<Props> = ({ scope }) => {
	return (
		<div
			ref={scope}
			className="[perspective:100vh] z-10 relative">
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
