import Link from "next/link";
import Image from "next/image";
import layersLogo from "../public/logo-0.0.1.3.png";
import twitterIcon from "../public/twitter-icon.svg";
import commonGroundIcon from "../public/cg-icon.svg";
import localFont from "@next/font/local";

const fontITCGaramond = localFont({
  src: "../public/itcgaramondstd-ltcond.otf",
});
const fontCircle = localFont({
  src: "../public/Circle-PhotoshopSupply.otf",
});
const fontDigitalDream = localFont({
  src: "../public/Digitaldream.ttf",
});

export default function Home() {
  return (
    <>
      <div className="min-h-screen pt-4 pb-20 text-layers-pink-light font-extralight bg-dark-brown-grey flex flex-col justify-around items-center">
        <div className="flex flex-col justify-around items-center gap-[2rem] max-w-md px-20 ">
          <Image
            src={layersLogo}
            alt="Layers logo"
            className="fit max-w-[80%]"
          />
          <h1
            className={`mt-3 text-5xl text-transparent bg-title-gradient bg-clip-text tracking-[0.5rem] indent-[0.5rem] ${fontCircle.className}`}
          >
            Layers
          </h1>
        </div>

        <h2
          className={`text-2xl text-center tracking-widest opacity-50 ${fontITCGaramond.className}`}
        >
          Maps,
          <p />
          evolved.
        </h2>
      </div>
      <div className="min-h-screen pt-4 pb-20 text-layers-pink-light bg-lighter-brown-grey flex flex-col justify-around items-center">
        <div
          className={`max-w-[30rem] mx-4 my-40 sm:m-40 text-2xl text-left tracking-widest opacity-80 ${fontITCGaramond.className}`}
        >
          <span className={`text-9xl opacity-80 ${fontCircle.className}`}>
            L
          </span>
          ayers is a new type of maps app: collaborative, decentralised and
          extensively customisable.
          <br />
          <br />
          <span className={`text-9xl opacity-80 ${fontCircle.className}`}>
            I
          </span>
          n development for iOS and Android, it&apos;ll be home to dynamic maps,
          or data &apos;layers&apos;, that users will be able to tune in and out
          of, as they navigate the world with unique interests and needs. No
          more one-size-fits-all.
          <br />
          <br />
          <span className={`text-9xl opacity-80 ${fontCircle.className}`}>
            S
          </span>
          ome layers will be simple collections of places, while others will be
          new and experimental location-based use cases for latest Web3 and
          geo-technologies.
          <br />
          <br />
          <span className={`text-9xl opacity-80 ${fontCircle.className}`}>
            T
          </span>
          he first of these special layers will be{" "}
          <Link href="/art" className={"underline"}>
            The Art Layer
          </Link>
          , which is planned as the primary (perhaps only?) use case when the
          app launches in Spring 2023. Further development on this layer and
          others will depend on community feedback.
          <br /> <br />
          <span className={`text-9xl opacity-80 ${fontCircle.className}`}>
            A
          </span>{" "}
          more active social media presence will come down the line. For now,
          you can follow to be the first to learn more, join the conversation on
          Common Ground, and feel free to reach out with any thoughts, questions
          or comments.
        </div>
        <div className="mb-40 flex justify-center items-center gap-20">
          <Link href="https://twitter.com/layerslive" target="_blank">
            <Image
              src={twitterIcon}
              alt="Twitter: updates about the project."
              height={40}
              width={40}
            />
          </Link>
          <Link
            href="https://app.cg/community/NCTwbWjKE5?ref=hpYWNFp7"
            target="_blank"
          >
            <Image
              src={commonGroundIcon}
              alt="Common Ground: team and community chat server."
              height={42}
              width={42}
            />
          </Link>
          {/* <Link
            href="https://github.com/GIRLYDAO/layers-webapp"
            target="_blank"
          >
            <Image
              src={gitHubIcon}
              alt="GitHub: public codebase."
              height={30}
              width={30}
            />
          </Link> */}
        </div>
        <footer
          className={`text-center mt-6 opacity-50 tracking-widest ${fontITCGaramond.className}`}
        >
          A&nbsp;&nbsp;&nbsp;
          <Link href="https://girly.network" target="_blank">
            <span
              className={`text-m leading-[3rem] ${fontDigitalDream.className}`}
            >
              GIRLY
            </span>
          </Link>
          &nbsp;&nbsp;project by{" "}
          <Link
            href="https://twitter.com/saniagarciadev"
            target="_blank"
            className="underline"
          >
            Sania García
          </Link>
          .
        </footer>
      </div>
    </>
  );
}
