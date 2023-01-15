import Link from "next/link";
import Image from "next/image";
import layersLogo from "../public/logo-0.0.1.png";
import twitterIcon from "../public/twitter-icon.svg";
import gitHubIcon from "../public/github-icon.svg";
import commonGroundIcon from "../public/cg-icon.svg";
import localFont from "@next/font/local";

const fontDigitalDream = localFont({ src: "../public/Digitaldream.ttf" });
const fontCircle = localFont({
  src: "../public/Circle-PhotoshopSupply.otf",
});

export default function Home() {
  return (
    <div className="min-h-screen py-20 text-layers-pink font-extralight bg-dark-brown-grey flex flex-col justify-around items-center">
      <div className="max-w-md px-20 ">
        <Image src={layersLogo} alt="Picture of the author" className="fit" />
      </div>
      <h1 className={`text-5xl tracking-[0.5rem] ${fontCircle.className}`}>
        Layers
      </h1>
      <h2 className="text-center mt-6 ">
        A&nbsp;&nbsp;&nbsp;
        <span className={`leading-[3rem] ${fontDigitalDream.className}`}>
          <Link href="https://girly.network" target="_blank">
            GIRLY
          </Link>
        </span>
        &nbsp;&nbsp;project.
        <p />
        Now in development.
      </h2>
      <div className="flex justify-center items-center gap-8">
        <Link href="https://twitter.com/layerslive" target="_blank">
          <Image
            src={twitterIcon}
            alt="Twitter: updates about the project."
            height={30}
            width={30}
          />
        </Link>
        <Link
          href="https://app.commonground.cg/community/NCTwbWjKE5?ref=hpYWNFp7"
          target="_blank"
        >
          <Image
            src={commonGroundIcon}
            alt="Common Ground: team and community chat server."
            height={32}
            width={32}
          />
        </Link>
        <Link href="https://github.com/GIRLYDAO/layers-webapp" target="_blank">
          <Image
            src={gitHubIcon}
            alt="GitHub: public codebase."
            height={30}
            width={30}
          />
        </Link>
      </div>
    </div>
  );
}
