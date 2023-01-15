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
    <div className="min-h-screen text-layers-pink-light font-extralight bg-dark-brown-grey">
      <nav className="absolute text-left p-6">
        <Link
          href="/"
          className={`text-3xl tracking-[0.5rem] ${fontCircle.className}`}
        >
          Layers
        </Link>
      </nav>
      <div className="min-h-screen flex flex-col justify-around items-center">
        <div
          className={`text-right tracking-[1rem] flex flex-col justify-around items-end gap-5 ${fontITCGaramond.className}`}
        >
          <h1 className={"text-7xl uppercase"}>
            The Art
            <p />
            Layer
          </h1>
          <h2 className={"text-xl uppercase tracking-[0.5rem]"}>
            IRL discovery tool
            <p />
            and marketplace
          </h2>
          <h3 className={"text-xl tracking-[0.5rem]"}>
            iOS/Android Beta
            <p />
            coming Spring 2023
          </h3>
        </div>
      </div>
    </div>
  );
}
