import Link from "next/link";
import Image from "next/image";
import layersLogo from "../public/logo-0.0.3.svg";
import twitterIcon from "../public/twitter-icon.svg";
import commonGroundIcon from "../public/cg-icon.svg";

export default function Home() {
  return (
    <>
      <div className="min-h-screen pt-6 pb-20 text-layers-pink-light font-mono font-extralight bg-dark-brown-grey flex flex-col justify-around items-center">
        <div className="flex flex-col justify-around items-center max-w-md px-20 ">
          <Image src={layersLogo} alt="Layers logo" height={400} width={400} />
        </div>
      </div>
      <div className="min-h-screen pt-4 pb-20 font-mono text-layers-pink-light bg-lighter-brown-grey flex flex-col justify-around items-center">
        <div className={`max-w-[30rem] mx-4 my-40 sm:m-40 text-xl text-left opacity-80`}>
          <p className="mb-20">Just a bit longer.</p>
        </div>
        <div className="mb-40 flex justify-center items-center gap-20">
          <Link href="https://twitter.com/mapsyourway" target="_blank">
            <Image src={twitterIcon} alt="Twitter: updates about the project." height={40} width={40} />
          </Link>
          <Link href="https://app.cg/community/NCTwbWjKE5?ref=hpYWNFp7" target="_blank">
            <Image src={commonGroundIcon} alt="Common Ground: team and community chat server." height={42} width={42} />
          </Link>
        </div>
      </div>
    </>
  );
}
