import fonts from "./fonts";
import "./globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${fonts.inter} ${fonts.lora} ${fonts.mrDafoe} ${fonts.vt323} antialiased bg-black text-white`}
			>
				{children}
			</body>
		</html>
	);
}
