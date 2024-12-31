import { Inter, Lora, Mr_Dafoe, VT323 } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});
const vt323 = VT323({
	subsets: ["latin"],
	variable: "--font-vt323",
	weight: "400",
});
const mrDafoe = Mr_Dafoe({
	subsets: ["latin"],
	variable: "--font-mr-dafoe",
	weight: "400",
});
const lora = Lora({
	subsets: ["latin"],
	variable: "--font-lora",
});
const fonts = {
	inter: inter.variable,
	vt323: vt323.variable,
	mrDafoe: mrDafoe.variable,
	lora: lora.variable,
};
export default fonts;
