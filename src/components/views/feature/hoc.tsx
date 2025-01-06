/* eslint-disable import/no-anonymous-default-export */
'use client';
import gsap, { ScrollTrigger, useGSAP } from '@/config/gsap';
import React from 'react';

export interface Props {
	scope: React.RefObject<HTMLElement | null>;
}
/* eslint-disable react/display-name */
export default function <T extends object>(Component: React.ComponentType<T & Props>) {
	return function (props: T) {
		const scope = React.useRef<HTMLElement>(null);

		useGSAP(
			() => {
				const overview: HTMLElement[] = gsap.utils.toArray('.features-overview--inner');

				const overviewTween = gsap.to(overview, {
					clipPath: (index: number) =>
						index % 2 === 0 ? 'inset(100% 0% 0% 0%)' : 'none',
					ease: 'sine.inOut',
					stagger: {
						each: 1,
						amount: 1,
						// from: 'edges',
					},
				});

				ScrollTrigger.create({
					trigger: scope.current,
					endTrigger: '[data-stopper="0"]',
					start: 'top top',
					end: 'bottom',
					scrub: 1.5,
					pin: '.features-overview',
					animation: overviewTween,
					pinSpacing: false,
					// markers: true,
				});
			},
			{ scope },
		);

		// useGSAP(
		// 	() => {
		// 		const stepper: HTMLElement[] = gsap.utils.toArray('[data-stepper]');
		// 		const span: HTMLElement[] = gsap.utils.toArray('span');
		// 		gsap.to(stepper, {
		// 			clipPath: (index: number) =>
		// 				index % 2 === 0 ? 'inset(100% 0% 0% 0%)' : 'none',
		// 			scrollTrigger: {
		// 				trigger: scope.current,
		// 				start: 'top top',
		// 				end: 'bottom+=100%',
		// 				scrub: 1.5,
		// 				pin: true,
		// 				markers: true,
		// 			},
		// 			stagger: {
		// 				each: 1,
		// 				amount: 1,
		// 			},
		// 		});
		// 	},
		// 	{ scope },
		// );
		return <Component {...{ ...props, scope }} />;
	};
}
