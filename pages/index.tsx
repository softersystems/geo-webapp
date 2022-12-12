import Link from "next/link";
import Image from "next/image";
import planetBoi from "../public/planet boi 3 color gradient transparent.png";
import twitterIcon from "../public/twitter-icon.svg";
import gitHubIcon from "../public/github-icon.svg";
import commonGroundIcon from "../public/cg-icon.svg";
import localFont from "@next/font/local";

const fontDigitalDream = localFont({ src: "../public/Digitaldream.ttf" });

export default function Home() {
  return (
    <div className="min-h-screen text-layers-pink font-extralight bg-dark-brown-grey">
      <div className="fixed flex flex-row justify-around items-center">
        <h1 className="text-center p-6">
          <Link href="/">Layers</Link>
        </h1>
        <h2>
          <Link href="/about">(About)</Link>
        </h2>
      </div>
    </div>
  );
}
