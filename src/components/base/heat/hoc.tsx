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

		useGSAP(
			() => {
				const step = scope.current!.querySelector('[data-step]');
				const timeline = gsap.timeline({
					scrollTrigger: {
						trigger: scope.current,
						start: 'clamp(top center)',
						end: 'clamp(bottom center)',
						scrub: true,
						markers: process.env.NODE_ENV !== 'production' ? true : false,
					},
				});
				timeline.to(step, {
					ease: 'sine.inOut',
					rotateX: 0,
					keyframes: {
						yPercent: [0, -25, 50],
					},
				});
			},
			{ scope },
		);
		return <Component {...{ ...props, scope }} />;
	};
}
