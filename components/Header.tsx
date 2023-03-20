import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-[50%] object-cover"
            height={50}
            width={50}
            src="https://media.tenor.com/Gox0-B97R4gAAAAC/pikachu-smile.gif"
            alt="logo"
          />
        </Link>
        <h1>The Pika</h1>
      </div>
      <div>
        <Link 
        className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center"
        href="/studio">
            Goto Studio
        </Link>
      </div>
    </header>
  );
};

export default Header;
