'use client';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

try {
	gsap.registerPlugin(ScrollTrigger, useGSAP);
	if (process.env.NODE_ENV !== 'production') {
		console.log('gsap registered ScrollTrigger');
	}
} catch (error) {
	if (process.env.NODE_ENV !== 'production') {
		console.error(error);
	}
}
export { gsap, ScrollTrigger, useGSAP };
export default gsap;
