/* eslint-disable import/no-anonymous-export-default */
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
				const marquee = scope.current!.querySelector('.marque');
				const firstChild = marquee!.firstChild;
				const cloneNode = firstChild!.cloneNode(true);

				marquee?.appendChild(cloneNode);

				const tween = gsap
					.to('.partnership-inner', {
						xPercent: -100,
						repeat: -1,
						duration: 5,
						ease: 'linear',
					})
					.totalProgress(0.5);

				ScrollTrigger.create({
					trigger: marquee,
					start: 'clamp(top center)',
					end: 'clamp(bottom center)',
					scrub: 1.5,
					onUpdate: (self) => {
						gsap.to(tween, {
							timeScale: self.direction === -1 ? 1 : -1,
							overwrite: true,
						});
					},
				});
			},
			{ scope },
		);

		useGSAP(
			() => {
				const headings: HTMLElement[] = gsap.utils.toArray(
					'.partnership-heading > div > span',
					scope.current,
				);
				gsap.from(headings, {
					yPercent: 100,
					stagger: {
						each: 0.5,
						amount: 0.5,
					},
					ease: 'sine',
					scrollTrigger: {
						trigger: headings,
						start: 'top center',
						end: 'bottom center',
						scrub: 1.5,
					},
				});
				console.log({ headings });
			},
			{ scope: scope },
		);
		return <Component {...{ ...props, scope }} />;
	};
}
