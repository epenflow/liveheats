/* eslint-disable import/no-anonymous-default-export */
'use client';
import gsap, { useGSAP } from '@/config/gsap';
import React from 'react';
export interface Props {
	scope: React.RefObject<HTMLElement | null>;
}
export default function <T extends object>(Component: React.ComponentType<T & Props>) {
	return function HOC(props: T) {
		const scope = React.useRef<HTMLElement | null>(null);

		useGSAP(
			() => {
				const heading: HTMLSpanElement[] = gsap.utils.toArray('[data-heading]');
				const text: HTMLSpanElement[] = gsap.utils.toArray('[data-text]');

				gsap.to('.hero-content', {
					yPercent: 250,
					autoAlpha: 0.5,
					scale: 0.5,
					ease: 'sine.inOut',
					scrollTrigger: {
						trigger: scope.current,
						start: 'top top',
						end: 'bottom',
						scrub: 1.5,
						markers: process.env.NODE_ENV !== 'production' ? true : false,
					},
				});

				gsap.from(heading, 0.5, {
					yPercent: 100,
					skewX: 45,
					rotateX: 10,
					stagger: {
						each: 0.5,
						amount: 0.75,
						ease: 'circ.inOut',
					},
				});
				gsap.from(text, 0.5, {
					text: '',
					stagger: {
						each: 0.5,
						amount: 0.75,
						ease: 'sine.inOut',
					},
				});
			},
			{ scope },
		);
		return <Component {...{ ...props, scope }} />;
	};
}
