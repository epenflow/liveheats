import React from "react";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
	const Children = () => children;

	return (
		<React.Fragment>
			<Children />
		</React.Fragment>
	);
};
export default Layout;
