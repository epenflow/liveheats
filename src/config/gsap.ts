'use client';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger, TextPlugin } from 'gsap/all';

try {
	gsap.registerPlugin(ScrollTrigger, useGSAP, TextPlugin);
	ScrollTrigger.defaults({
		markers: process.env.NODE_ENV === 'development',
	});
	if (process.env.NODE_ENV !== 'production') {
		console.log('gsap registered ScrollTrigger');
	}
} catch (error) {
	if (process.env.NODE_ENV !== 'production') {
		console.error(error);
	}
}
export { ScrollTrigger, TextPlugin, useGSAP };
export default gsap;
