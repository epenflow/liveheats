import dynamic from 'next/dynamic';
import Link from 'next/link';
import './base.css';
const Navbar = () => {
	const { Liveheats, navigation } = resources;

	return (
		<header className="header-container">
			<nav className="header-navigation">
				<Liveheats className="liveheats" />
				<section className="navigation">
					{navigation.map(({ href, label }) => (
						<Link
							key={label}
							href={href}
							className="navigation-button">
							{label}
						</Link>
					))}
				</section>
			</nav>
		</header>
	);
};
const resources = {
	navigation: [
		{ href: '#', label: 'Login' },
		{ href: '#', label: 'Register' },
	] as Array<{ href: string; label: string }>,
	Liveheats: dynamic(() => import('@/components/base/liveheats')),
};
export default Navbar;
