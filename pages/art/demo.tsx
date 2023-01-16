import Link from "next/link";
import Image from "next/image";
import planetBoi from "../../public/planet boi 3 color gradient transparent.png";
import twitterIcon from "../../public/twitter-icon.svg";
import gitHubIcon from "../../public/github-icon.svg";
import commonGroundIcon from "../../public/cg-icon.svg";
import localFont from "@next/font/local";

const fontDigitalDream = localFont({ src: "../../public/Digitaldream.ttf" });

export default function Home() {
  return (
    <div className="min-h-screen text-layers-pink font-extralight bg-dark-brown-grey">
      <nav className="text-center p-6">
        <Link href="/">Layers</Link>
      </nav>
      <div className="fixed flex flex-row justify-around items-center">
        <h1>The Art Layer</h1>
        <h2>IRL discovery tool and marketplace</h2>
        <h3>iOS/Android Beta</h3>
      </div>
    </div>
  );
}
