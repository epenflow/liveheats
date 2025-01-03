import flags from '@/libs/flags';
import cn from '@/libs/utils/cn';
import dynamic from 'next/dynamic';
import './base.css';

const Hero = () => {
	const { TextReveal } = resources;
	return (
		<section className={cn('hero-container', flags['border'] && 'border border-red-500')}>
			<div className={cn('hero-content', flags['border'] && 'border border-green-500')}>
				<div className="text-content heading">
					<TextReveal type="char">Manage Sports Events</TextReveal>
					<TextReveal
						type="char"
						direction="top">
						Like Never Before
					</TextReveal>
				</div>
				<div className="text-content paragraph">
					<TextReveal>
						Real-time scoring, instant analytics, and professional broadcast overlays
					</TextReveal>
					<TextReveal direction="top">for action sports competitions.</TextReveal>
				</div>
			</div>
		</section>
	);
};

const resources = {
	TextReveal: dynamic(() => import('@/components/base/animations/text-reveal')),
};
export default Hero;
