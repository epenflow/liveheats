/* eslint-disable import/no-anonymous-default-export */
'use client';
import gsap, { useGSAP } from '@/config/gsap';
import React from 'react';
export interface Props {
	scope: React.RefObject<HTMLDivElement | null>;
}
export default function <T extends object>(Component: React.ComponentType<T & Props>) {
	return function HOC(props: T) {
		const scope = React.useRef<HTMLDivElement | null>(null);

		// Scroll
		useGSAP(
			() => {
				const step = scope.current!.querySelector('[data-step]');
				const timeline = gsap.timeline({
					scrollTrigger: {
						trigger: scope.current,
						endTrigger: scope.current?.parentElement,
						start: 'clamp(top center)',
						end: 'clamp(bottom center)',
						scrub: 1.5,
						markers: process.env.NODE_ENV !== 'production' ? true : false,
					},
				});
				timeline.to(step, {
					ease: 'sine.inOut',
					rotateX: 0,
					keyframes: {
						yPercent: [0, -50, 50],
					},
				});
			},

			{ scope },
		);
		// Reveal
		useGSAP(
			() => {
				gsap.timeline()
					.to(scope.current, {
						opacity: 1,
					})
					.from('img', {
						yPercent: -100,
						rotateX: 0,
						autoAlpha: 0,
						ease: 'sine.inOut',
					});
			},
			{ scope },
		);
		return <Component {...{ ...props, scope }} />;
	};
}
