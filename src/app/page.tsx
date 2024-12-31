import dynamic from 'next/dynamic';

export default function Home() {
	const { Layout, Views } = resources;
	return (
		<Layout>
			<main>
				{Object.entries(Views).map(([key, Component]) => (
					<Component key={key} />
				))}
			</main>
		</Layout>
	);
}

const resources = {
	Layout: dynamic(() => import('@/components/layouts/app')),
	Views: {
		Hero: dynamic(() => import('@/components/views/hero')),
	},
};
