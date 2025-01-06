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
				const stepper: HTMLElement[] = gsap.utils.toArray('[data-stepper]');
				const span: HTMLElement[] = gsap.utils.toArray('span');
				gsap.to(stepper, {
					clipPath: (index: number) =>
						index % 2 === 0 ? 'inset(100% 0% 0% 0%)' : 'none',
					scrollTrigger: {
						trigger: scope.current,
						start: 'top top',
						end: 'bottom+=100%',
						scrub: 1.5,
						pin: true,
						markers: true,
					},
					stagger: {
						each: 1,
						amount: 1,
					},
				});
			},
			{ scope },
		);
		return <Component {...{ ...props, scope }} />;
	};
}
