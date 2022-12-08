import Link from "next/link";
import Image from "next/image";
import planetBoi from "../public/planet boi 3 color gradient transparent.png";
import twitterIcon from "../public/twitter-icon.svg";
import gitHubIcon from "../public/github-icon.svg";
import commonGroundIcon from "../public/cg-icon.svg";

export default function Home() {
  return (
    <div className="min-h-screen py-20 font-extralight bg-dark-brown-grey flex flex-col justify-around items-center">
      <div className="max-w-md px-20 ">
        <Image src={planetBoi} alt="Picture of the author" className="fit" />
      </div>
      <h2 className="text-center mt-6 text-layers-pink">Now in development.</h2>
      <div className="flex justify-center items-center">
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
            height={23}
            width={23}
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

        {/* <div className="w-2/3 shadow-md p-6 rounded-lg mb-8 flex flex-col items-center">
          <p className="text-base text-gray-400  text-center mt-2"></p>
          <Link href={`/profile/`}>
            <p className="cursor-pointer text-violet-600 text-lg font-medium text-center mt-2 mb-2">
              Link{" "}
            </p>
          </Link>
          <p className="text-pink-600 text-sm font-medium text-center">
            followers
          </p>
        </div> */}
      </div>
    </div>
  );
}
