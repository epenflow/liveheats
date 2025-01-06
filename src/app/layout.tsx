import cn from '@/libs/utils/cn';
import fonts from './fonts';
import './globals.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				suppressHydrationWarning
				className={cn(
					'antialiased bg-black text-white',
					fonts.inter,
					fonts.lora,
					fonts.mrDafoe,
					fonts.vt323,
				)}>
				{children}
			</body>
		</html>
	);
}
