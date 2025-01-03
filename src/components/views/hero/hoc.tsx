'use client';
import gsap, { useGSAP } from '@/config/gsap';
import React from 'react';
export interface Props {
	scope: React.RefObject<HTMLElement | null>;
}

export default function <T extends object>(Component: React.ComponentType<T & Props>) {
	return function (props: T) {
		const scope = React.useRef<HTMLElement>(null);

		useGSAP(
			() => {
				const timeline = gsap.timeline({
					scrollTrigger: {
						trigger: scope.current,
						start: 'top',
						end: 'bottom',
						scrub: 1.5,
					},
				});
				timeline.to('.hero-content', {
					ease: 'sine.inOut',
					yPercent: 100,
					scale: 0.75,
				});
			},
			{ scope },
		);

		return <Component {...{ ...props, scope }} />;
	};
}
