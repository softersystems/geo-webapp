import Link from "next/link";
import Image from "next/image";
import planetBoi from "../public/planet boi 3 color gradient transparent.png";

export default function Home() {
  return (
    <div className="min-h-screen pt-20 bg-dark-brown-grey">
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-md px-20">
          <Image src={planetBoi} alt="Picture of the author" className="fit" />
          {/* <div className="w-2/3 shadow-md p-6 rounded-lg mb-8 flex flex-col items-center">
          <p className="text-xl text-center mt-6"></p>
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
    </div>
  );
}
