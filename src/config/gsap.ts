'use client';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
try {
	gsap.registerPlugin(ScrollTrigger, useGSAP, TextPlugin);
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
