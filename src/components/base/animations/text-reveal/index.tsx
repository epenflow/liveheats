'use client';
import flags from '@/libs/flags';
import cn from '@/libs/utils/cn';
import { motion, type Variants } from 'motion/react';
import React from 'react';
type Direction = 'bottom' | 'top';
interface Props {
	type?: 'char' | 'word';
	children?: string;
	direction?: Direction;
	duration?: number;
}
const TextReveal: React.FC<Props> = ({
	children,
	type = 'word',
	direction = 'bottom',
	duration = 0.5,
}) => {
	return (
		<div
			className={cn(
				'inline-block overflow-hidden',
				flags['border'] && 'border border-yellow-500',
			)}>
			{children?.split(type === 'char' ? '' : /(?=\s)|(?<=\s)/).map((char, key) => (
				<motion.span
					variants={variants}
					initial="initial"
					animate="animate"
					custom={{ direction, duration, key }}
					className="whitespace-pre inline-block leading-normal"
					key={key}>
					{char}
				</motion.span>
			))}
		</div>
	);
};

const variants: Variants = {
	initial: ({ direction }: { direction: Direction }) => ({
		y: direction === 'bottom' ? '100%' : '-100%',
	}),
	animate: ({ duration, key }: { duration: number; key: number }) => ({
		y: 0,
		transition: { delay: 0.1 * key, ease: [0.33, 1, 0.68, 1], duration },
	}),
};

export default TextReveal;
