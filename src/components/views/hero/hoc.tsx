/* eslint-disable import/no-anonymous-default-export */
'use client';
import gsap, { useGSAP } from '@/config/gsap';
import React from 'react';
export interface Props {
	scope: React.RefObject<HTMLElement | null>;
}

/* eslint-disable react/display-name */
export default function <T extends object>(Component: React.ComponentType<T & Props>) {
	return function (props: T) {
		const scope = React.useRef<HTMLElement>(null);

		// Scroll Animation
		useGSAP(
			() => {
				const scrollTrigger = {
					trigger: scope.current,
					start: 'top',
					end: 'bottom',
					scrub: 1.5,
				};

				gsap.to('.hero-content', {
					ease: 'sine.inOut',
					scale: 0.5,
					autoAlpha: 0,
					rotateX: 45,
					// yPercent: 100,
					scrollTrigger,
				});

				gsap.to('.button', {
					xPercent: (index: number) => (index % 2 === 0 ? -100 : 100),
					yPercent: (index: number) => (index % 2 === 0 ? -100 : 100),
					scrollTrigger,
				});

				gsap.to('.text-content', {
					yPercent: -200,
					xPercent: (index: number) => (index % 2 === 0 ? -100 : 100),
					ease: 'sine.inOut',
					scrollTrigger,
				});

				gsap.to('[data-parallax]', {
					top: '-100%',
					left: () => `${Math.floor(Math.random() * 101)}%`,
					ease: 'sine.inOut',
					stagger: {
						each: 0.01,
						amount: 0.01,
					},
					// delay: (index: number) => (index % 2 === 0 ? 0.5 : 1),
					scrollTrigger,
				});
			},
			{ scope },
		);

		// Reveal
		useGSAP(
			() => {
				const heading: HTMLElement[] = gsap.utils.toArray('.heading > div > span');
				const paragraph: HTMLElement[] = gsap.utils.toArray('.paragraph > div > span');
				const buttons: HTMLElement[] = gsap.utils.toArray('.button');
				const timeline = gsap.timeline();

				timeline
					.to('.text-content, .button-content', {
						opacity: 100,
					})
					.from(heading, {
						yPercent: 100,
						skewX: 45,
						ease: 'sine.inOut',

						stagger: {
							each: 0.5,
							amount: 1,
						},
					})
					.from(paragraph, {
						yPercent: 100,
						ease: 'sine.inOut',
						stagger: {
							each: 0.5,
							amount: 1,
						},
					})
					.from(buttons, {
						x: (index: number) => (index % 2 === 0 ? -100 : 100),
						yPercent: 100,
						skewX: 45,
						scale: 1.5,
						opacity: 0,
						ease: 'circ.in',
					});
			},
			{ scope },
		);

		return <Component {...{ ...props, scope }} />;
	};
}
