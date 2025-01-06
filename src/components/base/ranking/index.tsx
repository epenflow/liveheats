import Image from 'next/image';
import SplitText from '../split-text';

const Ranking = () => {
	return (
		<div
			data-stepper
			className="flex container items-center justify-center space-x-5">
			<div className="space-y-5">
				<div className="text-4xl font-bold flex flex-col">
					<SplitText>Automated rankings -</SplitText>
					<SplitText>say goodbye to spreadsheets</SplitText>
				</div>
				<div className="text-white/70">
					<SplitText>Event results automatically drive your season</SplitText>
					<br />
					<SplitText>or tour rankings or ratings - with complete</SplitText>
					<br />
					<SplitText>flexibility to use your club or tour points system.</SplitText>
				</div>
			</div>
			<Image
				src={'./Ranking.svg'}
				alt="Ranking"
				width={0}
				height={0}
				sizes="100vh"
				className="w-[620px] h-auto object-contain"
			/>
		</div>
	);
};
export default Ranking;
