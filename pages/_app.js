import { Lexend } from "@next/font/google";
import "../styles/globals.css";

const lexendFont = Lexend({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return <Component className={lexendFont.className} {...pageProps} />;
}

export default MyApp;
