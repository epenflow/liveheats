import flags from '@/libs/flags';
import cn from '@/libs/utils/cn';
import type React from 'react';

interface Props {
	type?: 'word' | 'char';
	children?: string;
}
const SplitText: React.FC<Props> = ({ type = 'word', children }) => {
	return (
		<div
			className={cn(
				'inline-block overflow-hidden',
				flags['border'] && 'border border-fuchsia-500',
			)}>
			{children?.split(type === 'char' ? '' : /(?=\s)|(?<=\s)/).map((splitter, key) => (
				<span
					key={key}
					className="whitespace-pre inline-block leading-normal">
					{splitter}
				</span>
			))}
		</div>
	);
};
export default SplitText;
