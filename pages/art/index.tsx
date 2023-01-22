import Link from "next/link";
import Image from "next/image";
import planetBoi from "../../public/planet boi 3 color gradient transparent.png";
import twitterIcon from "../../public/twitter-icon.svg";
import gitHubIcon from "../../public/github-icon.svg";
import commonGroundIcon from "../../public/cg-icon.svg";
import localFont from "@next/font/local";

const fontITCGaramond = localFont({
  src: "../../public/itcgaramondstd-ltcond.otf",
});
const fontCircle = localFont({
  src: "../../public/Circle-PhotoshopSupply.otf",
});

export default function Home() {
  return (
    <div className="min-h-screen text-dark-brown-grey font-extralight bg-layers-pink-light">
      <nav className="absolute text-left p-6">
        <Link
          href="/"
          className={`text-3xl ${fontCircle.className} opacity-60`}
        >
          Layers
        </Link>
      </nav>
      <div className="min-h-screen bg-logo-gradient flex flex-col justify-around items-center">
        <div
          className={`p-[10rem] text-right tracking-[1rem] bg-white-planet bg-contain bg-no-repeat bg-center flex flex-col justify-around items-end gap-5 ${fontITCGaramond.className}`}
        >
          <h1 className={"text-7xl uppercase "}>
            The Art
            <p />
            Layer
          </h1>
          <h2 className={"text-xl uppercase tracking-[0.5rem] opacity-70"}>
            IRL discovery tool
            <p />
            and marketplace
          </h2>
          <h3 className={"text-xl tracking-[0.5rem] opacity-70"}>
            Spring 2023
          </h3>
        </div>
      </div>
      {/* <div className="min-h-screen bg-gray-300 flex flex-col justify-around items-center"></div> */}
    </div>
  );
}
