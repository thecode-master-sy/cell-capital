import localFont from "next/font/local";

const ppNeueMonteralBook = localFont({
  src: [
    {
      path: "../public/fonts/NeueMonteral/PPNeueMontreal-Book.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-pp-neue", // Optional: for CSS variable usage
  display: "swap", // Optimize font loading to reduce CLS
});

export default ppNeueMonteralBook;
