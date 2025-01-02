import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				inter: `var(--font-inter)`,
				'vt-323': 'var(--font-vt323)',
				'mr-dafoe': 'var(--font-mr-dafoe)',
				lora: 'var(--font-lora)',
			},
			colors: {
				grey: {
					100: 'var(--grey-100)',
					200: 'var(--grey-200)',
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
