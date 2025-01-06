import dynamic from 'next/dynamic';
import React from 'react';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
	const { Navbar, Lenis, Footer } = resources;
	const Children = () => children;

	return (
		<React.Fragment>
			<Lenis>
				<Navbar />
				<Children />
				<Footer />
			</Lenis>
		</React.Fragment>
	);
};

const resources = {
	Navbar: dynamic(() => import('@/components/base/navbar')),
	Lenis: dynamic(() => import('@/components/lenis/index')),
	Footer: dynamic(() => import('@/components/base/footer')),
};
export default Layout;
