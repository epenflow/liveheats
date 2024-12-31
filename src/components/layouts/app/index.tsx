import dynamic from "next/dynamic";
import React from "react";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
	const { Navbar } = resources;
	const Children = () => children;

	return (
		<React.Fragment>
			<Navbar />
			<Children />
		</React.Fragment>
	);
};

const resources = {
	Navbar: dynamic(() => import("@/components/base/navbar")),
};
export default Layout;
