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
				const currentScroll = 50;
				let isScrolling: boolean;
				const marquee = scope.current!.querySelector('[data-marquee]');
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
						let direction = self.direction;
						gsap.to(tween, {
							timeScale: self.direction === -1 ? 1 : -1,
							overwrite: true,
						});
						console.log(self.direction);
					},
				});

				console.log({ marquee, firstChild, cloneNode });
			},

			{ scope },
		);
		return <Component {...{ ...props, scope }} />;
	};
}
