import dynamic from "next/dynamic";

export default function Home() {
	const { Layout } = resources;
	return (
		<Layout>
			<main>
				<h1>Hello World</h1>
			</main>
		</Layout>
	);
}

const resources = {
	Layout: dynamic(() => import("@/components/layouts/app")),
};
