import Image from "next/image";
import Link from "next/link";
import profileImg from "/public/profileImg.png";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center">
        <div className="w-20 rounded-full overflow-hidden border border-solid border-dark">
          <Image
            src={profileImg}
            alt="Philip Knight"
            className="w-full h-auto rounded-full"
          />
        </div>
        <span className="font-bold text-2xl">Philip Knight</span>
      </div>
    </Link>
  );
};

export default Logo;
