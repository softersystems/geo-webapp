import Link from "next/link";
import Image from "next/image";
import localFont from "@next/font/local";
import layersLogo from "../public/logo-0.0.3.svg";
import twitterIcon from "../public/twitter-icon.svg";
import commonGroundIcon from "../public/cg-icon.svg";

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
      <div className="min-h-screen pt-6 pb-20 text-layers-pink-light font-extralight bg-dark-brown-grey flex flex-col justify-around items-center">
        <div className="flex flex-col justify-around items-center max-w-md px-20 ">
          <Image src={layersLogo} alt="Layers logo" height={400} width={400} />
        </div>

        <h2
          className={`text-3xl text-center tracking-widest opacity-50 ${fontITCGaramond.className}`}
        >
          Maps,
          <p />
          evolved.
        </h2>
      </div>
      <div className="min-h-screen pt-4 pb-20 text-layers-pink-light bg-lighter-brown-grey flex flex-col justify-around items-center">
        <div
          className={`max-w-[30rem] mx-4 my-40 sm:m-40 text-xl text-left opacity-80`}
        >
          <p className="mb-20">
            <span
              className={`text-dropcap float-left w-9 pl-0.5 -mb-12 ${fontITCGaramond.className}`}
            >
              L{" "}
            </span>
            ayers is a new type of maps app: dynamic, decentralised and
            collaborative.
          </p>
          <p className="mb-20">
            <span
              className={`text-dropcap float-left w-9 pl-0.5 -mb-12 ${fontITCGaramond.className}`}
            >
              I{" "}
            </span>
            n development for iOS and Android, it&apos;ll be home to dynamic
            maps, or data &apos;layers&apos;, that users will be able to tune in
            and out of, as they navigate the world with unique interests and
            needs. No more one-size-fits-all.
          </p>

          <p className="mb-20">
            <span
              className={`text-dropcap float-left w-9 pl-0.5 -mb-12 ${fontITCGaramond.className}`}
            >
              S{" "}
            </span>
            ome layers will be simple collections of places, while others will
            be new and experimental location-based use cases for latest Web3 and
            geo-technologies.
          </p>

          <p className="mb-20">
            <span
              className={`text-dropcap float-left w-9 pl-0.5 -mb-12 ${fontITCGaramond.className}`}
            >
              T{" "}
            </span>
            he first of these special layers will be{" "}
            <Link href="/art" className={"underline"}>
              The Art Layer
            </Link>
            , which is planned as the primary (perhaps only?) use case when the
            app launches in Spring 2023. Further development on this layer and
            others will depend on community feedback.
          </p>

          <p className="mb-20">
            <span
              className={`text-dropcap float-left w-9 pl-0.5 -mb-12 ${fontITCGaramond.className}`}
            >
              A{" "}
            </span>{" "}
            more active social media presence will come down the line. For now,
            you can follow to be the first to learn more, join the conversation
            on Common Ground, and feel free to reach out with any thoughts,
            questions or comments.
          </p>
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
