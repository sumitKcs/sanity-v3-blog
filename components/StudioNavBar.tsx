import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavBar = (props: any) => {
  return (
    <div>
      {/* customizations here  */}
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#f7ab0a] flex items-center">
          <ArrowUturnLeftIcon className="w-6 h-6 text-[#f7ab0a] mr-2" />
          Go to the website
        </Link>
      </div>
      {/*  default navbar */}
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavBar;
