import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function cn(...args: ClassValue[]) {
	return twMerge(clsx(args));
}
