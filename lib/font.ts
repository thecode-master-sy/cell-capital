import localFont from "next/font/local";

const helveticaNeue = localFont({
	src: [
		{
			path: "../public/fonts/HelveticaNeue/HelveticaNeue-UltraLightItalic.woff2",
			weight: "200",
			style: "italic",
		},
		{
			path: "../public/fonts/HelveticaNeue/HelveticaNeue-UltraLight.woff2",
			weight: "200",
			style: "normal",
		},
		{
			path: "../public/fonts/HelveticaNeue/HelveticaNeue-ThinItalic.woff2",
			weight: "100",
			style: "italic",
		},
		{
			path: "../public/fonts/HelveticaNeue/HelveticaNeue-Italic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "../public/fonts/HelveticaNeue/HelveticaNeue-Thin.woff2",
			weight: "100",
			style: "normal",
		},
		{
			path: "../public/fonts/HelveticaNeue/HelveticaNeue-Roman.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/HelveticaNeue/HelveticaNeue-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/HelveticaNeue/HelveticaNeue-MediumItalic.woff2",
			weight: "500",
			style: "italic",
		},
		{
			path: "../public/fonts/HelveticaNeue/HelveticaNeue-LightItalic.woff2",
			weight: "300",
			style: "italic",
		},
		{
			path: "../public/fonts/HelveticaNeue/HelveticaNeue-Italic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "../public/fonts/HelveticaNeue/HelveticaNeue-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../public/fonts/HelveticaNeue/HelveticaNeue-HeavyItalic.woff2",
			weight: "900",
			style: "italic",
		},
		{
			path: "../public/fonts/HelveticaNeue/HelveticaNeue-Heavy.woff2",
			weight: "900",
			style: "normal",
		},
		{
			path: "../public/fonts/HelveticaNeue/HelveticaNeue-BoldItalic.woff2",
			weight: "700",
			style: "italic",
		},
		{
			path: "../public/fonts/HelveticaNeue/HelveticaNeue-BlackItalic.woff2",
			weight: "900",
			style: "italic",
		},
		{
			path: "../public/fonts/HelveticaNeue/HelveticaNeue-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/fonts/HelveticaNeue/HelveticaNeue-Black.woff2",
			weight: "900",
			style: "normal",
		},
	],
	variable: "--font-helvetica-neue", // Optional: for CSS variable usage
	display: "swap", // Optimize font loading to reduce CLS
});

export default helveticaNeue;
