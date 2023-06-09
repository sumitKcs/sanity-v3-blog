import Link from "next/link";
import Image from "next/image";
import { blogConfig } from "@/util/constants";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-[50%] object-cover"
            height={50}
            width={50}
            src={blogConfig.LOGO_URL}
            alt="logo"
          />
        </Link>
        <h1>{blogConfig.TITLE}</h1>
      </div>
      <div>
        <Link
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center"
          href="/studio"
        >
          Goto Studio
        </Link>
      </div>
    </header>
  );
};

export default Header;
