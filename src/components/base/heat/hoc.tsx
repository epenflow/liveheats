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

				gsap.to(step, {
					ease: 'sine.inOut',
					rotateX: 0,
					keyframes: {
						yPercent: [0, -50],
					},
					scrollTrigger: {
						trigger: scope.current,
						endTrigger: scope.current?.parentElement,
						start: 'clamp(top center)',
						end: 'clamp(bottom center)',
						scrub: 1.5,
						pin: scope.current?.parentElement,
						pinType: 'transform',
					},
				});
			},

			{ scope },
		);
		// Reveal
		useGSAP(
			() => {
				const step = scope.current!.querySelector('[data-step]');
				gsap.to(scope.current, {
					opacity: 1,
				});
			},
			{ scope },
		);

		useGSAP(
			() => {
				const heatButton = scope.current!.querySelector('.heat-button');
				const buttonHover = scope.current!.querySelector('.button-hover');
				const buttons = heatButton!.querySelectorAll('button');

				gsap.set(buttonHover, {
					left: buttons[1].offsetLeft,
				});

				buttons.forEach((button, index) => {
					button.addEventListener('mouseenter', () => {
						gsap.to(buttonHover, {
							left: button.offsetLeft,
							borderTopLeftRadius: index % 2 === 0 ? 10 : 0,
							borderBottomLeftRadius: index % 2 === 0 ? 10 : 0,
							borderTopRightRadius: index % 2 === 0 ? 0 : 10,
							borderBottomRightRadius: index % 2 === 0 ? 0 : 10,
							ease: 'sine.inOut',
						});
					});
					button.addEventListener('mouseleave', () => {
						gsap.to(buttonHover, {
							left: buttons[1].offsetLeft,
							borderTopLeftRadius: 0,
							borderBottomLeftRadius: 0,
							borderTopRightRadius: 10,
							borderBottomRightRadius: 10,
							ease: 'sine.inOut',
						});
					});
				});
			},
			{ scope },
		);

		return <Component {...{ ...props, scope }} />;
	};
}
